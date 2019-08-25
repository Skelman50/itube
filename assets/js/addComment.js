import axios from "axios";

const addComment = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  commentNumber.innerText = +commentNumber.innerText + 1;
};

const addNewComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  const videoID = window.location.href.split("/videos/")[1];
  const response = await axios.post(`/api/${videoID}/comment`, { comment });
  if (response.status === 200) {
    addNewComment(comment);
  }
};

const handleSubmitComment = async event => {
  event.preventDefault();
  const commentInput = addComment.querySelector("input");
  const comment = commentInput.value;
  await sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  addComment.addEventListener("submit", handleSubmitComment);
};

if (addComment) {
  init();
}
