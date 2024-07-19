import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SessionPayload } from "./types";

// const secretKey = 'secret';
// const key = new TextEncoder().encode(secretKey);


// export async function encrypt(payload: SessionPayload) {
//   return new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("1hr")
//     .sign(key);
// }

// export async function decrypt(session: string | undefined = "") {
//   try {
//     const { payload } = await jwtVerify(session, key, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch (error) {
//     return null;
//   }
// }

export async function createSession(token: string) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  // const session = await encrypt({ token, expiresAt });

  cookies().set("session", token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
  redirect("/menu");
}

export async function verifySession() {
  // const cookie = cookies().get("session")?.value;
  // const session = await decrypt(cookie);
  const token = cookies().get("session")?.value;

  if (!token) {
    redirect("/login");
  }

  return { isAuth: true, userId: Number(token) };
}

// export async function updateSession() {
//   const session = cookies().get("session")?.value;
//   const payload = await decrypt(session);

//   if (!session || !payload) {
//     return null;
//   }

//   const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
//   cookies().set("session", session, {
//     httpOnly: true,
//     secure: true,
//     expires: expires,
//     sameSite: "lax",
//     path: "/",
//   });
// }

export function deleteSession() {
  cookies().delete("session");
  redirect("/login");
}


// import 'server-only';
// import { db } from '@/drizzle/db';
// import { eq } from 'drizzle-orm';
// import { cache } from 'react';
// import { users } from '@/drizzle/schema';
// import { verifySession } from '@/app/auth/02-stateless-session';

// export const getUser = cache(async () => {
//   const session = await verifySession();
//   if (!session) return null;

//   try {
//     const data = await db.query.users.findMany({
//       where: eq(users.id, session.userId),

//       // Explicitly return the columns you need rather than the whole user object
//       columns: {
//         id: true,
//         name: true,
//         email: true,
//       },
//     });

//     const user = data[0];

//     return user;
//   } catch (error) {
//     console.log('Failed to fetch user');
//     return null;
//   }
// });