import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import useInput from "../../hooks/use-input";
import styles from "./style.module.css";

const Blogs = () => {
  const [file, setFile] = useState("");

  const {
    value: title,
    hasError: titleHasError,
    isValid: titleIsValid,
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput((value) => value.trim() !== "");

  const {
    value: subTitle,
    hasError: subTitleHasError,
    isValid: subTitleIsValid,
    inputChangeHandler: subTitleChangeHandler,
    inputBlurHandler: subTitleBlurHandler,
    reset: resetSubTitle,
  } = useInput((value) => value.trim() !== "");
  const {
    value: paragraph,
    inputChangeHandler: paragraphChangeHandler,
    reset: resetParagraph,
  } = useInput((value) => value.trim() !== "");

  const formIsValid = titleIsValid && subTitleIsValid;

  const blogDetail = {
    title: title,
    subTitle: subTitle,
    paragraph: paragraph,
    blogImage: file,
  };

  const blogHTTP = async () => {
    await fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogDetail),
    }).catch((err) => console.error(err));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(file);
    blogHTTP();
    resetTitle();
    resetSubTitle();
    setFile("");
    resetParagraph();
  };

  return (
    <>
      <h2 className={styles.mb}>Create your Blog</h2>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.gap}>
          <div>
            <label htmlFor="title">Title</label>
            <div>
              <input
                type="text"
                name="title"
                className="input"
                value={title}
                onChange={titleChangeHandler}
                onBlur={titleBlurHandler}
              />
            </div>
            {titleHasError && (
              <small className="error">* Title must be entered</small>
            )}
          </div>
          <div>
            <label htmlFor="subTitle">Sub Title</label>
            <div>
              <input
                type="text"
                name="subTitle"
                className="input"
                value={subTitle}
                onChange={subTitleChangeHandler}
                onBlur={subTitleBlurHandler}
              />
            </div>
            {subTitleHasError && (
              <small className="error">* Sub Title must be entered</small>
            )}
          </div>
          <div>
            <label htmlFor="blogImage">Upload Image</label>
            <div className={styles.mt}>
              <FileBase64
                type="file"
                multiple={false}
                name="blogImage"
                className={styles.file}
                onDone={({ base64 }) => setFile(base64)}
              />
            </div>
            {file && (
              <img src={file} height="100" className={styles.blogImage} />
            )}
          </div>
          <div>
            <label htmlFor="paragraph">Paragraph</label>
            <div className={styles.mt}>
              <textarea
                rows="5"
                name="paragraph"
                className="input"
                value={paragraph}
                onChange={paragraphChangeHandler}
              ></textarea>
            </div>
          </div>
          <div>
            <button
              className={!formIsValid ? styles.disable : styles.btn}
              disabled={!formIsValid}
            >
              Create
            </button>
          </div>
          <div className="success">Successfully Created!</div>
        </div>
      </form>
    </>
  );
};

export default Blogs;
