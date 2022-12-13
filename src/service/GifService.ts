import { GiphyFetch } from "@giphy/js-fetch-api";
import { PhotosDTO } from "../data-transports/PhotosDTO";
import { Photo } from "../models/Photo";

const gf = new GiphyFetch(import.meta.env.VITE_UNSPLASH_ACCESS_KEY);

export class GifService {
  async findPhotos(
    query: string,
    page: number,
    perPage: number
  ): Promise<PhotosDTO> {
    let photosDTO: PhotosDTO = {
      photos: [],
      totalPages: 0,
    };

    console.log("page: ", page);
    console.log("per page: ", perPage);

    if (query) {
      const result = await gf.search(query, {
        limit: perPage,
        offset: page * perPage,
      });

      if (result) {
        const { data, pagination } = result;
        const photos = data.map((r) => new Photo(r));
        photosDTO = {
          photos,
          totalPages: pagination.total_count,
        };
      }
    }

    return photosDTO;
  }
}
