import { routes } from '../routes'
import Video from '../models/Video'

export const videoHome = async (req, res) => {
  try {
    const videosList = await Video.find({}).sort({ _id: -1 })
    res.render('home', { pageTitle: 'Home', videosList })
  } catch (error) {
    console.log(error)
    res.render('home', { pageTitle: 'Home', videosList: [] })
  }
}
export const videoSearch = async (req, res) => {
  const {
    query: { term: searchingBy }
  } = req
  let videosList = []
  try {
    videosList = await Video.find({ title: { $regex: searchingBy, $options: 'i' } })
  } catch (error) {
    console.log(error)
  }
  res.render('search', {
    pageTitle: 'Search',
    searchingBy,
    videosList
  })
}
export const videos = (req, res) => {
  res.render('videos', { pageTitle: 'Videos' })
}
export const getUploadVideo = (req, res) => {
  res.render('uploadVideo', { pageTitle: 'Upload' })
}

export const postUploadVideo = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
    creator: req.user.id
  })
  req.user.videos.push(newVideo._id)
  req.user.save()
  res.redirect(routes.videoDetail(newVideo.id))
}

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id).populate('creator')
    res.render('detailVideo', { pageTitle: video.title, video })
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const video = await Video.findById(id)
    if (video.creator !== req.user.id) {
      throw Error()
    } else {
      res.render('editVideo', { pageTitle: `Edit ${video.title}`, video })
    }
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}

export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description })
    res.redirect(routes.videoDetail(id))
  } catch (error) {
    console.log(error)
    res.redirect(routes.home)
  }
}

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    if (video.creator !== req.user.id) {
      throw Error()
    } else {
      await Video.findByIdAndRemove({ _id: id })
    }
  } catch (error) {
    console.log(error)
  }
  res.redirect(routes.home)
}
