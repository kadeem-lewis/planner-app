import { useNavigate, Link } from "@remix-run/react";
import { useAuth } from "~/contexts/AuthContext";
import SignInOptions from "~/components/Auth/SignInOptions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type LoginSchema = z.infer<typeof formSchema>;

export default function LogIn() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchema) {
    if (login) {
      try {
        await login(values.email, values.password);
        navigate("/app/today");
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <>
      <Card className="mx-auto max-w-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Welcome Back!</CardTitle>
          <CardDescription>Log in to your account</CardDescription>
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
                    <Link to="/auth/password">Forgot Password?</Link>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            Don&apos;t have an account yet?{" "}
            <Link to="/auth/signup" className="link">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
