import React, { useState, useRef, useEffect } from 'react';
import { FaEye, FaEyeSlash  } from "react-icons/fa";

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
  }, []);


  const checkPasswordStrength = (pass) => {
    let strength = 0;
    
    if (pass.length >= 8) strength += 1;
    if (/[a-z]/.test(pass)) strength += 1;
    if (/[A-Z]/.test(pass)) strength += 1;    
    if (/[0-9]/.test(pass)) strength += 1    
    if (/[^A-Za-z0-9]/.test(pass)) strength += 1;
  
    setPasswordStrength(strength);
    
    if (pass && pass.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else if (pass && strength < 3) {
      setPasswordError('Password is too weak');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSetPassword = () => {
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    
    if (passwordStrength < 3) {
      setPasswordError('Password is not strong enough');
      return;
    }
    
    // Here you would typically call an API to set the password
    console.log('Password set successfully');
    setPasswordError('');
    // Redirect or show success message
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
            Create New Password
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Your new password must be different from previous passwords
          </p>
          
          <div className="mb-6 space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-4 py-3 border-none bg-gray-100 rounded-lg text-gray-900 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter new password"
                />
                <button 
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer !rounded-button whitespace-nowrap"
                >
                 {passwordVisible ? <FaEye /> : <FaEyeSlash />} 
                </button>
              </div>
              
              {password && (
                <div className="mt-2">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="text-xs text-gray-600">Password strength:</div>
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          passwordStrength <= 1 ? 'bg-red-500' : 
                          passwordStrength <= 2 ? 'bg-yellow-500' : 
                          passwordStrength <= 3 ? 'bg-blue-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${passwordStrength * 20}%` }}
                      ></div>
                    </div>
                    <div className="text-xs font-medium">
                      {passwordStrength <= 1 ? 'Weak' : 
                       passwordStrength <= 2 ? 'Fair' : 
                       passwordStrength <= 3 ? 'Good' : 
                       passwordStrength <= 4 ? 'Strong' : 'Very Strong'}
                    </div>
                  </div>
                  
                  <ul className="text-xs text-gray-600 space-y-1 mt-2">
                    <li className={`flex items-center ${password.length >= 8 ? 'text-green-600' : ''}`}>
                      <i className={`fas fa-${password.length >= 8 ? 'check text-green-600' : 'times text-gray-400'} mr-2`}></i>
                      At least 8 characters
                    </li>
                    <li className={`flex items-center ${/[A-Z]/.test(password) ? 'text-green-600' : ''}`}>
                      <i className={`fas fa-${/[A-Z]/.test(password) ? 'check text-green-600' : 'times text-gray-400'} mr-2`}></i>
                      At least one uppercase letter
                    </li>
                    <li className={`flex items-center ${/[a-z]/.test(password) ? 'text-green-600' : ''}`}>
                      <i className={`fas fa-${/[a-z]/.test(password) ? 'check text-green-600' : 'times text-gray-400'} mr-2`}></i>
                      At least one lowercase letter
                    </li>
                    <li className={`flex items-center ${/[0-9]/.test(password) ? 'text-green-600' : ''}`}>
                      <i className={`fas fa-${/[0-9]/.test(password) ? 'check text-green-600' : 'times text-gray-400'} mr-2`}></i>
                      At least one number
                    </li>
                    <li className={`flex items-center ${/[^A-Za-z0-9]/.test(password) ? 'text-green-600' : ''}`}>
                      <i className={`fas fa-${/[^A-Za-z0-9]/.test(password) ? 'check text-green-600' : 'times text-gray-400'} mr-2`}></i>
                      At least one special character
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  type={confirmPasswordVisible ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className="w-full px-4 py-3 border-none bg-gray-100 rounded-lg text-gray-900 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Confirm your password"
                />
                <button 
                  type="button"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer !rounded-button whitespace-nowrap"
                >
                   {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />} 
                </button>
              </div>
              
              {confirmPassword && password !== confirmPassword && (
                <p className="mt-1 text-sm text-red-600">
                  Passwords do not match
                </p>
              )}
            </div>
            
            {passwordError && (
              <div className="text-sm text-red-600 mt-1">
                {passwordError}
              </div>
            )}
            
            <button
              onClick={handleSetPassword}
              disabled={!password || !confirmPassword || password !== confirmPassword || passwordStrength < 3}
              className={`w-full py-3 px-4 text-white font-medium rounded-lg !rounded-button whitespace-nowrap cursor-pointer ${
                password && confirmPassword && password === confirmPassword && passwordStrength >= 3
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-indigo-400 cursor-not-allowed'
              } transition-colors duration-200`}
            >
              Set New Password
            </button>
          </div>
          
          <div className="text-center">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              Back to login
            </a>
          </div>
        </div>
        
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-indigo-600 font-medium">Sign up now</a>
        </p>
      </div>
    </div>
  );
};

export default NewPassword;
