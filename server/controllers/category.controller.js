const Category = require('../models/category.models');

exports.createCategory = async (req, res) => {
    const {name} = req.body
    try {
        
        if (!name) {
            return res.status(400).json({
                message: 'Category name is required'
            });
        }
        const extingCategory = await Category.findOne({ name: name });
        if (extingCategory) {  
            return res.status(400).json({
                message: 'Category already exists'
            });
        }   

        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json({
            message: 'Category created successfully',
            category: newCategory
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Error creating category',
    })
}
}

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json({
            categories: categories
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching categories',
            error: error.message
        });
    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }  
        res.status(200).json({
            category: category
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching category by ID',
            error: error.message
        });
    }
}

exports.updateCategory = async (req, res) => {
    const categoryId = req.params.id;
    const { name } = req.body;

    try {
        const updatedCategory = await Category.findByIdAndUpdate(
            categoryId,
            { name },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        res.status(200).json({
            message: 'Category updated successfully',
            category: updatedCategory
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error updating category',
            error: error.message
        });
    }
}

exports.deleteCategory = async (req, res) => {
    const categoryId = req.params.id;

    try {
        const deletedCategory = await Category.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        res.status(200).json({
            message: 'Category deleted successfully',
            category: deletedCategory
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting category',
            error: error.message
        });
    }
}



exports.getCategoryByName = async (req, res) => {
    const { name } = req.params;

    try {
        const category = await Category.findOne({ name: name });

        if (!category) {
            return res.status(404).json({
                message: 'Category not found'
            });
        }

        res.status(200).json({
            category: category
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching category by name',
            error: error.message
        });
    }
}

