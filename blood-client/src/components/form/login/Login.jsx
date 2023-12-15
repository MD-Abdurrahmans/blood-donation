import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { navbar } from "@material-tailwind/react";

const Login = () => {

  const navigate = useNavigate();
 const {user,signIn}= useAuth()

//  console.log(signIn)
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    

       if(user){
        return navigate('/');
       }
      const onSubmit = async(data) => {
        console.log(data)
        const res = await signIn(data?.email,data?.password)

        // console.log('respon',res.user?.email)
             
         if(res.user?.email){

          alert('LogIn successfull')
            return navigate('/');
         }
      }
    // watch input value by passing the name of it
    

    return (
        <div className="my-5">
         <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}  className="card-body">

    

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", )} className="border p-2" />
        </div>


    




    

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
                  <input {...register("password", )} className="border p-2" />

      
        </div>




        <div className="form-control mt-6">
          <button type="submit" className="btn text-white bg-[#B91C1C]">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>

        </div>
    );
};

export default Login;