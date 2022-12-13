export class Photo {
  id: number;
  description: string;
  creationDate: Date;
  gifUrl: string;

  constructor(obj: any) {
    const { id, title, import_datetime, images } = obj;
    this.id = id;
    this.description = title;
    this.creationDate = new Date(import_datetime);
    this.gifUrl = images.fixed_height.url;
  }
}
