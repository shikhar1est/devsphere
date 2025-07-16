import { auth } from "@/services/firebase";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChatPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (!u) navigate("/");
      else setUser(u);
    });
    return () => unsub();
  }, [navigate]);

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="flex h-screen w-full text-white">
      <aside className="w-[220px] bg-zinc-900 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-6">DevSphere</h2>
          <nav className="flex flex-col gap-4">
            <Button variant="ghost" className="justify-start text-left">🏠 Global Chat</Button>
            <Button variant="ghost" className="justify-start text-left">📄 Snippets</Button>
            <Button variant="ghost" className="justify-start text-left">💻 Coding Room</Button>
          </nav>
        </div>
        <div className="mt-8 border-t border-zinc-700 pt-4">
          <p className="text-sm text-gray-300 mb-2">{user.displayName}</p>
          <Button onClick={handleLogout} variant="secondary" className="w-full">
            Logout
          </Button>
        </div>
      </aside>

      <main className="flex-1 bg-zinc-800 p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-4"># Global Chat</h1>
        <div className="flex-1 bg-zinc-700 rounded-lg p-4 overflow-y-auto">
          <p className="text-gray-300">[Chat messages will show here]</p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-zinc-600 text-white p-2 rounded-md outline-none"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">Send</Button>
        </div>
      </main>

      <aside className="w-[250px] bg-zinc-900 p-4 hidden lg:block">
        <h2 className="text-lg font-semibold mb-4">Room Info</h2>
        <p className="text-sm text-gray-400">Users online, topic info, etc.</p>
      </aside>
    </div>
  );
}
