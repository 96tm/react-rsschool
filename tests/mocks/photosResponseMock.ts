import { JSON_STATUS_OK } from '../../src/shared/constants';
import {
  IResponsePhotos,
  IPhotosInfo,
} from '../../src/shared/models/response-photos';
import { PhotoMock1, PhotoMock2, PhotoMock3 } from './photosMock';

const PhotosResponseInfoSuccessEmptyMock: IPhotosInfo = {
  pages: 0,
  photo: [],
};

const PhotosResponseInfoSuccessMock: IPhotosInfo = {
  pages: 0,
  photo: [PhotoMock1, PhotoMock2, PhotoMock3],
};

export const PhotosResponseMockSuccess: IResponsePhotos = {
  stat: JSON_STATUS_OK,
  photos: PhotosResponseInfoSuccessMock,
};
export const PhotosResponseSuccessEmptyMock: IResponsePhotos = {
  stat: JSON_STATUS_OK,
  photos: PhotosResponseInfoSuccessEmptyMock,
};
export const PhotosResponseFailureMock: IResponsePhotos = {
  stat: 'Unknown error',
  photos: PhotosResponseInfoSuccessEmptyMock,
  message: 'Unknown error happened',
};
