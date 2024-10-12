import _ from 'lodash';
import { useEffect, useState } from 'react';
import './App.scss';
import Comment from './comment';
import CommentInput from './commentInput';

import CommentInputRef from './commentInputRef';
import { CommentModule } from './commentsList';
import NavTab from './navTab';





const App = () => {
  const [usersList, setUserList] = useState<CommentModule[]>([]);
  useEffect(() => {
    async function getList() {
      const res = await fetch('http://localhost:3004/comments');
      const data = await res.json();
      setUserList(_.orderBy(data, 'like', 'desc'));
    }
    getList();
  }, []);

  function sortByLikes() {

    const sortedList = _.orderBy(usersList, ['like'], ['desc']);
    setUserList(sortedList);
  }

  function sortByDate() {

    const sortedList = _.orderBy(usersList, ['ctime'], ['desc']);
    setUserList(sortedList);
  }

  return (
    <div className="app">
      <>
        <NavTab length={usersList.length} sortByLikes={sortByLikes} sortByDate={sortByDate}></NavTab>
      </>
      <div className="reply-wrap">
        <>
          <CommentInput addNewComment={(newComment) =>
            setUserList([newComment, ...usersList])
          }></CommentInput>
          <div style={{ height: "30px" }} />
          <CommentInputRef addNewComment={(newComment) =>
            setUserList([newComment, ...usersList])
          }></CommentInputRef>
        </>
        <>
          {usersList.map((item) => (
            <Comment key={item.rpid} comment={item}></Comment>
          ))}
        </>
      </div>
    </div >
  );
};

export default App;