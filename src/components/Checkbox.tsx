import React, { FC } from "react";
import styled from "styled-components";
import { ICheckboxProps } from "../types/types";

const StyledWrapper = styled.div<{ isChecked: boolean }>`
  margin-bottom: 0.75rem;
  input[type="checkbox"] {
    opacity: 0;
  }
  label {
    display: flex;
    align-items: center;
    position: relative;
    color: #828282;
    cursor: pointer;
  }
  label::before {
    content: "";
    width: 2rem;
    height: 1rem;
    margin-right: 0.4rem;
    border-radius: 1rem;
    border: 1px solid lightgray;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    ${({ isChecked }) =>
      isChecked
        ? "background-color: #8282824b;"
        : "background-color: #8282824b;"}
  }
  label::after {
    content: "";
    position: absolute;
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.25rem;
    border-radius: 1rem;
    cursor: pointer;
    transition: all 150ms ease-in-out;
    ${({ isChecked }) =>
      isChecked
        ? "background-color: #1e57e9; left: 1rem"
        : "background-color: #ff5900; left: 0.2rem;"}
  }
`;

const Checkbox: FC<ICheckboxProps> = ({ isChecked, label, onChange }) => {
  return (
    <StyledWrapper isChecked={isChecked}>
      <label>
        {label}
        <input type="checkbox" checked={isChecked} onChange={onChange} />
      </label>
    </StyledWrapper>
  );
};

export default Checkbox;
