import { AuthUser } from "./AuthUser";

export interface AuthRepository {
	login: (user: AuthUser) => Promise<void>;
}