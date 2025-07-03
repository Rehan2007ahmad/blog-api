const User = require('../models/user.models');
const bcrytp = require('bcryptjs');



exports.createUser = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        if(!firstName || !lastName || !email || !password ) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }


        const hashPassword = await bcrytp.hash(password, 10);
        if (!hashPassword) {
            return res.status(500).json({ message: 'Error hashing password' });
        }


        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            role,
        });

        const savedUser = await newUser.save();
        const token = savedUser.generateAuthToken();

        res.status(201).json({
            message: 'User created successfully',
            user: savedUser,
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });   
    }
}

exports.loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }
        
        const user = await User.findOne({ email})
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrytp.compare(password,  user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = user.generateAuthToken();
        res.status(200).json({
            message: 'Login successful',
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role
            },  
            token: token
        });

    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
        
    }
}

exports.getUser = async (req,res)=>{
    try {
        const userId = req.params.id;
        const user = await User.findById(userId)

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        //exclude password from the response        
        user.password = undefined;

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        users.forEach(user => {
            user.password = undefined; 
        });
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}   

exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.updateUser = async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (email && email !== user.email) {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already in use' });
            }
        }

        if (password && password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        // Update user fields
        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.email = email || user.email; 
        user.role = role || user.role;  
        user.password = user.password; 

        if (password) {
            user.password = await bcrytp.hash(password, 10);
        }

        const updatedUser = await user.save();
        updatedUser.password = undefined; // Exclude password from response

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}
