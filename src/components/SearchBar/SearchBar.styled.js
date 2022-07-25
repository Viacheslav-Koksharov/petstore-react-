import styled from "styled-components";

const ContainerSearchBar = styled.form`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  display: block;
  margin-left: 0;
  padding: 5px;
  width: 220px;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin-left: 15px;
  min-width: 30px;
  height: 30px;
  background-color: #ff6b08;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &:hover {
    background-color: #ff6b08;
    transform: scale(1.1);
  }
`;

export { ContainerSearchBar, SearchInput, Button };
