import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@/database/db";

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                user_name: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                // Add logic here to look up the user from the credentials supplied
                const user : any[] = await db.query(`SELECT * FROM users WHERE user_name = '${credentials.user_name}'`);
                
                if (user.length != 0) {
                    console.log(user[0])
                    // Any object returned will be saved in `user` property of the JWT
                    return {
                        name: user[0].user_name,
                        email: user[0].email,
                      };
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ]
});