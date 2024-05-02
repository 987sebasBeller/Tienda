import { Rating } from "./rating";
export interface Product {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:Rating; //  creamos un tipos de datos, tratame esa respuesta como si fuere ese tipo de dato 
}
