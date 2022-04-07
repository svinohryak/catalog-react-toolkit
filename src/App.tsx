import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchProducts } from "./store/reducers/ActionCreators";
import Spiner from "./components/Spiner";
import Checkbox from "./components/Checkbox";
import Catalog from "./components/Catalog";

const StyledWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  max-width: 1480px;
  min-width: 340px;
  width: 90%;
  margin-top: 1.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledHeader = styled.div`
  width: 100%;
  .title {
    font-weight: 700;
    font-size: 2rem;
    line-height: 100%;
    margin-bottom: 1rem;
  }
  .subtitle {
    color: #828282;
    font-size: 0.875rem;
    line-height: 100%;
    margin-bottom: 0.5rem;
  }
`;

const StyledOptionWraper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const filterProducts = useMemo(() => {
    if (isChecked) {
      return products.filter((product) => product.quantity_available);
    }
    return products;
  }, [products, isChecked]);

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledHeader>
          <div className="title">Explore</div>
          <div className="subtitle">Buy and sell digital fashion NFT art</div>
          {filterProducts.length > 0 && (
            <Checkbox
              isChecked={isChecked}
              label="Show available"
              onChange={handleChange}
            />
          )}
        </StyledHeader>
        {isLoading && (
          <StyledOptionWraper>
            <Spiner />
          </StyledOptionWraper>
        )}
        {error && (
          <StyledOptionWraper>
            <h3>{error}</h3>
          </StyledOptionWraper>
        )}
        <Catalog products={filterProducts} />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
