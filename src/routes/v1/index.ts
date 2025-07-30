// this is API VERSION I (v1)
import { Elysia } from "elysia";
import { v1_group } from "./group";
import { rateLimitMiddleWare_API_V1 } from "../../middleware/rate_limiter.middleware";

export const v1 = new Elysia();

v1.group("/v1", (app) =>
    app
        .use(rateLimitMiddleWare_API_V1)
        .get("/", () => "v1")
        .post("/", () => "v1 post")
        .put("/", () => "v1 put")
        .delete("/", () => "v1 delete")
);
