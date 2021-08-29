export interface IPhoto {
  id: string;
  owner: string;
  server: string;
  title: string;
  secret: string;
  src: string;
  link: string;
}

export class Photo implements IPhoto {
  id: string;
  owner: string;
  server: string;
  title: string;
  secret: string;
  src: string;
  link: string;

  constructor({ id, owner, server, title, secret, src, link }: IPhoto) {
    this.id = id;
    this.owner = owner;
    this.server = server;
    this.title = title;
    this.secret = secret;
    this.src = src;
    this.link = link;
  }
}
