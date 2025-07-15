// pages/ForgotPassword.jsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo (1).png";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm space-y-6">
        <div className="flex justify-center">
          <img src={logo} alt="Bluestock" className="h-8" />
        </div>
        <h2 className="text-center text-xl font-semibold">Forgot Password?</h2>
        <p className="text-center text-sm text-gray-600">
          Enter your email address to get the password reset link.
        </p>
        <div>
          <label>Email Address</label>
          <Input type="email" className="input w-full" />
        </div>
        <Button className="w-full bg-purple-700 text-white">
          Password Reset
        </Button>
        <p className="text-center text-sm text-gray-500">
          <a href="/login" className="text-gray-600 underline">
            Back to login
          </a>
        </p>
      </div>
    </div>
  );
}
