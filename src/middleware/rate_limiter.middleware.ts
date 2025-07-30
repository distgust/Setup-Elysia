// you can manage rate limit per routes by create rateLimit cosnt
// and then .use(rateLimit const name) in routes group

import { rateLimit } from "elysia-rate-limit";

export const rateLimitMiddleware = rateLimit({
    duration: 60000,
    max: 60,
    errorResponse: new Response("too many request, please slow down :]", {
        status: 429,
        headers: new Headers({
            "Content-Type": "text/plain",
            "Custom-Header": "custom",
        }),
    }),
});

export const rateLimitMiddleWare_API_V1 = rateLimit({
    duration: 60000,
    max: 60,
    errorResponse: new Response("too many request, please slow down :]", {
        status: 429,
        headers: new Headers({
            "Content-Type": "text/plain",
            "Custom-Header": "custom",
        }),
    }),
});

export const rateLimitMiddleWare_API_V2 = rateLimit({
    duration: 60000,
    max: 60,
    errorResponse: new Response("too many request, please slow down :]", {
        status: 429,
        headers: new Headers({
            "Content-Type": "text/plain",
            "Custom-Header": "custom",
        }),
    }),
});
