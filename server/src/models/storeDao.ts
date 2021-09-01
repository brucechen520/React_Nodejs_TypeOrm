import {Request, Response} from "express";
import { getManager, getConnection } from "typeorm";
import {Store} from "../entity/Store";

/**
 * Loads all posts from the database.
 */
 async function getAllStore(request: Request, response: Response) {
    // console.log(request);
    const connectionManager = getManager();
    const stores = await connectionManager.find(Store);
    console.log("All stores from the db: ", stores);

    // const postRepository = getManager().getRepository(Store);

    // return loaded posts
    response.json({'type': 'get', 'status': 'success', 'data': stores});
}

/**
 * Add a store in Store Table
 */
 async function addStore(request: Request, response: Response) {
    const req = request.body
    console.log(`Add Store: ${req}`);
    const newStore = req.data;
    const connectionManager = getManager();
    const store = new Store();
    store.title = newStore.title;
    store.address = newStore.address;
    store.phone = newStore.phone;
    store.owner = newStore.owner;
    try {
        await connectionManager.save(store);
    }
    catch(err) {
        console.log(`Add store throw error: ${err}`);
    }
    // await connectionManager.insert(Store, store);

    response.json({'type': 'post', 'status': 'success', 'data': '654'});
}

/**
 * Add a store in Store Table
 */
 async function updateStore(request: Request, response: Response) {
    const req = request.body;
    const store = req.data;
    console.log(`Update Store: ${store}`);
    try {
        await getConnection()
        .createQueryBuilder()
        .update(Store)
        .set(store)
        .where("id = :id", { id: store.id })
        .execute();
        response.json({'type': 'put', 'status': 'success'});
    }
    catch (error) {
        response.json({'type': 'put', 'status': 'failed', 'error': error});
    }
}

/**
 * Add a store in Store Table
 */
 async function deleteStore(request: Request, response: Response) {
    const req = request.body;
    const store = req;
    console.log(`Delete Store: ${store}`);
    try { 
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Store)
        .where("id = :id", { id: store.id })
        .execute();
        response.json({'type': 'delete', 'status': 'success'});
    }
    catch (error) {
        response.json({'type': 'delete', 'status': 'failed', 'error': error});
    }
}

export {
    getAllStore,
    addStore,
    updateStore,
    deleteStore,
}