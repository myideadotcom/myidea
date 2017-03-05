export class Idea {

  constructor(public $key:string, public title:string, public description:string){
  }

  static parseFromArray(array): Idea[]{
    return array.map(Idea.parseFromJson);
  }

  static parseFromJson({$key, title, description}):Idea{
    return new Idea($key, title, description);
  }
}


