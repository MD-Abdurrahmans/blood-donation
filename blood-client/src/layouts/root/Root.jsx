import { Outlet } from "react-router-dom";
import { Navbars } from "../../shared/navbar/Navbars";



const Root = () => {
    return (
        <div >
             <Navbars/>

              <div className="min-h-screen">
                <Outlet/>
              </div>
        </div>
    );
};

export default Root;