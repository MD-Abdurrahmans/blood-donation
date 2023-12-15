
import Lottie from 'lottie-react';
import errorImg from '../../assets/errorPage.json'

const Error = () => {
    return (
        <div>
              <div className='min-h-screen flex justify-center items-center'>
                 
                    <div className='flex flex-col justify-center items-center'>
                         <h1 className='text-7xl text-[#DC2626]'>Page Not Found</h1>
                         <Lottie  className='w-1/2'  animationData={errorImg} ></Lottie>
                    </div>
              </div>
        </div>
    );
};

export default Error;