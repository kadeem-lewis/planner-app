import React, { useRef, Dispatch, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { auth, googleProvider } from "../../config/firebase";
import { useAuth } from "../../contexts/AuthContext";

export const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup, googleSignUp, anonymousSignUp } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignUp = async () => {
    if (googleSignUp) {
      try {
        await googleSignUp();
        navigate("../../app/today");
      } catch (err) {
        console.error("Google Sign up failed");
      }
    }
  };
  const handleAnonymousSignUp = async () => {
    if (anonymousSignUp) {
      try {
        await anonymousSignUp();
        navigate("../../app/today");
      } catch (err) {
        console.error("Google Sign up failed");
      }
    }
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      emailRef.current &&
      passwordRef.current &&
      confirmPasswordRef.current &&
      signup
    ) {
      if (passwordRef.current.value !== confirmPasswordRef.current.value) {
        return setError("Passwords do not match");
      }
      try {
        setError("");
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value);
        navigate("../../app/today");
      } catch (error) {
        setError("Failed to create an account");
      }
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg">
        <h2 className=" text-2xl font-bold">Sign Up</h2>
        {error && <div className="alert alert-error">{error}</div>}

        <div className=" space-y-4">
          <button onClick={() => handleGoogleSignUp()} className="btn w-full">
            <FontAwesomeIcon icon={faGoogle} className="mr-4" />
            Sign in with Google
          </button>
          <button
            className="btn w-full"
            onClick={() => handleAnonymousSignUp()}
          >
            <FontAwesomeIcon icon={faUserSecret} className="mr-4" />
            Sign in Anonymously
          </button>
        </div>
        <div className="divider">OR</div>
        <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            className=" input input-bordered"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            className="input input-bordered"
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            ref={confirmPasswordRef}
            className=" input input-bordered"
          />
          <input
            type="submit"
            value="Register"
            className="btn"
            disabled={loading}
          />
        </form>
        <div className="divider" />
        <p>
          Already have an account?{" "}
          <Link to="../login" className="link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
