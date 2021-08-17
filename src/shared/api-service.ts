import SortType from './models/sort-type';
import { IPhoto } from './models/photo';
import SortOrder from './models/sort-order';

interface IApiRequestParams {
  text: string;
  pageNumber: number;
  limit: number;
  sortType: SortType;
  sortOrder: SortOrder;
}

export default class ApiService {
  constructor(private url: string, private key: string) {}

  async getItems({
    text,
    pageNumber = 1,
    limit = 20,
    sortType = SortType.datePosted,
    sortOrder = SortOrder.desc,
  }: IApiRequestParams): Promise<Response> {
    const queryString = `api_key=${this.key}&sort=${sortType}-${sortOrder}&page=${pageNumber}&per_page=${limit}&text=${text}&safe_search=1`;
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
