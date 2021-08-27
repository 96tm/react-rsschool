import { IPhoto } from './photo';

export interface IResponsePhotos {
  stat: string;
  photos: IPhotos;
  message?: string;
}

export interface IPhotos {
  pages: number;
  photo: IPhoto[];
}
