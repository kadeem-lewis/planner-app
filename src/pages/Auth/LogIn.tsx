import React, { useRef, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/AuthContext";

export const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, googleSignUp, anonymousSignUp } = useAuth();
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
    if (emailRef.current && passwordRef.current && login) {
      try {
        setError("");
        setLoading(true);
        await login(emailRef.current.value, passwordRef.current.value);
        navigate("../../app/today");
      } catch (error) {
        setError("Failed to login");
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-lg">
        <h2 className="text-2xl font-bold">Log in</h2>
        {error && <div className="alert alert-error">{error}</div>}
        <div className=" space-y-4">
          <button className="btn w-full" onClick={() => handleGoogleSignUp()}>
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
          <Link to="../password" className="link">
            Forgot Password?
          </Link>
          <input type="submit" value="Register" className="btn" />
        </form>
        <p>
          By continuing with Google, Apple, or Email, you agree to planner-app
          Terms of Service and Privacy Policy.
        </p>
        <div className="divider" />
        <p>
          Don't have an account yet?{" "}
          <Link to="../signup" className="link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
