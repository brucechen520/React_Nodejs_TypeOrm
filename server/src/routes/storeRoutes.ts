// Require controller modules.
import storeController from '../controllers/storeController';
import Route from "./route";

class StoreRoute extends Route{
    private storeController = new storeController();

    constructor() {
        super();
        this.prefix = '/store';
        this.setRoutes();
    }

    protected setRoutes() {
        this.router.get('/', this.storeController.getAllStore);
        this.router.delete('/delete', this.storeController.deleteStore);
        this.router.put('/update', this.storeController.updateStore);
        this.router.post('/add', this.storeController.addStore);
    }
}

export default StoreRoute;

// // GET catalog home page.
// router.get('/', store_controller.getAllStore);

// // GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
// router.delete('/delete', store_controller.deleteStore);

// // POST request for creating Book.
// router.put('/update', store_controller.updateStore);

// // GET request to delete Book.
// router.post('/add', store_controller.addStore);

// module.exports = router;
