// import { CDN_URL } from "../utils/constant";
import { CDN_URL } from "../utils/constant";

const ItemsComponent=(props)=>{
     const {details}=props;
     console.log(details)
     const items=details?.itemCards
     console.log(items);
     return (
        <div>
            {
                items.map(item=>(
                    <div key={item.card.info.id} className="h-50  bg-gray-50 shadow-lg flex justify-between rounded-md p-2  my-2">
                        <div className="flex-col text-left w-9/12">
                            <h1 className="font-bold p-2 text-sm">{item?.card?.info?.name}-₹{item.card.info.price/100}</h1>
                            <p className="p-2">{item.card.info.description}</p>
                        </div>
                        <div>
                          <img src={CDN_URL+item.card.info.imageId} className="h-20 w-20 rounded-md"/>
                        </div>
                        
                    </div>
                ))
            }
            
        </div>
     )

}

export default ItemsComponent