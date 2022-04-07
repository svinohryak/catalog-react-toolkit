import React, { FC } from "react";
import styled from "styled-components";
import { ICardFooter } from "../types/types";

const StyledWrapper = styled.div`
  height: 4.875rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5rem;
  .right-block {
    text-align: end;
  }
  .regular-text {
    font-weight: 400;
    font-size: 0.75rem;
    color: #808080;
  }
  .bold-text {
    font-weight: 600;
    font-size: 1rem;
  }
  .price {
    color: #0040e5;
  }
`;

const CardFooter: FC<ICardFooter> = ({ price, available, created }) => {
  return (
    <StyledWrapper>
      <div className="left-block">
        <div className="regular-text">available</div>
        <div className="bold-text">
          {available} of {created}
        </div>
      </div>
      <div className="right-block">
        <div className="regular-text">price</div>
        <div className="bold-text price">{price} ETH</div>
      </div>
    </StyledWrapper>
  );
};

export default CardFooter;
