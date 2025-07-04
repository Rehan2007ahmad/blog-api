const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

exports.sendOtp = async (email, otp) => {
  try {
    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is: ${otp}`,
      html: `
            <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
            <h2 style="color: #4CAF50;">Password Reset OTP</h2>
            <p>Use the following OTP to reset your password:</p>
            <h1 style="background-color: #f2f2f2; display: inline-block; padding: 10px 20px; border-radius: 10px; font-size: 32px; letter-spacing: 4px;">
             ${otp}
            </h1>
            <p style="color: #888;">This OTP is valid for 10 minutes.</p>
            </div>
            `,
    };
    await transporter.sendMail(mailOptions);
    console.log("OTP sent successfully to:", email);
    return { success: true, message: "OTP sent successfully" };
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error("Failed to send OTP");
  }
};
