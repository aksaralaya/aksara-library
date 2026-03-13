import { Link } from "react-router-dom";
import { BookOpen, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDailyQuote, getDailyDoa } from "@/lib/quotes";
import Logo from "@/components/Logo";

export default function Index() {
  const quote = getDailyQuote();
  const doa = getDailyDoa();

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <Link to="/admin">
            <Button variant="outline" size="sm" className="gap-2 border-primary/30 text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
              <Lock className="h-3.5 w-3.5" />
              Admin
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-hero islamic-pattern relative flex min-h-[88vh] items-center pt-16">
        {/* Overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/25 bg-green-deep/60 px-5 py-2.5 backdrop-blur-sm animate-fade-in">
              <BookOpen className="h-4 w-4 text-gold" />
              <span className="text-sm font-medium tracking-wide text-gold-light">Perpustakaan Digital Pesantren</span>
            </div>

            {/* Title */}
            <h1 className="mb-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <span className="font-display text-5xl font-extrabold leading-tight tracking-tight text-gradient-emerald-gold drop-shadow-title md:text-7xl lg:text-8xl">
                Aksaralaya
              </span>
            </h1>

            {/* Description — clean high-contrast style */}
            <p className="mx-auto mb-12 max-w-xl text-lg font-semibold leading-relaxed text-[#1B4D3E] md:text-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Sistem digitalisasi manajemen perpustakaan pesantren. Catat kehadiran, kelola data, dan tingkatkan semangat menuntut ilmu.
            </p>

            {/* CTA Button — dark green with gold/white text */}
            <div className="animate-fade-in" style={{ animationDelay: "0.45s" }}>
              <Link to="/kehadiran">
                <Button size="lg" className="bg-gradient-cta border border-gold/30 text-primary-foreground shadow-gold hover:shadow-lg hover:border-gold/50 gap-3 text-base font-bold px-10 py-7 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                  <BookOpen className="h-5 w-5 text-gold" />
                  Isi Kehadiran
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Decorative gold line */}
            <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/50 text-lg">✦</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/40" />
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80H1440V30C1440 30 1200 0 720 30C240 60 0 30 0 30V80Z" fill="hsl(40, 20%, 97%)" />
          </svg>
        </div>
      </section>

      {/* Daily Quote & Doa */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section header */}
          <div className="mb-12 text-center">
            <div className="mx-auto mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-accent/40" />
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Inspirasi Harian</span>
              <div className="h-px w-10 bg-accent/40" />
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {/* Quote Card */}
            <div className="group rounded-2xl border border-gold-border/30 bg-card p-8 shadow-elegant transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/8 border border-primary/15 px-3.5 py-1.5 text-sm font-semibold text-primary">
                <BookOpen className="h-3.5 w-3.5" />
                Kutipan Hari Ini
              </div>
              <blockquote className="mb-5 font-display text-xl leading-relaxed text-foreground md:text-2xl">
                <span className="text-accent text-3xl leading-none">"</span>
                {quote.quote}
                <span className="text-accent text-3xl leading-none">"</span>
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-border" />
                <cite className="text-sm font-semibold text-accent not-italic">— {quote.source}</cite>
              </div>
            </div>

            {/* Doa Card */}
            <div className="group rounded-2xl border border-gold-border/30 bg-card p-8 shadow-elegant transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 md:p-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent/10 border border-accent/20 px-3.5 py-1.5 text-sm font-semibold text-accent">
                🤲 Doa Harian
              </div>
              <p className="font-display text-xl italic leading-relaxed text-foreground md:text-2xl">
                <span className="text-accent text-3xl leading-none not-italic">"</span>
                {doa}
                <span className="text-accent text-3xl leading-none not-italic">"</span>
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="h-px flex-1 bg-border" />
                <span className="text-sm font-semibold text-accent">Aamiin</span>
              </div>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="mt-16 text-center">
            <Link to="/kehadiran">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-green-light gap-2 font-bold px-8 py-6 rounded-xl shadow-elegant transition-all duration-300 hover:-translate-y-0.5">
                Catat Kehadiran Sekarang
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-primary py-8">
        <div className="container mx-auto px-4 text-center text-sm text-primary-foreground/70">
          <p className="font-medium">© {new Date().getFullYear()} Aksaralaya — Perpustakaan Digital Pesantren</p>
        </div>
      </footer>
    </div>
  );
}
