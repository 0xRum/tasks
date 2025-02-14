import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./App.css";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>Heading 1</h1>
            <img src="..assets/images/" alt="this is some alt text" />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Garrett Rumery</p>
            This is <span style={{ color: "red" }}>colored text</span>.
            <ol>
                <li>first list</li>
                <li>second list</li>
                <li>third list</li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "auto",
                                height: "auto",
                                backgroundColor: "red",
                            }}
                        >
                            First column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "auto",
                                height: "auto",
                                backgroundColor: "red",
                            }}
                        >
                            Second Column. Lorem ipsum dolor, sit amet
                            consectetur adipisicing elit. Harum eius
                            reprehenderit quasi magnam, consequuntur hic
                            distinctio nobis quam aliquid aperiam laborum culpa
                            quia repellendus. Esse non suscipit ea repellendus
                            assumenda.
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
