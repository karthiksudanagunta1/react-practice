import UserContext from "../utils/UserContext";
import User from "./User";
import { useEffect,useContext } from "react";


const About = () => {
  console.log("starting ");
  
  const user=useContext(UserContext);
  console.log(user)


  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log("karthik chowdary");
  //   }, 1000);
    
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {console.log("render the component")}
      
      <div className="bg-gray-800 shadow-lg rounded-lg p-8 mb-6 w-full max-w-xl">
        <h3 className="text-2xl font-extrabold text-center mb-4">Name: {user}</h3>
        <p className="text-lg text-gray-300 text-center mb-2">Role: Software Developer</p>
        <p className="text-lg text-gray-300 text-center mb-2">Experience: 0-1 Year</p>
        <p className="text-lg text-gray-300 text-center mb-6">Skills: HTML, CSS, JavaScript, React.js, Node.js</p>
        
        <h2 className="text-2xl font-semibold text-center mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://github.com/karthiksudanagunta1" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-200">
            GitHub
          </a>
          <a href="https://linkedin.com/in/karthiksudanagunta1" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-600 transition-colors duration-200">
            LinkedIn
          </a>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4 w-full max-w-lg">
        <User name={"first"} />
        <User name={"second"} />
      </div>
      
      <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-2">Additional Info</h2>
        <p className="text-gray-300">
          This section could contain more details about your background, interests, or projects. 
          Make it engaging and informative to leave a lasting impression!
        </p>
      </div>
    </div>
  );
};

export default About;
