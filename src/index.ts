import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { jwt } from "@elysiajs/jwt";
import { rateLimitMiddleware } from "./middleware/rate_limiter.middleware";

import api from "./routes";
import { v1 } from "./routes/v1";
import { v2 } from "./routes/v2";

const ENV = process.env;

if (ENV) {
    if (!ENV.SECRET_KEY) {
        console.error("ENV : check JWT secret");
    }
    if (!ENV.CORS_ORIGIN) {
        console.error("ENV : Check CORS origin");
    }
} else {
    console.error("CHECK dotENV");
}

const app = new Elysia({
    name: "main",
})
    .use(rateLimitMiddleware)
    // .all("*", () => {
    //     return new Response("Not Founds", { status: 404 });
    // })
    // .onError(({ error }: any) => {
    //     console.warn("Request error:", error.code);
    //     return new Response("Internal error", { status: 500 });
    // })
    .use(
        jwt({
            name: "jwt",
            secret: process.env.SECRET_KEY
                ? process.env.SECRET_KEY
                : "_default_secret",
        })
    )
    .use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    )
    // .get("/", () => "MAIN")
    .use(api)
    .listen(666);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
