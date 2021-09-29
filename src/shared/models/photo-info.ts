import { IResponsePhotoInfoDetails } from './response-photo-info';

export interface IPhotoInfo {
  id: string;
  secret: string;
  server: string;
  owner: string;
  username: string;
  views: number;
  title: string;
  description: string;
  dateUploaded: Date;
  dateTaken: Date;
}

export class PhotoInfo implements IPhotoInfo {
  id = '';
  secret = '';
  server = '';
  owner = '';
  username = '';
  views = 0;
  title = '';
  description = '';
  dateUploaded = new Date();
  dateTaken = new Date();

  constructor(responsePhotoInfo?: IResponsePhotoInfoDetails) {
    if (responsePhotoInfo) {
      Object.assign(this, {
        ...responsePhotoInfo,
        owner: responsePhotoInfo.owner.nsid,
        username: responsePhotoInfo.owner.username,
        title: responsePhotoInfo.title._content,
        description: responsePhotoInfo.description._content,
        dateTaken: new Date(responsePhotoInfo.dates.taken),
        dateUploaded: new Date(
          (parseInt(responsePhotoInfo.dateuploaded, 10) || 0) * 1000
        ),
      });
    }
  }
}
