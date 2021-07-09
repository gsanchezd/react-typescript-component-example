import {ProductoProps} from './Producto';
import Producto from './Producto';
import productData from '../productos.json';

const Productos = () => {
  const data: ProductoProps[] = productData
  return (
    <div className="card-group"> {data.map((p: ProductoProps, index: number) => (
      <Producto name={p.name} price={p.price} stock={p.stock} />
      ))}</div>
    )
}

export default Productos