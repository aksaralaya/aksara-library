import { BookOpen } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
        <BookOpen className="h-5 w-5 text-primary-foreground" />
      </div>
      <span className="font-display text-xl font-bold tracking-wide">
        Aksaralaya
      </span>
    </div>
  );
}
