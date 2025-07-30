// this is main routes (main prefix)
// Y'all can import child routes or group routes and then .use(import name)

import { Elysia } from "elysia";
import { v1 } from "./v1";
import { v2 } from "./v2";
const api = (app: Elysia) =>
    app.group("/api", (app) =>
        app
            .get("/", () => "API")
            .use(v1)
            .use(v2)
    );

export default api;
