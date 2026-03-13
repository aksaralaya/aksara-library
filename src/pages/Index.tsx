import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDailyQuote, getDailyDoa } from "@/lib/quotes";
import Logo from "@/components/Logo";

export default function Index() {
  const quote = getDailyQuote();
  const doa = getDailyDoa();

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <Link to="/admin">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Admin
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-hero islamic-pattern relative flex min-h-[85vh] items-center pt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-primary/80 px-4 py-2 text-sm text-gold-light animate-fade-in">
              <BookOpen className="h-4 w-4" />
              <span>Perpustakaan Digital Pesantren</span>
            </div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Aksara<span className="text-gradient-gold">laya</span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg text-gold-light/80 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Sistem digitalisasi manajemen perpustakaan pesantren. Catat kehadiran, kelola data, dan tingkatkan semangat menuntut ilmu.
            </p>

            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/kehadiran">
                <Button size="lg" className="bg-gradient-gold text-accent-foreground shadow-gold hover:opacity-90 gap-2 text-base font-semibold px-8 py-6">
                  Isi Kehadiran
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 80H1440V30C1440 30 1200 0 720 30C240 60 0 30 0 30V80Z" fill="hsl(40, 20%, 97%)" />
          </svg>
        </div>
      </section>

      {/* Daily Quote & Doa */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Quote Card */}
            <div className="group rounded-2xl border border-border bg-card p-8 shadow-elegant transition-all hover:-translate-y-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                Kutipan Hari Ini
              </div>
              <blockquote className="mb-4 font-display text-xl italic leading-relaxed text-foreground">
                "{quote.quote}"
              </blockquote>
              <cite className="text-sm font-medium text-accent">— {quote.source}</cite>
            </div>

            {/* Doa Card */}
            <div className="group rounded-2xl border border-border bg-card p-8 shadow-elegant transition-all hover:-translate-y-1">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent">
                🤲 Doa Harian
              </div>
              <p className="font-display text-xl italic leading-relaxed text-foreground">
                "{doa}"
              </p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-16 text-center">
            <Link to="/kehadiran">
              <Button variant="outline" size="lg" className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                Catat Kehadiran Sekarang
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aksaralaya — Perpustakaan Digital Pesantren</p>
        </div>
      </footer>
    </div>
  );
}
