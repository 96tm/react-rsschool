import { IResponsePhotoInfo } from '../../src/shared/models/response-photo-info';
import { JSON_STATUS_OK } from '../../src/shared/constants';

export const responsePhotoInfoDetails = {
  id: 'photoId',
  secret: 'photoSecret',
  server: 'photoServer',
  owner: { username: 'photoUsername', nsid: 'photoOwner' },
  title: { _content: 'photoTitle' },
  description: { _content: 'photoDescription' },
  dateuploaded: '1630169063',
  dates: { taken: '2021-08-28 15:44:30' },
  views: 10,
};

export const PhotoInfoResponseMockSuccess: IResponsePhotoInfo = {
  photo: responsePhotoInfoDetails,
  stat: JSON_STATUS_OK,
};
