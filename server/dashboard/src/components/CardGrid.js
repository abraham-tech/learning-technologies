import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Editor from "./JsonEditor";
import Switch from "react-switch";

const BASE = `http:${window.location.href.split(":")[1]}:8080/`;
const StyledCardGrid = styled.div`
  position: relative;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(136px, 1fr));
  margin: 16px 0;
`;

const StyledSwitches = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 16px;
`;

const CardGrid = ({
  wide = false,
  cards,
  easeSpeed,
  easeFunction,
  avatar,
  ...props
}) => {
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
            location.reload();
            console.log(data);
          });
        break;

      case 5:
        fetch(`${BASE}test_sensors`)
          .then((response) => response.json())
          .then((data) => console.log(data));
        break;

      case 6:
        fetch(`${BASE}test_basement`)
          .then((response) => response.json())
          .then((data) => {
            location.reload();
            console.log(data);
          });
        break;

      case 7:
        fetch(`${BASE}test_floors`)
          .then((response) => response.json())
          .then((data) => {
            location.reload();
            console.log(data);
          });
        break;

      case 8:
        fetch(`${BASE}test_main_pump`)
          .then((response) => response.json())
          .then((data) => {
            location.reload();
            console.log(data);
          });
        break;

      case 9:
        fetch(`${BASE}test_read_temperature`)
          .then((response) => response.json())
          .then((data) => {
            location.reload();
            console.log(data);
          });
        break;

      case 10:
        fetch(`${BASE}test_basement_door`)
          .then((response) => response.json())
          .then((data) => {
            location.reload();
            console.log(data);
          });
        break;

      case 11:
        fetch(`${BASE}test_reset_boards`)
          .then((response) => response.json())
          .then((data) => {
            location.reload();
            console.log(data);
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

      {/* <StyledSwitches>
      <span>Reset board</span>
        <Switch
          onChange={()=>{}}
          checked={true}
          className="react-switch"
        />
      </StyledSwitches> 
      */}

      <Editor />
    </div>
  );
};

export default CardGrid;
