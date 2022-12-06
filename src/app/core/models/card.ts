export class Card {
  id!: number;
  description!: string;
  users!: any[];
  heure!: any;
  isTrackOne!: any;
  isTrackTwo!: any;
  isTrackTree!: any;
  height!: any;
  color!: any;
  isCard!: any;

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.description = data.description;
      this.users = data.users;
      this.heure = data.heure;
      this.isTrackOne = data.isTrackOne;
      this.isTrackTwo = data.isTrackTwo;
      this.isTrackTree = data.isTrackTree;
      this.height = data.height;
      this.color = data.color;
      this.isCard = data.isCard;
    }
  }
}


