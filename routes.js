// GLOBAL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEACH = "/search";

// USERS
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const ME = "/me";

// videos
const VIDEOS = "/videos";
const UPLOAD_VIDEO = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

//github
const GITHUB = "/auth/github";
const GITHUB_CB = "/auth/github/callback";

//facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CB = "/auth/facebook/callback";

//Api
const API = "/api";
const REGISTER_VIEW = "/:id/view";
const ADD_COMMENT = "/:id/comment";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEACH,
  users: USERS,
  userDetail: id => (id ? `/users/${id}` : USER_DETAIL),
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  uploadVideo: UPLOAD_VIDEO,
  videoDetail: id => (id ? `/videos/${id}` : VIDEO_DETAIL),
  editVideo: id => (id ? `/videos/${id}/edit` : EDIT_VIDEO),
  deleteVideo: id => (id ? `/videos/${id}/delete` : DELETE_VIDEO),
  github: GITHUB,
  githubCB: GITHUB_CB,
  facebook: FACEBOOK,
  facebookCB: FACEBOOK_CB,
  me: ME,
  api: API,
  registerView: REGISTER_VIEW,
  addComment: ADD_COMMENT
};

export { routes };
