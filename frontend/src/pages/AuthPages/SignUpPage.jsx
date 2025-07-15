// pages/Signup.jsx
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo (1).png";

export default function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-sm space-y-2">
        <div className="flex justify-center">
          <img src={logo} alt="Bluestock" className="h-8" />
        </div>
        <h2 className="text-center text-xl font-semibold">Create an account</h2>
        <div>
          <label>Name</label>
          <Input type="text" className="input w-full" />
        </div>
        <div>
          <label>Email Address</label>
          <Input type="email" className="input w-full" />
        </div>
        <div className="relative">
          <label>Password</label>
          <Input type="password" className="input w-full pr-10" />
        </div>
        <p className="text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            terms of service
          </a>
          .
        </p>
        <div className="flex items-center space-x-2">
          <nput type="checkbox" checked readOnly />
          <label>I'm not a robot</label>
        </div>
        <Button className="w-full bg-purple-700 text-white">Sign up</Button>
        <div className="relative text-center">
          <div className="absolute inset-0 border-t border-gray-300" />
          <span className="relative bg-white px-2 text-sm text-gray-500">
            or sign up with
          </span>
        </div>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center"
        >
          <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
}
