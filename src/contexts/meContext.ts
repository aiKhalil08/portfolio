import { createContext } from "react";
import { Me } from "../types";

export const MeContext = createContext<Me | null>(null);