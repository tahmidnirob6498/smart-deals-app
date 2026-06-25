import { createContext } from "react";
import { Auth } from "./firebase_init";

export const AuthContext=createContext(Auth)