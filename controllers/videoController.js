import { routes } from '../routes';

export const videoHome = (req, res) => {
    return res.render('home',
        { pageTitle: 'Home', videosList })
}
export const videoSearch = (req, res) => {
    const { query: { term: searchingBy } } = req
    res.render('search',
        {
            pageTitle: 'Search',
            searchingBy,
            videosList
        })
}
export const videos = (req, res) => {
    res.render('videos',
        { pageTitle: 'Videos' })
}
export const getUploadVideo = (req, res) => {
    res.render('uploadVideo',
        { pageTitle: 'Upload' })
}

export const postUploadVideo = (req, res) => {
    const { body:
        { file, name, description }
    } = req
    res.redirect(routes.videoDetail(1221221))
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
