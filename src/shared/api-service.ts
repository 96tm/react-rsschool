import SortType from './models/sort-type';
import { IPhoto } from './models/photo';
import SortOrder from './models/sort-order';
import { API_KEY, API_URL } from './constants';
import { Store } from '../redux/store';

interface IItemsRequestParams {
  text: string;
  pageNumber: number;
  limit: number;
  sortType: SortType;
  sortOrder: SortOrder;
}

interface IItemDetailsRequestParams {
  photoId: string;
}

export default class ApiService {
  constructor(private url: string, private key: string) {}

  async getItemInfo({ photoId }: IItemDetailsRequestParams): Promise<Response> {
    const response = fetch(
      `${this.url}method=flickr.photos.getInfo&api_key=${this.key}&photo_id=${photoId}&format=json&nojsoncallback=1`
    );
    return response;
  }

  async getItems({
    text,
    pageNumber = 1,
    limit = 20,
    sortType = SortType.datePosted,
    sortOrder = SortOrder.desc,
  }: IItemsRequestParams): Promise<Response> {
    const queryString = `api_key=${this.key}&sort=${sortType}-${sortOrder}&page=${pageNumber}&per_page=${limit}&text=${text}&safe_search=1`;
    const response = fetch(
      `${this.url}method=flickr.photos.search&format=json&nojsoncallback=1&${queryString}`
    );
    return response;
  }

  static getPhotoInfoUrl(photoId: string): string {
    const queryString = `api_key=${API_KEY}&photo_id=${photoId}&format=json&nojsoncallback=1`;
    return `${API_URL}method=flickr.photos.getInfo&${queryString}`;
  }

  static getPhotosUrl(
    { sortType, sortOrder, currentPage, limit }: Partial<Store>,
    text: string
  ): string {
    const queryString = `api_key=${API_KEY}&sort=${sortType}-${sortOrder}&page=${currentPage}&per_page=${limit}&text=${text}&safe_search=1`;
    return `${API_URL}method=flickr.photos.search&format=json&nojsoncallback=1&${queryString}`;
  }

  static generateImageLink(
    { id, server, secret }: Pick<IPhoto, 'id' | 'server' | 'secret'>,
    size = 'w'
  ): string {
    return `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  }

  static generatePhotoLink({
    owner,
    id,
  }: Pick<IPhoto, 'owner' | 'id'>): string {
    return `https://www.flickr.com/photos/${owner}/${id}`;
  }
}
