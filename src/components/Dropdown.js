import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DropwdownContainer = styled.div``;

const DropdownListContainer = styled.ul`
  position: absolute;
  margin-top: 8px;
`;

const DropdownBox = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
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

const Dropdown = (props) => {
  const { className, options, defaultOption } = props;
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    i18n.changeLanguage(selectedOption.value);
  }, [selectedOption.value]);

  const onOptionClicked = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  return (
    <DropwdownContainer className={className}>
      <DropdownBox
        onClick={(e) => {
          e.stopPropagation();
          setShowDropdown(!showDropdown);
        }}
      >
        <Img src={selectedOption.icon} alt="" />
        {selectedOption.name}
      </DropdownBox>
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
