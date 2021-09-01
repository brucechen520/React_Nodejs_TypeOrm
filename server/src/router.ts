// src/router.ts

import Route from "./routes/route";
import StoreRoute from "./routes/storeRoutes";

export const router: Array<Route> = [
    new StoreRoute(),
];