import "./Navi.css";
import { Link } from "react-router-dom";
export const Navigation = () => {
    return(
   
        <tr className="nav">
       
        
                <Link href="/Counter" tlinkrget="_bllinknk" >Calculator</Link>       
                <Link href="/Product$list" target="_blank">product</Link>
        
                <Link href="/" target="_blank">Cards</Link>
                <Link href="/Time" target="_blank">timeOut</Link>
      
        </tr>
    );
};
export default Navigation;