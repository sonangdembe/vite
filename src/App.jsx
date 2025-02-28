import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState(""); // Track password input

  // Function to determine password strength
  const getPasswordStrength = () => {
    if (password.length > 8) return "Strong";
    if (password.length >= 5) return "Medium";
    if (password.length > 0) return "Weak";
    return "";
  };

  return (
    <div>
      <h1>Password Strength Checker</h1>
      <label htmlFor="password">Enter password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} // Update password state
      />
      <p>Password Strength: <strong>{getPasswordStrength()}</strong></p>
    </div>
  );
};

export default PasswordStrengthChecker;
