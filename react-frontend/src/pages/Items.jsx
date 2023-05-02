import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Hosts } from "../constants/config";

const Items = () => {

    const [items, setItems] = useState([]);
    let userName = localStorage.getItem('userName');
    const HOST = Hosts.host;

    const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
        params: { name: userName }
    };

    useEffect(() => {
        axios.get(HOST + "/items/all", headers).then(responseData => {
            let responseEntries = Object.entries(responseData.data);
            setItems(responseEntries);
        });
    });


    return (
        <Container className="mt-5">
            <Row className="mt-5" >
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item[1].name}</td>
                                    <td>{item[1].price}</td>
                                    <td style={{color: "green"}}>In Stock</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default Items;