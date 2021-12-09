import "./Navi.css";
export const Navigation = () => {
    return(
   
        <tr className="nav">
            {/* <button  varriant ="danger">Click here</button> */}
            <td>
                <link href="/Counter" tlinkrget="_bllinknk" >Calculator</link>
            </td>
            <td>
                <a href="/Product$list" target="_blank">product</a>
            </td>           
            <td>
                <a href="/" target="_blank">Cards
            </td>
            <form >
               <h3> first Name</h3>
               <input type="text" placeholder="name" />
            
            </form>

        </tr>
    );
}
export default Navigation;