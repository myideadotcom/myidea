export class Comment {
  constructor(public $key: string, public comment: string, public username: string, public ideaId: string) {
  }

  static parseFromArray(array): Comment[] {
    return array.map(Comment.parseFromJson);
  }

  static parseFromJson({$key, comment, username, ideaId}): Comment {
    return new Comment($key, comment, username, ideaId);
  }
}
