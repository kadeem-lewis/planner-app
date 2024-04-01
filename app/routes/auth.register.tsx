import { useActionData, useSubmit, useNavigation } from "@remix-run/react";
import { Link } from "~/components/ui/link";
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
import { z } from "zod";
import { Form, FormField } from "~/components/form";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const result = formSchema.safeParse(Object.fromEntries(formData));
  console.log(Object.fromEntries(formData));

  if (!result.success) {
    return {
      status: 400,
      errors: result.error.flatten().fieldErrors,
    };
  }
  return redirect("/app/today");
}

export default function Register() {
  const submit = useSubmit();
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    submit(e.currentTarget, { method: "POST", action: "/auth/register" });
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
          <Form
            method="post"
            validationErrors={actionData?.errors}
            onSubmit={onSubmit}
          >
            <FormField
              name="email"
              type="email"
              label="Email"
              isDisabled={navigation.state === "submitting"}
            />
            <FormField
              name="password"
              type="password"
              label="Password"
              isDisabled={navigation.state === "submitting"}
            />
            <Link href="/auth/password" variant="link">
              Forgot Password?
            </Link>
            <Button type="submit" className="w-full">
              {navigation.state === "submitting" ? "Submitting..." : "Submit"}
            </Button>
          </Form>
        </CardContent>
        <CardFooter>
          <p>
            Already have an account?{" "}
            <Link href="/auth/signin" variant="link">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
