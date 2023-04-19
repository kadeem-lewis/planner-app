import React, { useRef, useState, FormEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { SignInOptions } from "@/components/Auth/SignInOptions";

export const LogIn = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

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
        <SignInOptions setError={setError} />
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
          <Link href="../password" className="link">
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
          Don&apos;t have an account yet?{" "}
          <Link to="../signup" className="link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
