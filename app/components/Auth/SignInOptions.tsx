import { useState } from "react";
import { Icons } from "../Icons";
import { useAuth } from "~/contexts/AuthContext";
import { useNavigate } from "@remix-run/react";
import { Button } from "../ui/button";

export default function SignInOptions() {
  const [loading, setLoading] = useState(false);
  const { googleSignUp, anonymousSignUp } = useAuth();
  const navigate = useNavigate();
  const handleGoogleSignUp = async () => {
    if (googleSignUp) {
      try {
        setLoading(true);
        await googleSignUp();
        navigate("/app/today");
      } catch (err) {
        console.error(err);
      }
    }
    setLoading(false);
  };
  const handleAnonymousSignUp = async () => {
    if (anonymousSignUp) {
      try {
        setLoading(true);
        await anonymousSignUp();
        navigate("/app/today");
      } catch (err) {
        console.error(err);
      }
    }
    setLoading(false);
  };

  return (
    <div className=" space-y-4">
      <Button
        onPress={() => handleGoogleSignUp()}
        variant="default"
        className="w-full font-semibold uppercase text-muted"
        isDisabled={loading}
      >
        <Icons.google className="mr-4 size-4" />
        Sign in with Google
      </Button>
      <Button
        variant="default"
        className="w-full font-semibold uppercase text-muted"
        onPress={() => handleAnonymousSignUp()}
        isDisabled={loading}
      >
        <Icons.secretUser className="mr-4 size-4" />
        Sign in Anonymously
      </Button>
    </div>
  );
}
