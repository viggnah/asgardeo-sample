import { Col, Container, Form, Row, Button, Table, Alert } from "react-bootstrap";
import planetimage from '../images/manage-img.jpeg';
import { useEffect, useState } from "react";
import axios from "axios";

const Manage = () => {

    const [customerId, setCustomerId] = useState('');
    const [submittedCustomerId, setSubmittedCustomerId] = useState('');
    const [points, setPoints] = useState(0);
    const [loyaltyAdditionSuccess, setLoyaltyAdditionSuccess] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/loyalty/all').then((responseData) => {
            let responseEntries = Object.entries(responseData.data);
            setAllUsers(responseEntries);
        });
    }, [submittedCustomerId]);

    async function submitPoints(event) {
        let data = { "name": customerId, "nPoints": points };
        const result = await axios.post('http://localhost:8080/loyalty', data);

        try {
            if (result.status === 200) {
                setLoyaltyAdditionSuccess(true);
                setSubmittedCustomerId(customerId);
            }
        } catch (e) {
            setLoyaltyAdditionSuccess(false);
        }
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Container className="mt-5">
                        <Row>
                            <h1>Add Loyalty Points</h1>
                            {
                                loyaltyAdditionSuccess && <Alert variant="success">Points Added Successfully For {submittedCustomerId} </Alert>
                            }
                        </Row>
                        <Row className="mt-2">
                            <Col md="4">Customer ID : </Col>
                            <Col md="5"><Form.Control size="sm" type="text" placeholder="Enter Customer ID"
                                value={customerId} onChange={event => setCustomerId(event.target.value)} /></Col>
                        </Row>
                        <Row>
                            <Col md="4" >Points : </Col>
                            <Col md="5" >
                                <Form.Control size="sm" type="text" placeholder="Enter Points"
                                    value={points} onChange={event => setPoints(event.target.value)} />
                            </Col>
                        </Row>
                        <Row className="mt-2" >
                            <Col md="4" />
                            <Col md="5" className="d-flex flex-row-reverse" >
                                <Button variant="dark" onClick={submitPoints}>Add</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Container className="mt-5">
                                <Row>
                                    <h1>Loyalty Users</h1>
                                </Row>
                                <Row>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Customer ID</th>
                                                <th>Points</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allUsers.map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{user[1].name}</td>
                                                            <td>{user[1].nPoints}</td>
                                                        </tr>
                                                    )
                                                }
                                                )
                                            }
                                            {/* <tr>
                                                <td>User1</td>
                                                <td>xxx</td>
                                            </tr> */}
                                        </tbody>
                                    </Table>
                                </Row>
                            </Container>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Row>
                            <img src={planetimage} style={{ opacity: 0.8 }} width="100%" height="100%" />
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default Manage;