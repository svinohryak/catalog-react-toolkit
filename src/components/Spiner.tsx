import styled from "styled-components";

const Spiner = styled.div`
  width: 20px;
  height: 20px;
  margin: 10px;
  border-radius: 50%;
  border: 5px solid #0040e5;
  border-top: 5px solid lightblue;

  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spiner;
