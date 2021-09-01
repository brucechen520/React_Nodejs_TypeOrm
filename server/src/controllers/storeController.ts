import * as storeModel from '../models/storeDao';

// src/controllers/storeController.ts
import {Request, Response} from "express";
class storeController {
    echo(req: Request, res: Response) {
        res.send('echo');
    };

    async getAllStore(req: Request, res: Response) {
        console.log('123');
        // console.log(req);
        storeModel.getAllStore(req, res);
    };

    async deleteStore(req: Request, res: Response) {
        storeModel.deleteStore(req, res);
    };

    async updateStore(req: Request, res: Response) {
        storeModel.updateStore(req, res);
    };

    async addStore(req: Request, res: Response) {
        storeModel.addStore(req, res);
    };
}
export default storeController;



// export async function getAllStore(req, res) {
//     console.log('123');
//     console.log(req);
//     storeModel.getAllStore(req, res);
// };

// export async function deleteStore(req, res) {
//     storeModel.deleteStore(req, res);
// };

// export async function updateStore(req, res) {
//     storeModel.updateStore(req, res);
// };

// export async function addStore(req, res) {
//     storeModel.addStore(req, res);
// };