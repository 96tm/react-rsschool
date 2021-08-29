import { IPhoto } from './models/photo';
import { API_KEY, API_URL } from './constants';
import { Store } from '../redux/store';

export default class ApiService {
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
