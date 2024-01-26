import React from "react";
import { PostListData } from "~/constants/data";
import PostCard from "./PostCard";

const PostList = () => {
  return (
    <div className="mb-16 space-y-10">
      {PostListData.map((item) => (
        <PostCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PostList;
