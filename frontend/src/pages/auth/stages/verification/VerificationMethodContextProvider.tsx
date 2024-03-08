import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
export const VerificationMethodContext = createContext<
  ["phone" | "email", Dispatch<SetStateAction<"phone" | "email">>]
>(["email", () => {}]);
export function VerificationMethodContextProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [method, setMethod] = useState<"phone" | "email">("email");
  return (
    <VerificationMethodContext.Provider value={[method, setMethod]}>
      {children}
    </VerificationMethodContext.Provider>
  );
}
