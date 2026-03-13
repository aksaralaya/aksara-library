export interface AttendanceRecord {
  id: string;
  timestamp: string;
  nama_lengkap: string;
  kategori: "Santri" | "Alumni" | "Tamu Umum";
  kelas_asal: string;
  no_hp: string;
  tujuan: "Membaca" | "Meminjam" | "Belajar Kelompok";
  keterangan?: string;
}

// In-memory store for demo purposes
let records: AttendanceRecord[] = [
  {
    id: "1",
    timestamp: new Date().toISOString(),
    nama_lengkap: "Ahmad Fauzan",
    kategori: "Santri",
    kelas_asal: "Kelas 3A",
    no_hp: "081234567890",
    tujuan: "Membaca",
    keterangan: "",
  },
  {
    id: "2",
    timestamp: new Date().toISOString(),
    nama_lengkap: "Siti Aisyah",
    kategori: "Santri",
    kelas_asal: "Kelas 2B",
    no_hp: "081298765432",
    tujuan: "Belajar Kelompok",
    keterangan: "Persiapan ujian",
  },
  {
    id: "3",
    timestamp: new Date().toISOString(),
    nama_lengkap: "Umar Abdullah",
    kategori: "Alumni",
    kelas_asal: "Angkatan 2020",
    no_hp: "085612345678",
    tujuan: "Meminjam",
    keterangan: "Buku Fiqih",
  },
];

export function getRecords(): AttendanceRecord[] {
  return [...records];
}

export function addRecord(data: Omit<AttendanceRecord, "id" | "timestamp">): AttendanceRecord {
  const record: AttendanceRecord = {
    ...data,
    id: Date.now().toString(),
    timestamp: new Date().toISOString(),
  };
  records = [record, ...records];
  return record;
}

export function getTodayRecords(): AttendanceRecord[] {
  const today = new Date().toDateString();
  return records.filter((r) => new Date(r.timestamp).toDateString() === today);
}
