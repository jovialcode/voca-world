import client from "./client";

export const list = () => client.get("/word_beep");