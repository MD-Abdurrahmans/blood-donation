
import { PiShieldPlusFill } from "react-icons/pi";

const SectionTitle = ({heading,subHeading}) => {



    return (
        <div className="my-10">
              
              <div className="max-w-md mx-auto ">
              <h1 className="text-5xl font-medium ">{heading}</h1>
                <div className="divider divider-error max-w-sm"> <PiShieldPlusFill className="text-7xl text-red-600"/> </div>

                 <p>{subHeading}</p>
              </div>
              
        </div>
    );
};

export default SectionTitle;