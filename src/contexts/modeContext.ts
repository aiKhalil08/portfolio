import { createContext } from "react";

export const ModeContext = createContext<'light' | 'dark'>('light');