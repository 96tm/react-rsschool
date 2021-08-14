import SortType from './models/sort-type';
import { IPhoto } from './models/photo';

export default class ApiService {
  constructor(private url: string, private key: string) {}

  async getItems(
    text: string,
    pageNumber = 1,
    limit = 20,
    sortBy = SortType.datePostedDesc
  ): Promise<Response> {
    const queryString = `api_key=${this.key}&sort=${sortBy}page=${pageNumber}&per_page=${limit}&text=${text}`;
    const response = fetch(`${this.url}${queryString}`);
    return response;
  }

  generateImageLink({ id, server, secret }: IPhoto, size = 'w'): string {
    return `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  }

  generatePhotoLink({ owner, id }: IPhoto): string {
    return `https://www.flickr.com/photos/${owner}/${id}`;
  }
}
