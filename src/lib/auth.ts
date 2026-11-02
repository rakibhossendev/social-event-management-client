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
    socialProviders: {
        github: {
            clientId: process.env.BETTER_AUTH_GITHUB_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GITHUB_SECRET_KEY as string
        },
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET_KEY as string
        }
    },
    plugins: [jwt()],
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 24 * 60 * 60
        }
    },

})