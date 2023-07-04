import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import MyNavbar from "./MyNavbar";

const MainHome = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <MyNavbar />
      <Carousel>
        {products.map(product => (
          <Carousel.Item key={product.id}>
            <img className="d-block w-100" src={product.img} alt={product.name} />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default MainHome;
