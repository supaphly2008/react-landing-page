import React, { useState } from "react";
import styled from "styled-components";
import usaFlag from "images/usa.svg";
import taiwanFlag from "images/taiwan.svg";

const DropwdownContainer = styled.div``;

const DropdownListContainer = styled.div`
  position: absolute;
  margin-top: 8px;
`;

const DropdownBox = styled.div`
  color: #fff;
  cursor: pointer;
`;

const DropdownList = styled.div`
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #141414;
`;

const Img = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <DropwdownContainer>
      <DropdownBox onClick={() => setShowDropdown(!showDropdown)}>EN</DropdownBox>
      {showDropdown && (
        <DropdownListContainer>
          <DropdownList>
            <Img src={usaFlag} alt="" /> EN
          </DropdownList>
          <DropdownList>
            <Img src={taiwanFlag} alt="" />
            中文
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropwdownContainer>
  );
};

export default Dropdown;
