import { Prodct$atom } from "./Prodct$atom";
import { Products } from "../../Services/Pro";

export const Product$list = () => {                             ///fucation component is a arrow funcation to define the object
        console.log(Products);
        return   (                                            /// hard codeing meaning mens to code manuaaly

            <div>
                <h1>This is My Product list</h1>
                {Products . map ((item) => (<Prodct$atom
                    title = {item.title}
                    price = {item.price}
                    cat = {item.price}
                    desc = {item.desc}
                    url = {item.url}
                    />
                       ))}

                 
        

            </div>
        );
};


 // <Prodct$atom title = "What Young India Wants" price="365"  desc="Tids Toy" url="https://images-na.ssl-images-amazon.com/images/I/51nYVBJtkxL._SX327_BO1,204,203,200_.jpg" />
                // <Prodct$atom title = "The Fourth Age" price="365"  desc="Notes" cat="Notes" url="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtNwMsnpr3wliQ-0fBkBhEfPkh3FPF-EC5W5XKCfFEU_jmGpYf246RWMJR-Mf6X3rpCXDTlnZmSXmW4C3FqWdJqb5yrpxx9pATRGmM1Do_iEw2-XVrc7hi&usqp=CAE" />
                
