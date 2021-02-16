import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Editor from "./JsonEditor";
import { Type1, Type3 } from "./Typography";
const BASE = `http:${window.location.href.split(":")[1]}:8080/`;
const StyledCardGrid = styled.div`
  position: relative;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  margin: 16px 0;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-around;
  margin: 16px;
  margin-bottom: 60px;
`;

const NewlineText = (text) => {
  return text.split('\n').map(str => <p>{str}</p>);
}

const CardGrid = ({
  wide = false,
  cards,
  easeSpeed,
  easeFunction,
  avatar,
  ...props
}) => {
  const [message, setMessage] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const gridClasses = wide ? "grid grid--wide" : "grid";
  const callAction = (index) => {
    console.log("index", index);
    switch (index) {
      case 0:
        fetch(`${BASE}turn_on`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        break;
      case 1:
        fetch(`${BASE}turn_off`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        break;
      case 2:
        fetch(`${BASE}open_door`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        break;

      case 3:
        fetch(`${BASE}water_cabins`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        break;
      case 4:
        fetch(`${BASE}reset`)
          .then((response) => response.json())
          .then((data) => {
            //data.toString();
            setMessage(data.message)
            console.log(data);
          });
        break;

      case 5:
        fetch(`${BASE}test_sensors`)
          .then((response) => response.json())
          .then((data) =>  setMessage(data.message));
        break;

      case 6:
        fetch(`${BASE}test_basement`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 7:
        fetch(`${BASE}test_floors`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 8:
        fetch(`${BASE}test_main_pump`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 9:
        fetch(`${BASE}test_read_temperature`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 10:
        fetch(`${BASE}test_basement_door`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 11:
        fetch(`${BASE}test_reset_boards`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;
      default:
        console.log("Sorry don't know what to do");
    }
  };

  return (
    <div>
      <StyledCardGrid className={gridClasses} {...props}>
        {cards.map((card, index) => (
          <a onClick={() => callAction(index)}>
            <Card
              key={index}
              wide={wide}
              {...card}
              easeSpeed={easeSpeed}
              easeFunction={easeFunction}
            />
          </a>
        ))}
      </StyledCardGrid>
        <StyledDiv>
        <h1>Terminal Log</h1>
        <Type1>
        {NewlineText(message)}
        </Type1>
        </StyledDiv>

      <Editor />
    </div>
  );
};

export default CardGrid;
