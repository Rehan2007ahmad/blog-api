import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyOtp = () => {
  let navigate = useNavigate();
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setIsResendDisabled(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(0, 1);
    setOtp(newOtp);
    if (value && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    if (!/^\d+$/.test(pastedData)) return;

    const digits = pastedData.slice(0, 6).split("");
    const newOtp = [...otp];

    digits.forEach((digit, index) => {
      if (index < 6) {
        newOtp[index] = digit;
      }
    });

    setOtp(newOtp);

    if (digits.length < 6 && inputRefs.current[digits.length]) {
      inputRefs.current[digits.length].focus();
    }
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length === 6) {
      setIsVerifying(true);
      try {
        const res = await axios.post(
          "http://localhost:3000/api/user/verify-otp",
          { otp: enteredOtp }
        );

        const { tempToken } = res.data;
        toast.success("OTP verified successfully");
        setTimeout(() => {
          setIsVerifying(false);
          navigate(`/newpassword?token=${tempToken}`);
        }, 1500);
      } catch (error) {
        toast.error("OTP verification failed. Please try again.");
      }
    }
  };

  const handleResendCode = () => {
    if (!isResendDisabled) {
      setTimer(60);
      setIsResendDisabled(true);

      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="bg-white py-8 px-10 shadow rounded-lg">
          <div className="text-center mb-6">
            <h1 className="text-indigo-600 text-2xl font-bold">
              Insight<span className="text-gray-900">Blog</span>
            </h1>
          </div>

          <h2 className="text-center text-2xl font-bold text-gray-900 mb-2">
            Verify your account
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Enter the verification code sent to your email
          </p>

          <div className="mb-6">
            <div className="flex justify-between mb-6">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  name="otp"
                  maxLength={1}
                  className="w-12 h-12 border-none bg-gray-100 rounded-lg text-center text-xl font-semibold focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={otp[index]}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                />
              ))}
            </div>

            <div className="flex justify-between items-center text-sm mb-6">
              <div className="text-gray-500">
                Resend code in{" "}
                <span className="font-medium">{formatTime(timer)}</span>
              </div>
              <button
                onClick={handleResendCode}
                disabled={isResendDisabled}
                className={`${
                  isResendDisabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-indigo-600 cursor-pointer"
                } font-medium !rounded-button whitespace-nowrap`}
              >
                Resend code
              </button>
            </div>

            <button
              onClick={handleVerify}
              disabled={otp.join("").length !== 6 || isVerifying}
              className={`w-full py-3 px-4 text-white font-medium rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${
                otp.join("").length === 6 && !isVerifying
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-indigo-400 cursor-not-allowed"
              } transition-colors duration-200 flex justify-center`}
            >
              {isVerifying ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Verify"
              )}
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              Back to login
            </Link>
          </div>
        </div>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 font-medium">
            Sign up now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
