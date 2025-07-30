// this is API VERSION II (v2)
import { Elysia } from "elysia";
import { rateLimitMiddleWare_API_V2 } from "../../middleware/rate_limiter.middleware";

export const v2 = new Elysia();

v2.group("/v2", (app) =>
    app
        .use(rateLimitMiddleWare_API_V2)
        .get("/", () => "v2")
        .post("/", () => "v2 post")
        .put("/", () => "v2 put")
        .delete("/", () => "v2 delete")
);
