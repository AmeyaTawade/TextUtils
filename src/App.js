// import { useState, useSyncExternalStore } from "react";

import About from "./components/About";
import Navbar from "./components/Navbar"; 
import TextForm from "./components/TextForm"; 


function App() {
  // const [Mode, setMode] = useState('light'); // whether dark mode is enabled or not
  <>
  return (
    {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
   <Navbar title="TextUtils"/>
   <div className="container my-3" >
   <TextForm heading="Enter the text to analyze"/>
   <About/>
   </div>
</>

}


  


export default App;
