import axios from "axios";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";

const Customer = () => {

    const [points, setPoints] = useState(0);
    let userName = "pamod"

    useEffect(() => {
        axios.get('http://localhost:8080/loyalty', { params: { name: userName } }).then(res => {
            setPoints(res.data.nPoints);
        });
    });


    return (
        <Container className="mt-5">
            <Row >
                <Col>
                    You Currntly Have {points} Points to Reedeem !
                </Col>
            </Row>
            <Row className="mt-5" >
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Merchant</th>
                                <th>Product</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PizzaHut</td>
                                <td>1 x Chicken Pizza</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Target</td>
                                <td>1 x Table Mirror</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Scope Cinema</td>
                                <td>2 x Tickets For Any Movie</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Walmart</td>
                                <td>8 x Cloth Hangers</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Keels</td>
                                <td>1 x Butter Knife</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>Swarnamahal</td>
                                <td>1 x Gold Pendant</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                            <tr>
                                <td>ABC Travels</td>
                                <td>1 x Ticket to Africa</td>
                                <td><Button variant="outline-primary">Redeem</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Customer;