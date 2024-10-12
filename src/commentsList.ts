import avatar from './images/bozai.png';

export type CommentModule = {
    rpid: number;
    // user info
    user: {
        uid: string,
        avatar: string,
        uname: string,
    },
    // comment content
    content: string,
    // created datetime
    ctime: string,
    like: number,
};

export const currentUser = {
    // userid
    uid: '30009257',
    // profile
    avatar,
    // username
    uname: 'John',
};
