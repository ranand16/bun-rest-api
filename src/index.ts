import { Elysia } from "elysia";

const app = new Elysia()
    .get("/", () => "Hello Rishabh Anand")
    .get("/post/:id", ({ params: { id } }) => {
        return { id: id, title: " Learning bun" };
    })
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
