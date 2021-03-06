import {Router} from "express";

abstract class Route {
    protected router = Router();
    protected abstract setRoutes(): void;
    protected prefix: string = '/';

    public getPrefix() {
        return this.prefix;
    }
    public getRouter() {
        return this.router;
    }
}
export default Route;