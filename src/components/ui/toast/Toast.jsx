import React from "react";

const Toast = ({ toastClass }) => {
  return (
    <div
      data-testid="toast-dataid"
      className={`p-5 space-y-4 bg-blue-600 w-max rounded-md text-white fixed top-2 ${toastClass} left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-in-out z-50`}
    >
      <span className="text-center text-xl font-semibold mb-2">
        Your Flashcard is created.
      </span>
    </div>
  );
};

export default Toast;
