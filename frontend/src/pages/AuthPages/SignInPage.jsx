import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import logo from "@/assets/logo (1).png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm space-y-6">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={logo} alt="Bluestock" className="h-8" />
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input type="email" placeholder="johndoe@gmail.com" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <a
                href="/forgot-password"
                className="text-xs text-blue-600 hover:underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="************"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* reCAPTCHA Placeholder */}
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-sm" />
              <span className="text-sm">I'm not a robot</span>
            </div>
            <div className="w-16 h-6 bg-gray-200 text-xs text-center rounded-sm flex items-center justify-center">
              reCAPTCHA
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm">
              Keep me signed in
            </label>
          </div>

          {/* Login Button */}
          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
            Login
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-grow h-px bg-gray-200" />
            <span className="text-xs text-gray-400">or sign in with</span>
            <div className="flex-grow h-px bg-gray-200" />
          </div>

          {/* Google Login Button */}
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 bg-gray-100"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5"
            />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </Button>

          {/* Create Account Link */}
          <p className="text-sm text-center text-blue-600 hover:underline">
            <a href="/signup">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}
