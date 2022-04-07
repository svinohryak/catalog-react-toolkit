import React, { FC } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/Screenshot.png";
import { ICardBody } from "../types/types";

const StyledWrapper = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-image: url(${backgroundImage});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  .text-reg {
    color: #f3f3f3;
    font-size: 0.75rem;
  }
  .name {
    font-size: 1.125rem;
    white-space: pre-wrap;
    width: 70%;
  }
`;

// export interface ICardBody {
//   creator: string;
//   product_name: string;
// }

const CardBody: FC<ICardBody> = ({ creator, product_name }) => {
  return (
    <StyledWrapper>
      <div className="top">
        <div className="text-reg">created by</div>
        <div className="autor-name">{creator}</div>
      </div>
      <div className="bottom">
        <div className="name">{product_name}</div>
      </div>
    </StyledWrapper>
  );
};

export default CardBody;
