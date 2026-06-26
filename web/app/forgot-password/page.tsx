import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          Forgot Password 🔑
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Enter your email to receive a password reset link.
        </p>

        <div className="space-y-5">

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <Button className="w-full">
            Send Reset Link
          </Button>

          <p className="text-center text-sm text-gray-600">
            Remember your password?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </main>
  );
}