import React, { useEffect } from "react";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { user, isLoggedIn } = useSelector(state => state.user);
  const { mainPosts } = useSelector(state => state.post);

  return (
    <>
      {user ? (
        <div>로그인 했습니다.: {user.nickname}</div>
      ) : (
        <div>로그아웃했습니다.</div>
      )}
      {isLoggedIn && <PostForm />}
      {mainPosts.map(c => {
        return <PostCard key={c} post={c} />;
      })}
    </>
  );
};

export default Home;
