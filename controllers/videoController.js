import { videosList } from '../db'

export const videoHome = (req, res) => {
    res.render('home',
        { pageTitle: 'Home', videosList })
}
export const videoSearch = (req, res) => {
    const { query: { term: searchingBy } } = req
    res.render('search',
        {
            pageTitle: 'Search',
            searchingBy
        })
}
export const videos = (req, res) => {
    res.render('videos',
        { pageTitle: 'Videos' })
}
export const uploadVideo = (req, res) => {
    res.render('uploadVideo',
        { pageTitle: 'Upload' })
}
export const videoDetail = (req, res) => {
    res.render('detailVideo',
        { pageTitle: 'Video Detail' })
}
export const editVideo = (req, res) => {
    res.render('editVideo',
        { pageTitle: 'Edit Video' })
}
export const deleteVideo = (req, res) => {
    res.render('deleteVideo',
        { pageTitle: 'Delete Video' })
}
