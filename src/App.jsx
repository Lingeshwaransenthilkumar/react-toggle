import { useState } from "react";
import useLocalStorge from "use-local-storage";
function App(){
  const [isDark,setIsDark] = useLocalStorge("isDark",false);

  return (
    <div className="app" data-theme ={isDark ? "dark":"light"} >
      <label className={isDark?"night":"day"}>{isDark ? "Dark Mode":"Light Mode"}</label>
      <div className={isDark ? "icons night":"icons day"}>
        {isDark?<ion-icon name="sunny-outline"></ion-icon>: <ion-icon name="moon-outline"></ion-icon> }
      </div>
      <input type="checkbox" isChecked={isDark} onChange={()=>setIsDark(!isDark)} />
       <div className="yin-yang"></div>
    </div>
  )
}

export default App;