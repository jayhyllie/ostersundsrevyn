import { useContext } from "react";
import { SplashContext } from "../../../../src/context";

export function useShown() {
  const context = useContext(SplashContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
