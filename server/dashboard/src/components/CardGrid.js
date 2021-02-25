import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Editor from "./JsonEditor";
import { Type1, Type3 } from "./Typography";
import Select from "react-select";
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
  const [cabin, setCabin] = useState("")
  const [value, setValue] = useState({ value: "e3e0", label: "Test Cabin" })
  const gridClasses = wide ? "grid grid--wide" : "grid";
  const callAction = (index) => {
    console.log("index", index);
    switch (index) {
      case 0:
        fetch(`${BASE}turn_on?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
        break;
      case 1:
        fetch(`${BASE}turn_off?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
        break;
      case 2:
        fetch(`${BASE}open_lock?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
        break;

      case 3:
        fetch(`${BASE}fan_on?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => setMessage(data.message));
        break;
      case 4:
        fetch(`${BASE}fan_off?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 5:
        fetch(`${BASE}water_on?id=${cabin}`)
          .then((response) => response.json())
          .then((data) =>  setMessage(data.message));
        break;

      case 6:
        fetch(`${BASE}water_off?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 7:
        fetch(`${BASE}test_floors?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 8:
        fetch(`${BASE}test_main_pump?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 9:
        fetch(`${BASE}test_read_temperature?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 10:
        fetch(`${BASE}test_basement_door?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;

      case 11:
        fetch(`${BASE}test_reset_boards?id=${cabin}`)
          .then((response) => response.json())
          .then((data) => {
            setMessage(data.message)
          });
        break;
      default:
        console.log("Sorry don't know what to do");
    }
  };

  const options = [
    { value: "e3e0", label: "Test Cabin" },
    { value: "07ba", label: "Hagastaden 1" },
    { value: "b420", label: "Hagastaden 2" },
    { value: "97ea", label: "Hagastaden 3" },
    { value: "ae87", label: "Hagastaden 4" },
    { value: "37ca", label: "Hagastaden 5" },
    { value: "70cd", label: "Hagastaden 6" },
    { value: "afa3", label: "Hagastaden 7" },
    { value: "f007", label: "Hagastaden 8" },
    { value: "5304", label: "Hagastaden 9" },
    { value: "0675", label: "Hagastaden 10" },
    { value: "b548", label: "Hagastaden 11" },
    { value: "6e56", label: "Hagastaden 12" },
    { value: "7148", label: "Hagastaden 13" },
    { value: "332c", label: "Hagastaden 14" },
    { value: "8c93", label: "Hagastaden 15" },
    { value: "83ab", label: "Hagastaden 16" },
    { value: "b24f", label: "Hagastaden 17" },
    { value: "c1be", label: "Hagastaden 18" }
  ];
  
  const onChange = (value, { action, removedValue }) => {
    setCabin(value.value)
    setValue(value)
    console.log("Value ", value.value);
  };

  return (
    <div>
      <div style={{ width: "300px" }}>
        <Select  options={options} onChange={onChange} value={value}/>
      </div>
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
    </div>
  );
};

export default CardGrid;
