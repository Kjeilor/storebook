import React from 'react';
import SignUpFlow from './Signupflow'; // Import the multi-step flow component

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Render the multi-step sign-up flow */}
      <SignUpFlow />
    </div>
  );
}

export default Signup;
