import "./Navi.css";
export const Navigation = () => {
    return(
   
        <tr className="nav">
            {/* <button  varriant ="danger">Click here</button> */}
            <td>
                <a href="https://pickupbiz.com" target="_blank" > PickupBiz</a>
            </td>
            <td>
                <a href="https://Amazon.com" target="_blank">Amazon</a>
            </td>
            <td>
                <a href="https://Google.com" target="_blank"> Google gmail</a>
            </td>
            <form >
               <h3> first Name</h3>
               <input type="text" placeholder="name" />
            
            </form>

        </tr>
    );
}
export default Navigation;