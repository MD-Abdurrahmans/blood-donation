import { useQuery } from "@tanstack/react-query";
import axios from 'axios';

const useDistrict = () => {


  

     const {data:district} = useQuery({
         queryKey:['district'],
         queryFn:async()=>{

            const res = await axios.get('../../public/district.json');
            return res.data;
         }
     })
      
    
    //  console.log({district})

    return [district]
};

export default useDistrict;