import React from 'react';
import callImg from '../../assets/images/call.png'
import textImg from '../../assets/images/text.png'
import videoImg from '../../assets/images/video.png'

const RightDown = () => {

    return (
          <div className='border border-gray-200 rounded-2xl px-6 py-12'>
            <div className="">
                <h1 className='text-xl text-[#244D3F] font-medium mb-3.5'>Quick Check-In</h1>
            </div>
            <div className="flex justify-around gap-4">
              <button className='btn grid grid-cols-1 sm:px-20 pb-20 pt-5'>
                <div className=""><img src={callImg} alt="" /></div>
                <p>Call</p>
              </button>
              <button className='btn grid grid-cols-1 sm:px-20 pb-20 pt-5'>
                <div className=""><img src={textImg} alt="" /></div>
                <p>Text</p>
              </button>
              <button className='btn grid grid-cols-1 sm:px-20 pb-20 pt-5'>
                <div className=""><img src={videoImg} alt="" /></div>
                <p>Video</p>
              </button>
            </div>
        </div>
    );
};

export default RightDown;