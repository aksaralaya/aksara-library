import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Logo from "@/components/Logo";

// Simple demo auth — NOT for production
const DEMO_USER = "admin";
const DEMO_PASS = "aksaralaya123";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === DEMO_USER && password === DEMO_PASS) {
      sessionStorage.setItem("aksara_admin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="w-full max-w-sm animate-fade-in">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary">
            <Lock className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground">Login Admin</h1>
          <p className="mt-1 text-sm text-muted-foreground">Masuk untuk mengelola perpustakaan</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-elegant">
          <div className="space-y-2">
            <Label htmlFor="user">Username</Label>
            <Input id="user" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pass">Password</Label>
            <Input id="pass" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Masuk</Button>
        </form>

        <div className="mt-4 text-center">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Kembali ke Beranda
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Demo: admin / aksaralaya123
        </p>
      </div>
    </div>
  );
}
