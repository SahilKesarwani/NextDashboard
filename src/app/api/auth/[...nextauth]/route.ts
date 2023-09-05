import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		}),
		// CredentialsProvider({
		// 	name: "Credentials",
		// 	credentials: {
		// 		email: {
		// 			label: "Email address",
		// 			type: "email",
		// 		},
		// 		password: {
		// 			label: "Password",
		// 			type: "password",
		// 		},
		// 	},
		// 	async authorize(credentials) {
		// 		const user = { id: 42, email: "sahil@gmail.com", password: "sahil" };
		// 		if (credentials?.email === user.email && credentials?.password === user.password) return user;
		// 		return null;
		// 	},
		// }),
	],
	pages: {
		signIn: "/signin",
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
