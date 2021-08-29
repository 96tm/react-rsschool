import { PhotoInfo } from '../../src/shared/models/photo-info';

const PhotoInfoMock = new PhotoInfo({
  id: 'photoId',
  secret: 'photoSecret',
  server: 'photoServer',
  owner: { username: 'photoUsername', nsid: 'photoOwner' },
  title: { _content: 'photoTitle' },
  description: { _content: 'photoDescription' },
  dateuploaded: '454648778',
  dates: { taken: '' },
  views: 10,
});
export default PhotoInfoMock;
