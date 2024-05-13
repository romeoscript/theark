import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-blue-500 bg-opacity-50 backdrop-filter backdrop-blur-md">
      <div>
        <BounceLoader color="#36d7b7" size={150}/>
      </div>
    </div>
  );
};

export default Loading;
