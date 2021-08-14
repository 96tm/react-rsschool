export interface IPhoto {
  id: string;
  server: string;
  title: string;
  secret: string;
  src: string;
}

export class Photo implements IPhoto {
  id: string;
  server: string;
  title: string;
  src: string;
  secret: string;

  constructor({ id, server, title, secret, src }: IPhoto) {
    this.id = id;
    this.server = server;
    this.title = title;
    this.src = src;
    this.secret = secret;
  }
}
