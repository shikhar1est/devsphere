// src/pages/LoginPage.tsx
import { auth, provider } from "../services/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"; // or use Lucide icon

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user);
      // Redirect to dashboard or chat page
      navigate("/chat");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-xl w-[90%] max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to DevSphere</h1>
        <p className="mb-6 text-gray-300">Login to join the dev community</p>
        <Button
          onClick={handleLogin}
          className="bg-white text-black flex items-center gap-2 hover:bg-gray-100 w-full justify-center"
        >
          <FcGoogle size={20} />
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
