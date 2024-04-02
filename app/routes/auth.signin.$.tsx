import { SignIn as ClerkSignIn } from "@clerk/remix";

export default function SignIn() {
  return (
    <>
      <ClerkSignIn />
    </>
  );
}
