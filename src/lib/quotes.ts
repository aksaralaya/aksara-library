const dailyQuotes = [
  { quote: "Barangsiapa menempuh jalan untuk mencari ilmu, maka Allah akan memudahkan baginya jalan menuju surga.", source: "HR. Muslim" },
  { quote: "Tuntutlah ilmu dari buaian sampai liang lahat.", source: "Hadits Masyhur" },
  { quote: "Ilmu itu lebih utama daripada harta. Ilmu menjagamu, sedangkan kamulah yang menjaga harta.", source: "Ali bin Abi Thalib" },
  { quote: "Bacalah dengan menyebut nama Tuhanmu yang menciptakan.", source: "QS. Al-'Alaq: 1" },
  { quote: "Allah akan meninggikan derajat orang-orang yang beriman dan orang-orang yang diberi ilmu beberapa derajat.", source: "QS. Al-Mujadilah: 11" },
  { quote: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.", source: "HR. Ahmad" },
  { quote: "Menuntut ilmu adalah kewajiban bagi setiap muslim.", source: "HR. Ibnu Majah" },
];

const dailyDoa = [
  "Ya Allah, tambahkanlah ilmu kepadaku dan berikanlah aku pemahaman yang benar.",
  "Rabbi zidni ilman warzuqni fahman.",
  "Ya Allah, jadikanlah ilmu yang kami pelajari sebagai hujjah bagi kami, bukan hujjah atas kami.",
  "Ya Allah, bukakanlah hikmah-Mu atas kami dan curahkanlah rahmat-Mu kepada kami.",
  "Ya Allah, berikanlah kami ilmu yang bermanfaat, rezeki yang halal, dan amal yang diterima.",
  "Allahumma inni as'aluka ilman nafi'an wa rizqan thayyiban wa 'amalan mutaqabbalan.",
  "Ya Allah, mudahkanlah urusan kami dan lapangkanlah dada kami dalam menuntut ilmu.",
];

export function getDailyQuote() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyQuotes[dayOfYear % dailyQuotes.length];
}

export function getDailyDoa() {
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
  );
  return dailyDoa[dayOfYear % dailyDoa.length];
}
