export type IPost = {
  imageurl: string;
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
