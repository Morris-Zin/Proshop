import React from 'react'; 
import { Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products'; 

const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
               {products.map(product => (
                   <Col xs={12} lg={4} md={6} key={product._id}>
                        <Product product={product} key={product._id}/>
                   </Col>
               ))}
            </Row>
        </>
    )
}

export default HomeScreen
