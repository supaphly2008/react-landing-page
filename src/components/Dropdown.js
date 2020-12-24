import React, { useState } from "react";
import styled from "styled-components";
import usFlag from "images/us.svg";
import twFlag from "images/tw.svg";

const DropwdownContainer = styled.div``;

const DropdownListContainer = styled.ul`
  position: absolute;
  margin-top: 8px;
`;

const DropdownBox = styled.div`
  color: #fff;
  cursor: pointer;
`;

const DropdownListItem = styled.li`
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #141414;
  list-style: none;
  cursor: pointer;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const options = [
  {
    value: "zh",
    name: "中文",
    icon: twFlag,
  },
  {
    value: "en",
    name: "EN",
    icon: usFlag,
  },
];

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    value: "en",
    name: "EN",
    icon: usFlag,
  });

  const onOptionClicked = (option) => {
    console.log(option);
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <DropwdownContainer>
      <DropdownBox onClick={() => setShowDropdown(!showDropdown)}>{selectedOption.name}</DropdownBox>
      {showDropdown && (
        <DropdownListContainer>
          {options.map((option) => {
            return (
              <DropdownListItem key={option.value} onClick={() => onOptionClicked(option)}>
                <Img src={option.icon} alt="" />
                {option.name}
              </DropdownListItem>
            );
          })}
        </DropdownListContainer>
      )}
    </DropwdownContainer>
  );
};

export default Dropdown;
