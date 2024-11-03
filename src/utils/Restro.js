import { useEffect, useState } from "react"
import { RestroDetails } from "./constant"

const useRestro=(id)=>{
    const [restro,setRestroDetails]=useState(null)

    useEffect(()=>{
       restroDetails()
    },[])
    async function  restroDetails(){
        console.log(RestroDetails+id)
        const result= await fetch(RestroDetails+id);
        const response= await result.json();
        console.log(response);
        setRestroDetails(response)
    }
   return restro;
    
}

export default useRestro;