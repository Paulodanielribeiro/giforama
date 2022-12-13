import { useState, useEffect, useContext } from "react";

import { Photo } from "../../models/Photo";
import { GifService } from "../../service/GifService";
import {
  Container,
  CurrentPage,
  FilterInput,
  Loading,
  NavigationArea,
  NavigationButton,
  ResultsArea,
  SearchArea,
  SearchButton,
} from "./styles";
import loadingGif from "../../assets/img/loading.gif";
import PhotoCard from "../../components/PhotoCard";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(0);
  const [perPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, isLoading] = useState(false);

  const { filter, setFilter } = useContext(UserContext);

  const photoService = new GifService();

  const searchPhotos = async () => {
    isLoading(true);
    setPhotos([]);
    const photosFound = await photoService.findPhotos(filter, page, perPage);
    setPhotos(photosFound.photos);
    setTotalPages(photosFound.totalPages);
    isLoading(false);
  };

  useEffect(() => {
    searchPhotos();
  }, [page]);

  return (
    <Container>
      <SearchArea>
        <FilterInput
          placeholder="Digite o termo da busca"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <SearchButton
          onClick={() => {
            setPage(1);
            searchPhotos();
          }}
        >
          Buscar
        </SearchButton>
      </SearchArea>

      <ResultsArea>
        {loading && <Loading src={loadingGif} alt="Carregando resultados" />}

        {photos.length > 0 &&
          photos.map((p) => <PhotoCard key={p.id} photo={p} />)}
      </ResultsArea>

      {totalPages > 1 && (
        <NavigationArea>
          {page > 1 && (
            <NavigationButton onClick={() => setPage(page - 1)}>
              Página anterior
            </NavigationButton>
          )}

          <CurrentPage>
            Página {page} de {totalPages}
          </CurrentPage>

          {page < totalPages && (
            <NavigationButton onClick={() => setPage(page + 1)}>
              Próxima página
            </NavigationButton>
          )}
        </NavigationArea>
      )}
    </Container>
  );
};

export default Home;
