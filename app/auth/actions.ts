"use server";
import { FormState } from "./types";
import { createSession, deleteSession } from "./session";

// FOR TEST
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (!email && !email?.includes("@")) {
    return { errors: { email: ["Please enter a valid email"] } };
  }
  if (!password) {
    return { errors: { password: ["Please enter your password"] } };
  }

  // FOR TEAST
  await delay(2000);
  const token = "token";
  const refresh = "refresh token"
  await createSession(token, refresh);
}

export async function logout() {
  deleteSession();
}
