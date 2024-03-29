import { useState } from "react";
import { useAuth } from "~/contexts/AuthContext";
import SignInOptions from "~/components/Auth/SignInOptions";
import { useNavigate } from "@remix-run/react";
import { Link } from "~/components/ui/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "~/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type SignupSchema = z.infer<typeof formSchema>;

export default function SignUp() {
  const [, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const form = useForm<SignupSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: SignupSchema) {
    if (signup) {
      try {
        setLoading(true);
        await signup(values.email, values.password);
        navigate("/app/today");
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
  }
  return (
    <>
      <Card className="mx-auto max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Create an Account</CardDescription>
        </CardHeader>
        <CardContent>
          <SignInOptions />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="hi@email.com" />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="********" />
                    </FormControl>
                    <FormMessage />
                    <Link href="/auth/password" variant="link">
                      Forgot Password?
                    </Link>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            Already have an account?{" "}
            <Link href="/auth/login" variant="link">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
