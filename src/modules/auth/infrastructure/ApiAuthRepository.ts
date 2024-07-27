import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { AuthRepository } from "../domain/AuthRepository";
import { AuthUser } from "../domain/AuthUser";
import firebase_app from "@/config/firebase/config";

const auth = getAuth(firebase_app);

export function createApiAuthRepository(): AuthRepository {
  return {
    login,
  };
}

async function login(user: AuthUser): Promise<void> {
  try {
    await signInWithEmailAndPassword(auth, user.email, user.password);
  } catch (error) {
    throw new Error('Error');
  }
}
