import React from "react";
import "./styles/loading.css"; // Import the CSS file for custom styles

const Loading = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50'>
      <div className='typewriter'>
        <div className='slide'>
          <i></i>
        </div>
        <div className='paper'></div>
        <div className='keyboard'></div>
      </div>{" "}
    </div>
  );
};

export default Loading;
