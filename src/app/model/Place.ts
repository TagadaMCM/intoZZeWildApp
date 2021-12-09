import {Serializable} from './serializable';

export class Place extends Serializable {
  id: number;
  name: string;
  tip: string;
  image: string;
  level: string;
  found: boolean;
  categoryId: number;

  constructor(jsonObject: any) {
    super(jsonObject);
  }

  update(place: Place): void {
    this.id = place.id;
    this.name = place.name;
    this.tip = place.tip;
    this.image = place.image;
    this.level = place.level;
    this.found = place.found
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      tip: this.tip,
      image: this.image,
      level: this.level,
      found: this.found
    };
  }
}
