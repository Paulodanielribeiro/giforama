import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 60vw;
  margin: 30px auto;
  border-radius: 30px;
`;

export const Image = styled.img`
  width: inherit;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  /* height: 50px; */
  display: flex;
  flex-direction: column;
  padding: 30px 40px;
`;

export const Text = styled.span`
  font-size: 1.2em;
  margin-bottom: 10px;
`;

export const BackButton = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  padding: 10px 30px;
  color: white;
  background-color: #2d55ff;
  text-decoration: none;
  border-radius: 3px;
  position: fixed;
`;
