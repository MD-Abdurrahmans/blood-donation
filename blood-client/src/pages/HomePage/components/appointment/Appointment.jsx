/** @format */

import Container from "../../../../utils/container/Container";
import appoint from '../../../../../public/appoint.png'
const Appointment = () => {
  return (
    <div>
      <Container>

      
 <div className="flex justify-center items-center flex-wrap">


<div className="flex-1">
    <img src={appoint} className="w-1/2"   alt="" />
</div>

    
          {/* form */}
          <div className='flex-1'>
   
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
 </div>


      </Container>
    </div>
  );
};

export default Appointment;
