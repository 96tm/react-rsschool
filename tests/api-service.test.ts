import ApiService from '../src/shared/api-service';
import SortType from '../src/shared/models/sort-type';
import SortOrder from '../src/shared/models/sort-order';
import { API_KEY, API_URL } from '../src/shared/constants';

describe('Api', () => {
  test('Get photos url', () => {
    const url = ApiService.getPhotosUrl(
      {
        sortType: SortType.datePosted,
        sortOrder: SortOrder.asc,
        currentPage: 1,
        limit: 10,
      },
      'text'
    );
    const queryString = `api_key=${API_KEY}&sort=${SortType.datePosted}-${
      SortOrder.asc
    }&page=${1}&per_page=${10}&text=text&safe_search=1`;
    const expectedUrl = `${API_URL}method=flickr.photos.search&format=json&nojsoncallback=1&${queryString}`;
    expect(url).toBe(expectedUrl);
  });
  test('Get photo info url', () => {
    const url = ApiService.getPhotoInfoUrl('id');
    const queryString = `api_key=${API_KEY}&photo_id=id&format=json&nojsoncallback=1`;
    const expectedUrl = `${API_URL}method=flickr.photos.getInfo&${queryString}`;
    expect(url).toBe(expectedUrl);
  });
  test('Generate image link', () => {
    const url = ApiService.generateImageLink({
      id: 'id',
      server: 'server',
      secret: 'secret',
    });
    const expectedUrl = `https://live.staticflickr.com/server/id_secret_w.jpg`;
    expect(url).toBe(expectedUrl);
  });
  test('Generate photo link', () => {
    const url = ApiService.generatePhotoLink({
      id: 'id',
      owner: 'owner',
    });
    const expectedUrl = `https://www.flickr.com/photos/owner/id`;
    expect(url).toBe(expectedUrl);
  });
});
