import React, { Dispatch, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";
interface Props {
  setError: Dispatch<React.SetStateAction<string>>;
}
export const SignInOptions = ({ setError }: Props) => {
  const [loading, setLoading] = useState(false);
  const { googleSignUp, anonymousSignUp } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignUp = async () => {
    if (googleSignUp) {
      try {
        setError("");
        setLoading(true);
        await googleSignUp();
        navigate("../../app/today");
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
        navigate("../../app/today");
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
        <FontAwesomeIcon icon={faGoogle} className="mr-4" />
        Sign in with Google
      </button>
      <button
        className="btn w-full"
        onClick={() => handleAnonymousSignUp()}
        disabled={loading}
      >
        <FontAwesomeIcon icon={faUserSecret} className="mr-4" />
        Sign in Anonymously
      </button>
    </div>
  );
};
