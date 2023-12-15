
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import b1 from '../../../../../public/b1.png'
import bImg1 from '../../../../../public/b-img1 (1).png'
import bImg2 from '../../../../../public/b-img2 (1).png'
// import Containers from '../../../../shared/container/Containers';
const Banner = () => {
    return (
        <div>
               <Carousel showArrows={true} >
         
 <div className="hero min-h-[100vh]" style={{backgroundImage: `url(${b1})`}}>
    
<div className='w-full container md:px-10'>
<div className="flex flex-col md:flex-row items-center  justify-between  w-full">
 <div className="max-w-md ">
       <img src={bImg1} className='w-1/2' alt="" />
    </div>

    <div className="max-w-md md:text-white text-justify">
      <h1 className="mb-5 text-5xl font-bold">Donate Life  Be <br/> a Hero, Give Blood Today!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
 </div>+
</div>

 
 
</div>



{/* banner 2 */}

<div className="hero min-h-screen " style={{backgroundImage: `url(${b1})`}}>
    
    <div className='w-full container md:px-10'>
    <div className="flex flex-col md:flex-row items-center  justify-between  w-full">
     <div className="max-w-md ">
           <img src={bImg2} className='w-1/2' alt="" />
        </div>
    
        <div className="max-w-md md:text-white text-justify">
          <h1 className="mb-5 text-5xl font-bold">Every Drop Counts Give the Gift of Life </h1>
          <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
     </div>+
    </div>
    
     
     
    </div>

            </Carousel>
        </div>
    );
};

export default Banner;