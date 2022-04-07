import React, { FC } from "react";
import styled from "styled-components";
import { IProduct } from "../types/types";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";

export interface ICatalog {
  products: IProduct[];
}

const StyledContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.25rem;
`;

const Card = styled.div`
  width: 19.0625rem;
  height: 30.125rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.4375rem 0.9375rem #00000040;
  border-radius: 0.5625rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Catalog: FC<ICatalog> = ({ products }) => {
  return (
    <StyledContent>
      {products?.map((product) => (
        <Card key={product.product_id}>
          <CardBody
            creator={product?.created_by?.display_name}
            product_name={product?.name}
          />
          <CardFooter
            price={product.initial_price}
            available={product.quantity_available}
            created={product.quantity_nfts_created}
          />
        </Card>
      ))}
    </StyledContent>
  );
};

export default Catalog;
