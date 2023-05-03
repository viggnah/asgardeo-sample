import axios from "axios";
import { Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Hosts } from "../constants/config";

const Items = () => {
    const [fetchData, setFetchData] = useState(true);

    const [items, setItems] = useState([]);
    const HOST = Hosts.host;

    const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    };

    useEffect(() => {
        axios.get(HOST + "/items/all", headers).then(responseData => {
            let responseEntries = Object.entries(responseData.data);
            setItems(responseEntries);
        });
        setFetchData(false);
    }, [fetchData]);


    return (
        <Container className="mt-5">
            <Row className="mt-5" >
                <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Status</th>
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