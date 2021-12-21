import React ,{useState}from 'react';

const Toggleclickchangecolor = () => {
    const[clr,setClr]=useState("black");
    return (
        <div style={{ background: clr}}>
            <button onClick={()=>setClr(clr==="red" ? "black":"red")}>
                {clr==="red" ? "change Me to Black" : "change Me to Red"}</button>

            
        </div>
    );
};

export default Toggleclickchangecolor;