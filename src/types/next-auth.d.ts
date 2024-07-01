import NextAuth from "next-auth/next";

// for extending the values in useSession() besides the main 3 (name, email, image)
declare module "next-auth" {
  interface User {
    id: string;
    username: string | null;
  }
  interface Session {
    user: User & {
      id: string;
      username: string;
    };
    token: {
      username: string;
    };
  }
}
