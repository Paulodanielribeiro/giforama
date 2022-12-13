import { Photo } from "../../models/Photo";
import { CardContainer, InfoLink, PhotoImage } from "./styles";

type Props = {
  photo: Photo;
};

const PhotoCard = ({ photo }: Props) => {
  return (
    <InfoLink to="/view" state={{ photo }}>
      <CardContainer>
        <PhotoImage src={photo.gifUrl} alt={photo.description} />
      </CardContainer>
    </InfoLink>
  );
};

export default PhotoCard;
