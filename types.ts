export type IPost = {
  imageUrl: string;
  user: string;
  likes: number;
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
