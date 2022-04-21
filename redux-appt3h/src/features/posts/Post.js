import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, sortPost, getListTodo } from "./postSlice";

export default function Post() {
  const dataPost = useSelector((state) => state?.postReducer?.data);
  const dataCount = useSelector((state) => state?.counter?.value);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");
  useEffect(() => {
    dispatch(getListTodo());
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Title Post</h1>
      {/* {dataPost.map((item, index) => {
        return (
          <div className={styles.listIitem} key={index}>
            <p>{item.postTitle}</p>
            <button> Delete</button>
          </div>
        );
      })} */}
      {/* <input
        value={title}
        placeholder={"title"}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
      />
      <input
        value={content}
        placeholder={"content"}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        type="text"
      /> */}
      {/* {dataPost.map((item, index) => {
        return <p key={index}>{item.content}</p>;
      })} */}
      <p>{dataCount}</p>
      {/* <button
        onClick={() => {
          dispatch(addPost(inputValue));
          setinputValue("");
        }}
      >
        Add Post
      </button>
      <button
        onClick={() => {
          dispatch(sortPost());
        }}
      >
        Sort By Name
      </button> */}
    </div>
  );
}
