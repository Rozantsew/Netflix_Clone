import styled from "styled-components";
import { mediaQueries } from "../../assets/styles/mediaQueries";

export const HeroBanner = styled.header`
  color: white;
  object-fit: contain;
  background-position: 100% 50%;
  height: 448px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-top: 140px;
  margin-bottom: 30px;
`;

export const HeroTitle = styled.h1`
  color: #fff;
  text-align: left;
  // padding: 50px;
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const BannerContents = styled.div`
  margin-left: 30px;
  height: 190px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;

export const BannerWrapper = styled.div``;

export const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: 0;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1em;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: ease-in-out 0.4s;
  }
`;

export const StyledTitleDescription = styled.h3`
  width: 42rem;
  line-height: 1.3;
  padding-top: 1rem;
  max-width: 280px;
  height: 80px;
  font-size: 0.8rem;
  text-align: left;

  ${mediaQueries("xs")`
    max-width: 360px;
`};
`;

export const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
  width: 100%;
`;
