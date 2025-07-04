const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS
    }
});

exports.sendOtp = async (email, otp) => {
    try {
      const mailOptions = {
            from:process.env.NODEMAILER_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}`,
            html: `<p>Your OTP code is: <strong>${otp}</strong></p>`
        };
        await transporter.sendMail(mailOptions);
        console.log('OTP sent successfully to:', email);
        return { success: true, message: 'OTP sent successfully' };

    } catch (error) {
        console.error('Error sending OTP:', error);
        throw new Error('Failed to send OTP');
    }
}