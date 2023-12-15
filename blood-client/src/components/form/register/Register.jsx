/** @format */

import {useForm} from "react-hook-form";
import useDistrict from "../../../hooks/useDistrict";
import useUpazila from "../../../hooks/useUpazila";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";

const Register = () => {
  const [district] = useDistrict();
  const [upazila] = useUpazila();
  const {user,createUser} = useAuth();
  const axiosSecure = useAxios();

  const districts = district?.districts;
  const upazilas = upazila?.upazilas;
  // console.log(upazilas)

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = async(data) => {
    console.log(data);
    const  result = await  createUser(data.email,data.password);

     if(result.user.email){
      alert('successfully register')
      console.log('result', result)
      const  res = await  axiosSecure.post('/users',data)
  
        console.log('postData',res)
     }else{
       alert('something went wrong register')
     }
   
  };

 // watch input value by passing the name of it

  return (
    <div className='my-5'>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Register now!</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Full Name</span>
                </label>
                <input {...register("name")} className='border p-2' />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input {...register("email")} className='border p-2' />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>B-Group</span>
                </label>
                <select
                  {...register("group")}
                  className='bg-red-800 text-white'
                >
                  <option disabled selected>
                    Group
                  </option>
                  <option value='a+'>A+</option>
                  <option value='b+'>B+</option>
                  <option value='a-'>A-</option>
                  <option value='b-'>B-</option>
                  <option value='o+'>O+</option>
                  <option value='o-'>O-</option>
                </select>
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>District</span>
                </label>
                <select {...register("district")} className=''>
                  <option disabled selected value='District'>
                    District
                  </option>

                  {districts?.map((district) => (
                    <>
                      <option value={district.name}>{district.name}</option>
                    </>
                  ))}
                </select>
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Upazila</span>
                </label>
                <select {...register("upazila")} className=''>
                  <option disabled selected value='District'>
                    Upazila
                  </option>
                  <option value='chittagong'>Chittagong</option>
                  {upazilas?.map((upazila) => (
                    <>
                      <option value={upazila.name}>{upazila.name}</option>
                    </>
                  ))}
                </select>
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input {...register("password")} className='border p-2' />
              </div>

              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Confirm Password</span>
                </label>
                <input
                  {...register("ConfirmPassword")}
                  className='border p-2'
                />
              </div>

              <div className='form-control mt-6'>
                <button type='submit' className='btn text-white bg-[#B91C1C]'>
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
