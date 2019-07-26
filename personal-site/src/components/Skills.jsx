import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Skills(){
    return(
        // <div>
        <Container className="test">
            <Row className="show-grid">
                <Col md={6} >
                    <code>{'<Col md={6} mdPush={6} />'}</code>
                </Col>
                <Col md={6} >
                    <code>{'<Col md={6} mdPull={6} />'}</code>
                </Col>
            </Row>
        </Container>
        // </div>
    )
}

export default Skills