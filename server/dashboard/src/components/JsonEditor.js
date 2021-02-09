import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { JsonEditor as Editor } from "jsoneditor-react";
import { Container, Row, Col, Button, CardDeck, Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "jsoneditor-react/es/editor.min.css";

const BASE = `http:${window.location.href.split(":")[1]}:8080/`;

function App() {
  const [setting, setSetting] = useState({});
  const jsonEditorRef = useRef(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await fetch(`${BASE}setting`);
      let data = await result.json();
      const clone = JSON.parse(JSON.stringify(data.config));
      //data = data
      if (jsonEditorRef.current !== null) {
        jsonEditorRef.current.set(clone);
      }
      console.log("data", clone);
      if (!ignore) setSetting(clone);
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  const setRef = (instance) => {
    if (instance) {
      jsonEditorRef.current = instance.jsonEditor;
    } else {
      jsonEditorRef.current = null;
    }
  };

  const updateSetting = async () => {
    let configuration = jsonEditorRef.current.get();
    // configuration = JSON.parse(JSON.stringify(configuration));

    fetch(`${BASE}settings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(configuration),
    }).then(() => {
      console.log("sent");
    });
  };

  return (
    <Container>
      <CardDeck>
        <Card>
          <Card.Body>
            {console.log("setting >>", setting)}
            <Editor
              ref={setRef}
              value={setting}
            />
            <br />
            <Button onClick={() => updateSetting()}>Save</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  );
}

export default App;
