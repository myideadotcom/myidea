export class Profile{

  constructor(public $key:string, public userId:string, public description:string, public avatarUrl: string, public email: string){
  }

  static parseFromArray(array): Profile[]{
    return array.map(Profile.parseFromJson);
  }

  static parseFromJson({$key, userId, description, avatarUrl, email}):Profile{
    console.log($key+ ' ' + userId +' ' + description + ' '+ avatarUrl);
    return new Profile($key, userId, description, avatarUrl, email);
  }
}
