import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import { findLogin } from "@/database/query";

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
                const data : any = await findLogin(
                    'users',{
                        user_name : credentials.user_name
                    }
                );
                
                console.log(data)
                
                if (!data.error) {
                    return {
                        name: data.user.user_name,
                        email: data.user.email,
                    };
                } else {
                    return data.data
                }
            }
        })
    ]
});