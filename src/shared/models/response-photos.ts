import { IPhoto } from './photo';

export interface IResponsePhotos {
  stat: string;
  photos: IPhotosInfo;
  message?: string;
}

export interface IPhotosInfo {
  pages: number;
  photo: IPhoto[];
}
