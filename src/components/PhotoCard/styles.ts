import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  cursor: pointer;
`;

export const PhotoImage = styled.img`
  width: 100%;
`;

export const InfoLink = styled(Link)`
  width: 22%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  margin: 5px;
  float: left;
  cursor: pointer;
`;
