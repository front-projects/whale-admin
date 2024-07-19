import { LoginForm } from "@/components/Auth/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <LoginForm />
      {/* <div className="text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="mt-6">
        <LoginForm />
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link className="underline" href="/signup">
          Sign up
        </Link>
      </div> */}
    </div>
  );
}
