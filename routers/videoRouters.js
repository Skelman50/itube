import express from "express";
import { routes } from "../routes";
import {
  videos,
  videoDetail,
  deleteVideo,
  getUploadVideo,
  postUploadVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo, onlyPrivate } from "../middleware";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.uploadVideo, onlyPrivate, getUploadVideo);
videoRouter.post(routes.uploadVideo, onlyPrivate, uploadVideo, postUploadVideo);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export { videoRouter };
