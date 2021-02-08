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
      const clone = JSON.parse(JSON.stringify(data.setting));
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
    configuration = JSON.parse(JSON.stringify(configuration));
    const raw = {
      status: "success",
      configuration: {
        name: "module2",
        id: "150538576906428",
        EmergencyStop: true,
        light_on: ["08:00"],
        light_off: ["22:00"],
        watering: ["09:00", "13:00", "17:00"],
        is_active: true,
        level_status: [true, true, true, true, true],
        time_to_water: 3,
        time_to_fill_irrigation_tank: 100,
        min_water_level: 30,
        ph_max: 5.8,
        ph_min: 5.6,
        ec_max: 2,
        ec_min: 1.8,
        additive_pump_time: 2,
        additive_pump_max_loop: 3,
      },
    };
    fetch(`${BASE}settings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      cache: "default",
      body: JSON.stringify(raw),
    }).then(() => {
      console.log("sent");
    });
  };

  return (
    <Container>
      <Row>
        <Col xs="12" lg="10" className="p-3">
          <CardDeck>
            <Card>
              <Card.Body>
                {console.log("setting >>", setting)}
                <Editor
                  ref={setRef}
                  value={setting}
                  onChange={console.log("on change called")}
                />
                <br />
                <Button onClick={() => updateSetting()}>Save</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
