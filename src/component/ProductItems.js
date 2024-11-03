import { CDN_URL } from "../utils/constant";

const Restro = (props) => {
    const {rest_details}=props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo}=rest_details?.info
  return (
    <div className="m-3">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Image"
        className="w-28 h-28 rounded-full mx-auto mb-3"
      />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-orange-500 font-medium">Rating: {avgRating}</p>
      <p className="text-gray-600 text-sm mt-1">{cuisines.join(", ")}</p>
      <p className="text-gray-800 font-medium mt-2">{costForTwo}</p>
    </div>
  );
  }

export const ActiveRestros=(Restro)=>{
  return (props)=>{
    return(
    <div>
       <label className="bg-gray-300 w-5 bg-slate-800 rounded-[10px] text-white">open</label>
      <Restro {...props}/>
      console.log(props)
    </div>)
   
  }
}


 export default Restro