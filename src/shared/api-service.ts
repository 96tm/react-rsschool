import SortType from './models/sort-type';

interface IPhoto {
  id: number;
  serverId: number;
  secret: string;
}

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

  getPhotoLink({ id, serverId, secret }: IPhoto, size = 'w'): string {
    return `ttps://live.staticflickr.com/${serverId}/${id}_${secret}_${size}`;
  }
}
