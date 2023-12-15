import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  
} from "@material-tailwind/react";
import Containers from "../container/Containers";
import { GiHealing } from "react-icons/gi";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
export function Navbars() {
  const [openNav, setOpenNav] = React.useState(false);
  const {user,logOut} = useAuth();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex  flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:border "
      >
        <Link href="/" className="flex items-center">
        Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:border"
      >
        <Link to="/contact" className="flex items-center">
        Contact
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:border"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:border"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );
 

  const handleLogout=()=>{


    logOut().then(()=>alert('logOut')).catch((err)=>console.log(err))

  }



  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] ">
      <Navbar className="sticky bg-[#B91C1C] text-white  top-0 z-10 h-max max-w-full rounded-none px-4  lg:px-8 lg:py-4">
      
       <Containers>
       <div className="flex items-center justify-between  py-2  text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 flex items-center  font-medium"
          >
           <GiHealing className="text-5xl"/>  Blood Donation
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            
            {user? 
            <>
            
            <Button onClick={handleLogout}  className="text-white">
               LogOut
            </Button>

            </>: <>
            
            <div className="flex items-center gap-x-1">
            <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                    <Typography
     
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:border"
      >
        <Link to="/login" className="flex items-center">
       Login
        </Link>
      </Typography>
              </Button>


{/* register */}

              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
              >
                    <Typography
        
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:border"
      >
        <Link to="/register" className="flex items-center">
         Register
        </Link>
      </Typography>
              </Button>
            </div>
            </>}

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
       </Containers>


        <MobileNav className="px-10" open={openNav}>
          {navList}
          <div className="flex j items-center ">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>

     

    </div>
  );
}