/**
 * TODO implementar
 */

import { useLocation } from "react-router-dom";
import { Photo } from "../../models/Photo";
import {
  BackButton,
  Container,
  DescriptionContainer,
  Image,
  Text,
} from "./styles";

type Location = {
  state: {
    photo: Photo;
  };
};

const PhotoView = () => {
  const location: Location = useLocation();
  const { photo } = location.state;
  return (
    <>
      <BackButton to="/">{"voltar"}</BackButton>
      <Container>
        <Image src={photo.gifUrl} />
        <DescriptionContainer>
          {photo.description && <Text>titulo: {photo.description}</Text>}
          <Text>importação: {photo.creationDate.toLocaleDateString()}</Text>
        </DescriptionContainer>
      </Container>
    </>
  );
};

export default PhotoView;
