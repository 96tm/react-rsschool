import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import { Store } from './store';
import {
  changeLoadingStatus,
  changeCurrentPage,
  changeNumberOfPages,
  changePhotos,
  changeError,
} from './actions';
import { IResponsePhotos } from '../shared/models/response-photos';
import { JSON_STATUS_OK } from '../shared/constants';
import { IPhoto, Photo } from '../shared/models/photo';
import { IResponsePhotoInfo } from '../shared/models/response-photo-info';
import { PhotoInfo, IPhotoInfo } from '../shared/models/photo-info';
import ApiService from '../shared/api-service';

export const fetchPhotos =
  (url: string): ThunkAction<Promise<void>, Store, null, AnyAction> =>
  async (dispatch, getState) => {
    dispatch(changeLoadingStatus(true));
    try {
      const json: IResponsePhotos = await fetch(url).then((response) =>
        response.json()
      );
      if (json.stat !== JSON_STATUS_OK) {
        throw Error(`Can't fetch data: ${json.message}`);
      }
      const photos = json.photos.photo.map(
        (item: IPhoto) =>
          new Photo({
            ...item,
            src: ApiService.generateImageLink(item),
            link: ApiService.generatePhotoLink(item),
          })
      );
      dispatch(
        changeCurrentPage(Math.min(getState().currentPage, json.photos.pages))
      );
      dispatch(changeNumberOfPages(json.photos.pages));
      dispatch(changePhotos(photos));
      dispatch(changeLoadingStatus(false));
      dispatch(changeError(''));
    } catch (err) {
      dispatch(changeError(err.message));
    } finally {
      dispatch(changeLoadingStatus(false));
    }
  };

export const fetchPhotoInfo =
  (
    url: string
  ): ThunkAction<
    Promise<IPhotoInfo | undefined>,
    Store,
    undefined,
    AnyAction
  > =>
  async (dispatch) => {
    dispatch(changeLoadingStatus(true));
    try {
      const json: IResponsePhotoInfo = await fetch(url).then((response) =>
        response.json()
      );
      if (json.stat !== JSON_STATUS_OK) {
        throw Error(json.message);
      }
      dispatch(changeError(''));
      return new PhotoInfo(json.photo);
    } catch (err) {
      dispatch(changeError(err.message));
    } finally {
      dispatch(changeLoadingStatus(false));
    }
    return undefined;
  };
