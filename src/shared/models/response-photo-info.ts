export interface IResponsePhotoInfo {
  photo: IResponsePhotoInfoDetails;
  stat: string;
  message?: string;
}

export interface IResponsePhotoInfoDetails {
  id: string;
  secret: string;
  server: string;
  owner: { username: string; nsid: string };
  title: { _content: string };
  description: { _content: string };
  dateuploaded: string;
  dates: { taken: string };
  views: number;
}
