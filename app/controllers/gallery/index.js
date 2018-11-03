import { gallery } from '../../models/';

class GalleryController {
    async page(req, res, next) {
        try {
            let result = await gallery.find();
            res.render('pages/gallery', {
                active_nav: 'gallery',
                css: 'gallery',
                imgLists: result
            });
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default new GalleryController();