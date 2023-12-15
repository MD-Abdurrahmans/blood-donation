import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const useUpazila = () => {

    const {data:upazila} =  useQuery({
         
        queryKey:['upazila'],
        queryFn:async()=>{

            const res = await axios.get('../../public/upazila.json');

            return res.data;
        }
    })
// console.log(upazila)
    return[upazila]
};

export default useUpazila;