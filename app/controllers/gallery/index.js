import {galleryModel} from '../../models/';

class GalleryController {
    async page(req, res, next) {
        try {
            let result = await galleryModel.find();
            res.render('pages/gallery', {
                active_nav: 'gallery',
                imgLists: result
            });
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default new GalleryController();