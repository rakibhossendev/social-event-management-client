import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import {jwt} from "better-auth/plugins"
import { MongoClient } from "mongodb";

const client = new MongoClient(`${process.env.BETTER_AUTH_MONGODB_URL}`);
const db = client.db("social-event-management");

export const auth = betterAuth({
    database: mongodbAdapter(db,{client}),
    emailAndPassword: {
        enabled: true
    },
    plugins: [jwt()],
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 24 * 60 * 60
        }
    }
})