import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { StartAttempt } from "./components/StartAttempt";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <Container>
                <Row>
                    <Col>
                        <h2>Counter Component</h2>
                        <Counter />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <RevealAnswer />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <TwoDice />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <ChangeType />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <StartAttempt />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
