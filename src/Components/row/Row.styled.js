import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const StyledHeader = styled.h2`
  text-align: left;
  margin: 10px;

  ${mediaQueries("md")`
    text-align: left;
  `};
`;

export const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  margin-left: 10px;
  
  &::-webkit-scrollbar {
    display: none;
`;

export const RowPoster = styled.img`
  width: 100%;
  object-fit: contain;
  max-height: 100px;
  transition: transform 450ms;
  margin-right: 10px;

  &:hover {
    transform: scale(1.08);
    opacity: 1;
  }
`;

export const LargerRow = styled(RowPoster)`
  max-height: 250px;

  &:hover {
    transform: scale(1.09);
  }
`;
