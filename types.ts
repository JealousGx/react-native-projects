export type IPost = {
  id?: string;
  imageUrl: string;
  user: string;
  owner_email: string;
  owner_uid: string;
  likes_by_users: string[] | [];
  caption: string;
  profile_pic: string;
  date: number;
  comments: IComment[];
};

export type IComment = {
  user: string;
  comment: string;
};

export type IUser = {
  email: string;
  user: string;
  profile_pic: string;
};
