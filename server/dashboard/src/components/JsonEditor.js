import React from "react";
import ReactDOM from "react-dom";
import { JsonEditor as Editor } from "jsoneditor-react";
import { Container, Row, Col, Button, CardDeck, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "jsoneditor-react/es/editor.min.css";


function App() {
  return (
    <Container>
      <Row>
        <Col xs="12" lg="10" className="p-3">
          <CardDeck>
            <Card>
              <Card.Body>
                <Editor
                  value={[
                    {
                      key: "Test",
                      name: "Test Name",
                      age: 20,
                      dob: "2000-12-12"
                    },
                    {
                      key: "Test",
                      name: "Test Name",
                      age: 20,
                      dob: "2000-12-12"
                    }
                  ]}
                />
                <br />
                <Button>Save</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
