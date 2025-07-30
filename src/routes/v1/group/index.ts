import Elysia from "elysia";

export const v1_group = (routes: Elysia) =>
    routes.group("/users", () =>
        routes
            .get("/", () => "users group")
            .post("/", () => "users post")
            .put("/", () => "users put")
            .delete("/", () => "users delete")
    );
