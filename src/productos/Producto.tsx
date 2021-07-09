import styles from "./Productos.module.css"

export type ProductoProps = { 
    name: string, 
    price: number, 
    stock: number
}

const Producto = ({name, price, stock}: ProductoProps) => {
  const warning = stock < 5 ? styles.warning : ""
  return(
    <div className={`card ${styles['primary']} ${warning}`} style={{width:"5em"}}>
      <div className={`card-header ${styles['primary-header']}`}>
        {name} 
      </div>
      <div className={`card-body ${styles['primary-body']}`}>
          Precio: {price} <br />
          Stock: {stock}
      </div>
    </div>
  );
}

export default Producto
