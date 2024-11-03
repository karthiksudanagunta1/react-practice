import { useEffect, useState } from "react";
import { Shimmer } from "../Shimmer";
import { useParams } from "react-router-dom";
import useRestro from "../utils/Restro.js";
import ItemsComponent from "./itemsComponent.js";

const Restaurant=()=>{
   
    let [displayItems,setItems]=useState(null);
   
    const {resid}=useParams()
    console.log(resid);
  
    const restro=useRestro(resid);
   
    console.log(restro)
    if(!restro){
        return <Shimmer/>
    } 
    const groupedCard = restro?.data?.cards[5]?.groupedCard;

    const regularCards = groupedCard?.cardGroupMap?.REGULAR?.cards;
   
    const reccomended=regularCards.filter(ec=>ec?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   
   const handleDisplay=(id)=>{
     setItems(displayItems===id?null:id)
   }

    // const items=reccomended?.card?.card?.itemCards;

    return(
        <div className="flex-col text-center">
            <ul className="bg-white p-6 rounded-lg shadow-lg w-7/12 mx-auto mt-8 space-y-4">
                <li className="text-lg font-bold">{restro?.data?.cards[2]?.card?.card?.info.name}</li>
                <li className="text-gray-700 text-base">{restro?.data?.cards[2]?.card?.card?.info.cuisines.join(", ")}</li>
                <li className="text-gray-500">{restro?.data?.cards[2]?.card?.card?.info.costForTwoMessage}</li>
                <li className="text-orange-500 font-bold">Rating: {restro?.data?.cards[2]?.card?.card?.info.avgRating}</li>
            </ul>
            <div className=" w-7/12 h-12 text-center m-auto py-5">
                {
                    reccomended.map((e,index)=>(
                        <>
                            <div className="flex justify-between bg-gray-100 my-3 py-5 px-3 rounded-lg" key={e?.card?.card?.title} onClick={()=>(handleDisplay(index))}>
                                <h1 className="font-bold">{e?.card?.card?.title}({e?.card.card.itemCards.length})</h1>
                                <p>⬇️</p>
                            </div>
                             {displayItems===index&& <ItemsComponent details={e.card?.card}  key={e?.card?.card?.title}/>}
                        </>
                    ))
                }
            </div>
        </div>
        
    )
}

export default Restaurant;