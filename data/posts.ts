import { Users } from "./users";

export const Posts = [
  {
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    user: Users[0].user,
    likes_by_users: ["test@abc.com", "abc@test.com"],
    caption: "Idk Help Me :)",
    profile_pic: Users[0].image,
    owner_email: "test@abc.com",
    owner_uid: "123",
    date: 5,
    comments: [
      {
        user: "Dumb",
        comment: "Shit Pic",
      },
      {
        user: "Hathi",
        comment: "You Are Dumb",
      },
    ],
  },
  {
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    user: Users[4].user,
    likes_by_users: ["test@abc.com", "abc@test.com"],
    caption:
      "i am dumb you are also so hello bye haha btw you are also dumb hahah",
    profile_pic: Users[4].image,
    owner_email: "test@abc.com",
    owner_uid: "123",
    date: 69,
    comments: [
      {
        user: "Nerd",
        comment: "DumbNerd",
      },
    ],
  },
  {
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    user: Users[4].user,
    owner_email: "test@abc.com",
    owner_uid: "123",
    likes_by_users: ["test@abc.com", "abc@test.com"],
    caption:
      "i am dumb you are also so hello bye haha btw you are also dumb hahah",
    profile_pic: Users[4].image,
    date: 69,
    comments: [
      {
        user: "Nerd",
        comment: "DumbNerd",
      },
    ],
  },
  {
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    user: Users[4].user,
    owner_email: "test@abc.com",
    owner_uid: "123",
    likes_by_users: ["test@abc.com", "abc@test.com"],
    caption:
      "i am dumb you are also so hello bye haha btw you are also dumb hahah",
    profile_pic: Users[4].image,
    date: 69,
    comments: [
      {
        user: "Nerd",
        comment: "DumbNerd",
      },
    ],
  },
  {
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    user: Users[4].user,
    owner_email: "test@abc.com",
    owner_uid: "123",
    likes_by_users: ["test@abc.com", "abc@test.com"],
    caption:
      "i am dumb you are also so hello bye haha btw you are also dumb hahah",
    profile_pic: Users[4].image,
    date: 69,
    comments: [
      {
        user: "Nerd",
        comment: "DumbNerd",
      },
    ],
  },
  {
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
    user: Users[4].user,
    owner_email: "test@abc.com",
    owner_uid: "123",
    likes_by_users: ["test@abc.com", "abc@test.com"],
    caption:
      "i am dumb you are also so hello bye haha btw you are also dumb hahah",
    profile_pic: Users[4].image,
    date: 69,
    comments: [
      {
        user: "Nerd",
        comment: "DumbNerd",
      },
    ],
  },
];

export const PostFooterIcons = [
  {
    name: "Like",
    url: "https://img.icons8.com/material-outlined/60/ffffff/filled-like.png",
    likedImageUrl:
      "https://img.icons8.com/material/60/ffffff/filled-like--v1.png",
  },
  {
    name: "comment",
    url: "https://img.icons8.com/material-outlined/60/ffffff/filled-topic.png",
  },
  {
    name: "share",
    url: "https://img.icons8.com/material-outlined/60/ffffff/filled-sent.png",
  },
  {
    name: "bookmark",
    url: "https://img.icons8.com/material-outlined/60/ffffff/bookmark-ribbon.png",
  },
];
