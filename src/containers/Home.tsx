import Productos from '../productos/Productos'

const Home = () => {
    return (
      <div className="main mt-5">
        <div className="container"> 
          <h1 className="mb-2">Puesto feria </h1>
          <Productos/>
        </div>
      </div>
    )
}
export default Home