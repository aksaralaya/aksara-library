import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { addRecord } from "@/lib/attendance";
import Logo from "@/components/Logo";

export default function Kehadiran() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    nama_lengkap: "",
    kategori: "" as "" | "Santri" | "Alumni" | "Tamu Umum",
    kelas_asal: "",
    no_hp: "",
    tujuan: "" as "" | "Membaca" | "Meminjam" | "Belajar Kelompok",
    keterangan: "",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nama_lengkap.trim()) e.nama_lengkap = "Nama wajib diisi";
    if (!form.kategori) e.kategori = "Pilih kategori";
    if (!form.kelas_asal.trim()) e.kelas_asal = "Wajib diisi";
    if (!form.no_hp.trim()) e.no_hp = "No. HP wajib diisi";
    if (!form.tujuan) e.tujuan = "Pilih tujuan";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    addRecord({
      nama_lengkap: form.nama_lengkap.trim(),
      kategori: form.kategori as "Santri" | "Alumni" | "Tamu Umum",
      kelas_asal: form.kelas_asal.trim(),
      no_hp: form.no_hp.trim(),
      tujuan: form.tujuan as "Membaca" | "Meminjam" | "Belajar Kelompok",
      keterangan: form.keterangan.trim(),
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="w-full max-w-md text-center animate-fade-in">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-10 w-10 text-primary" />
          </div>
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground">Terima Kasih!</h2>
          <p className="mb-8 text-muted-foreground">Kehadiran Anda telah berhasil tercatat. Selamat beraktivitas di perpustakaan.</p>
          <div className="flex flex-col gap-3">
            <Button onClick={() => { setSubmitted(false); setForm({ nama_lengkap: "", kategori: "", kelas_asal: "", no_hp: "", tujuan: "", keterangan: "" }); }} variant="outline">
              Isi Kehadiran Lagi
            </Button>
            <Link to="/">
              <Button variant="ghost" className="w-full text-muted-foreground">Kembali ke Beranda</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Beranda
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-10">
        <div className="mx-auto max-w-lg">
          <div className="mb-8 text-center">
            <h1 className="mb-2 font-display text-3xl font-bold text-foreground">Formulir Kehadiran</h1>
            <p className="text-muted-foreground">Silakan isi data Anda untuk mencatat kehadiran di perpustakaan.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-8">
            <div className="space-y-2">
              <Label htmlFor="nama">Nama Lengkap *</Label>
              <Input id="nama" placeholder="Masukkan nama lengkap" value={form.nama_lengkap} onChange={(e) => setForm({ ...form, nama_lengkap: e.target.value })} />
              {errors.nama_lengkap && <p className="text-sm text-destructive">{errors.nama_lengkap}</p>}
            </div>

            <div className="space-y-2">
              <Label>Kategori *</Label>
              <Select value={form.kategori} onValueChange={(v) => setForm({ ...form, kategori: v as any })}>
                <SelectTrigger><SelectValue placeholder="Pilih kategori" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Santri">Santri</SelectItem>
                  <SelectItem value="Alumni">Alumni</SelectItem>
                  <SelectItem value="Tamu Umum">Tamu Umum</SelectItem>
                </SelectContent>
              </Select>
              {errors.kategori && <p className="text-sm text-destructive">{errors.kategori}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="kelas">Kelas / Kamar / Asal *</Label>
              <Input id="kelas" placeholder="Contoh: Kelas 3A, Kamar 12, PT ABC" value={form.kelas_asal} onChange={(e) => setForm({ ...form, kelas_asal: e.target.value })} />
              {errors.kelas_asal && <p className="text-sm text-destructive">{errors.kelas_asal}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="hp">No. HP *</Label>
              <Input id="hp" placeholder="08xxxxxxxxxx" value={form.no_hp} onChange={(e) => setForm({ ...form, no_hp: e.target.value })} />
              {errors.no_hp && <p className="text-sm text-destructive">{errors.no_hp}</p>}
            </div>

            <div className="space-y-2">
              <Label>Tujuan *</Label>
              <Select value={form.tujuan} onValueChange={(v) => setForm({ ...form, tujuan: v as any })}>
                <SelectTrigger><SelectValue placeholder="Pilih tujuan kunjungan" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Membaca">Membaca</SelectItem>
                  <SelectItem value="Meminjam">Meminjam</SelectItem>
                  <SelectItem value="Belajar Kelompok">Belajar Kelompok</SelectItem>
                </SelectContent>
              </Select>
              {errors.tujuan && <p className="text-sm text-destructive">{errors.tujuan}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="ket">Keterangan (opsional)</Label>
              <Textarea id="ket" placeholder="Catatan tambahan..." value={form.keterangan} onChange={(e) => setForm({ ...form, keterangan: e.target.value })} rows={3} />
            </div>

            <Button type="submit" className="w-full bg-gradient-gold text-accent-foreground shadow-gold hover:opacity-90 py-6 text-base font-semibold">
              Kirim Kehadiran
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
