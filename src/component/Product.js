import Restro, { ActiveRestros } from "./ProductItems";
import { useState, useEffect, useContext } from "react";
import { Shimmer } from "../Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext.js";

const Products = () => {
  const [restroList, setRestroList] = useState([]);
  const [highlyRatedRestro, setHighlyRatedRestro] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [pageNo,setPage]=useState(1);

  useEffect(() => {
    fetchApi();
  }, [pageNo]);

  const {name,setName}=useContext(UserContext)

  const fetchApi = async () => {
    try {
      const result = await fetch(`https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.406498&lng=78.47724389999999&carousel=true&third_party_vendor=${pageNo}`);
      const response = await result.json();
      const restaurants =
        response.data?.cards[4]?.card?.card?.gridElements.infoWithStyle
          .restaurants || [];
      setRestroList((prevList)=>[...prevList,...restaurants]);
      setHighlyRatedRestro(restaurants); 
      console.log(restaurants)
    } catch (error) {
      console.error("Error fetching API data", error);
    }
  };

  const handlScroll=()=>{
    if(  window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100){
      setPage((prevPage)=>prevPage+1)
    }
  }
   

  useEffect(()=>{
    window.addEventListener("scroll",handlScroll)
    return ()=>window.removeEventListener("scroll",handlScroll);
  },[])

  const highlyRated = () => {
    const updatedList = restroList.filter(
      (item) => item.info.avgRating > 4.5
    );
    setHighlyRatedRestro(updatedList);
  };

  const onSearch = () => {
    const filteredList = restroList.filter((eachItem) =>
      eachItem.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setHighlyRatedRestro(filteredList);
  };

  const RestroStatus = ActiveRestros(Restro);

  return (
    <>
      {highlyRatedRestro.length > 0 ? (
        <>
          <div className="FilterContainer flex justify-between items-center p-4 bg-white shadow-md rounded-lg m-4">
            <button 
              onClick={highlyRated}
              className="h_restor bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
            >
              Find the Highly Rated Restros
            </button>
            <p className="text-orange-300 font-bold">Welcome: {name}</p>
            {/* <input onChange={(e)=>{setName(e.target.value)}} value={name}/> */}
            <div className="filter_Container flex items-center">
              <input
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                className="p-2 text-base border border-gray-300 rounded-md mr-2"
                placeholder="Search for restaurants"
              />
              <button
                onClick={onSearch}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition"
              >
                Search
              </button>
            </div>
          </div>

          <section className="flex flex-row flex-wrap  m-3 shadow-lg p-3 bg-slate-100">
            {highlyRatedRestro.map((eachItem) => (
              <Link 
                key={eachItem.info.id} 
                to={"restaurants/" + eachItem.info.id} 
                className="px-5 h-96"
              >
                {eachItem.info.isOpen ? (
                  <Restro rest_details={eachItem} />
                ) : (
                  <RestroStatus rest_details={eachItem} />
                )}
              </Link>
            ))}
          </section>
        </>
      ) : (
        <Shimmer />
      )}
    </>
  );
};

export default Products;
