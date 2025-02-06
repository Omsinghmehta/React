import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
function Fun(){
    const[password,setpass]=useState("AGSHDJYSYFS")
    const [Length,setlen]=useState(30);
    const [Characters,setchar]=useState(true);
    const [Symbol,setsym]=useState(false);
    const getpass=useCallback(()=>{

        let str="abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ";
        if(Characters)
        str+="0123456789";
        if(Symbol)
        str+="()?><}{@#$^&*!";
        pass="";
        for( let i=0;i<Length;i++)
        {
            pass+=str[Math.floor(Math.random()*str.length)];

        }
        setpass(pass);
    })

    useEffect(()=>{
        getpass();
    },[Length,Symbol,Characters])
return (<>
  <div id="show">
   <h2>{password}</h2> 
   <input style={{colorRendering:"blue"}}type="range" min="5" max="20" defaultChecked={length} onChange={(e)=>setlen(e.target.value)}></input>
   <label > Length: ({Length})</label>
   <input id="num"type="checkbox" defaultChecked={Characters} onChange={(e)=>setchar(!Characters)}></input>
   <label> Number</label>

   <input id="char"type="checkbox" defaultChecked={Symbol} onChange={(e)=>setsym(!Symbol)}></input>
   <label> Character</label>

  </div>
</>)

}

const ele=ReactDOM.createRoot(document.getElementById("root"));
ele.render(<Fun></Fun>);