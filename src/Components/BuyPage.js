import React, { useState, useEffect } from 'react'
import Axios from "axios"
import {Container, Row, Col} from "reactstrap"
import {random, commerce} from "faker"
import CartItem from "./CartItem"

const apiKey = "563492ad6f917000010000019a0e176862514cd59f9daccb301bbcdc"
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const localUrl = "https://next.json-generator.com/api/json/get/EJE163Qvt"
const BuyPage = ({addInCart}) => {
    const [product, setProduct] = useState([]);

    // const fetchPhotos = async () => {
    //     const {data} = await Axios.get(url, {
    //         header:{
    //             Authorization : apiKey
    //         }
    //     })
    //     const {photos} = data;
    //     const allProducts = photos.map(photo => ({
    //         smallImage: photo.src.medium,
    //         tinyImage: photo.src.tiny,
    //         productName: random.word(),
    //         productPrice: commerce.price(),
    //         id: random.uuid()
    //     }))
    //     setProduct(allProducts);
    // };
    
    const fetchPhotos = async () => {
        const {data} = await Axios(localUrl);
   
   const { photos } = data;

   const allProducts = photos.map(photo => ({
       smallImage: photo.src.medium,
       tinyImage: photo.src.tiny,
       productName: random.word(),
       productPrice: commerce.price(),
       id: random.uuid()
   }))

   setProduct(allProducts);

};

   useEffect(() => {
    fetchPhotos();
   }, [])

return(
    <Container fluid>
        <h1 className="text-center text-success">Buy Page</h1>
        <Row>   
            {product.map(product => (
                <Col md={4} key={product.id}>
                    <CartItem product={product} addInCart={addInCart} />
                </Col>
            ))}
        </Row>
    </Container>
)

}

export default BuyPage;