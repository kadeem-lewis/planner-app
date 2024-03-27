import { useRef, useState, FormEvent } from "react";
import { useAuth } from "~/contexts/AuthContext";
import SignInOptions from "~/components/Auth/SignInOptions";
import { Link, useNavigate } from "@remix-run/react";

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

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
        navigate("/app/today");
      } catch (error) {
        setError("Failed to create an account");
      }
      setLoading(false);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-lg">
        <h2 className=" text-2xl font-bold">Sign Up</h2>
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
            className=" input-bordered input"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            className="input-bordered input"
          />
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            ref={confirmPasswordRef}
            className=" input-bordered input"
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
          <Link to="/auth/login" className="link">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}