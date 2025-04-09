import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            <Container>
                <Row>
                    <Col>
                        <Counter></Counter>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Row>
                <Col>
                    <RevealAnswer></RevealAnswer>
                </Col>
                <Col>
                    <TwoDice></TwoDice>
                </Col>
            </Row>
            <hr />
            <ChangeType></ChangeType>
        </div>
    );
}

export default App;
