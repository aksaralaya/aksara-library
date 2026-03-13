import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ExternalLink, LogOut, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getTodayRecords, type AttendanceRecord } from "@/lib/attendance";
import Logo from "@/components/Logo";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [records, setRecords] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("aksara_admin") !== "true") {
      navigate("/admin");
      return;
    }
    setRecords(getTodayRecords());
  }, [navigate]);

  const filtered = records.filter((r) =>
    r.nama_lengkap.toLowerCase().includes(search.toLowerCase())
  );

  const handleLogout = () => {
    sessionStorage.removeItem("aksara_admin");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Logo />
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                <ArrowLeft className="h-4 w-4" /> Beranda
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="gap-1 text-muted-foreground">
              <LogOut className="h-4 w-4" /> Keluar
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-1 font-display text-3xl font-bold text-foreground">Dashboard Admin</h1>
          <p className="text-muted-foreground">Rekapitulasi kehadiran perpustakaan hari ini</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{records.length}</p>
                <p className="text-sm text-muted-foreground">Pengunjung Hari Ini</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                <span className="text-lg">📖</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{records.filter(r => r.tujuan === "Membaca").length}</p>
                <p className="text-sm text-muted-foreground">Membaca</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                <span className="text-lg">👥</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{records.filter(r => r.tujuan === "Belajar Kelompok").length}</p>
                <p className="text-sm text-muted-foreground">Belajar Kelompok</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Actions */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Cari nama pengunjung..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9" />
          </div>
          <Button variant="outline" className="gap-2 border-primary/30 text-primary" onClick={() => window.open("https://sheets.google.com", "_blank")}>
            <ExternalLink className="h-4 w-4" /> Buka Rekap Excel
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-border bg-card shadow-sm overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">No</TableHead>
                <TableHead>Waktu</TableHead>
                <TableHead>Nama</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead className="hidden md:table-cell">Kelas/Asal</TableHead>
                <TableHead className="hidden lg:table-cell">No. HP</TableHead>
                <TableHead>Tujuan</TableHead>
                <TableHead className="hidden lg:table-cell">Keterangan</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="py-10 text-center text-muted-foreground">
                    {search ? "Tidak ditemukan hasil pencarian." : "Belum ada data kehadiran hari ini."}
                  </TableCell>
                </TableRow>
              ) : (
                filtered.map((r, i) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{i + 1}</TableCell>
                    <TableCell className="text-sm">{new Date(r.timestamp).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" })}</TableCell>
                    <TableCell className="font-medium">{r.nama_lengkap}</TableCell>
                    <TableCell>
                      <span className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                        r.kategori === "Santri" ? "bg-primary/10 text-primary" :
                        r.kategori === "Alumni" ? "bg-accent/15 text-accent" :
                        "bg-muted text-muted-foreground"
                      }`}>
                        {r.kategori}
                      </span>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{r.kelas_asal}</TableCell>
                    <TableCell className="hidden lg:table-cell">{r.no_hp}</TableCell>
                    <TableCell>{r.tujuan}</TableCell>
                    <TableCell className="hidden lg:table-cell text-muted-foreground">{r.keterangan || "—"}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
