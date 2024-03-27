import React, { Dispatch, useState } from "react";
import { Icons } from "../Icons";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "@remix-run/react";
interface Props {
  setError: Dispatch<React.SetStateAction<string>>;
}
export default function SignInOptions({ setError }: Props) {
  const [loading, setLoading] = useState(false);
  const { googleSignUp, anonymousSignUp } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignUp = async () => {
    if (googleSignUp) {
      try {
        setError("");
        setLoading(true);
        await googleSignUp();
        navigate("/app/today");
      } catch (err) {
        setError("Google Sign up failed");
      }
    }
    setLoading(false);
  };
  const handleAnonymousSignUp = async () => {
    if (anonymousSignUp) {
      try {
        setError("");
        setLoading(true);
        await anonymousSignUp();
        navigate("/app/today");
      } catch (err) {
        setError("Google Sign up failed");
      }
    }
    setLoading(false);
  };

  return (
    <div className=" space-y-4">
      <button
        onClick={() => handleGoogleSignUp()}
        className="btn w-full"
        disabled={loading}
      >
        <Icons.google className="mr-4 size-4" />
        Sign in with Google
      </button>
      <button
        className="btn w-full"
        onClick={() => handleAnonymousSignUp()}
        disabled={loading}
      >
        <Icons.secretUser className="mr-4 size-4" />
        Sign in Anonymously
      </button>
    </div>
  );
}
