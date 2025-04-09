import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { StartAttempt } from "./components/StartAttempt";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
                <p>Garrett Rumery</p>
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
                        <h2>Reveal Answer Component</h2>
                        <RevealAnswer />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Two Dice Component</h2>
                        <TwoDice />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Change Type Component</h2>
                        <ChangeType />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Start Attempt Component</h2>
                        <StartAttempt />
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h2>Cycle Holiday Component</h2>
                        <CycleHoliday />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
