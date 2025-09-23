import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata : Metadata = {
  title : "Counter Page",
  description : "Un simple contador"
}
//Lo importante es que aqui, del lado del server solo se reenderiza una vez, la primera vez.
//Mucho mejor que tener un useEffect dependiente de NADA en el front.
//De esta manera podes tener un fetch o algo con conexion a DB, y utilizar esos valores para pasarlos al cliente.


export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value = {100}/>
    </div>
  );
}
