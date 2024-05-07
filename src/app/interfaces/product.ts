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

/*
tipos de tipescrypt
-number
-string 
-boolean



Cuando se pone export es porque se puede sacar la clas, es decir reutilizar
*/