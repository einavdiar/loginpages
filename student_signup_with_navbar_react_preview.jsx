import React, { useEffect, useState } from "react";

const blue = "#0d3f56";
const orange = "#f28c28";
const NAV_H = 60;

const baseBgStyle: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url("https://static.vecteezy.com/system/resources/previews/025/348/965/non_2x/mathematics-outline-minimal-seamless-pattern-math-education-background-vector.jpg")',
  backgroundRepeat: "repeat",
  backgroundSize: "600px 600px",
  backgroundAttachment: "scroll",
  backgroundPosition: "top left",
  backgroundColor: "#ffffff",
  minHeight: "100vh",
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={["fixed top-0 inset-x-0 z-50 transition-all", scrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-[#0d3f56]"].join(" ")} style={{ height: NAV_H }}>
      <div className="mx-auto max-w-7xl px-6 h-full">
        <div className="h-full flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5" style={{ width: 50, height: 50 }}>
              <img src="https://www.studyclub.co.il/images/studyClub.JPG" alt="StudyClub" className="object-contain rounded-full" style={{ width: 42, height: 42 }} />
            </span>
            <span className={scrolled ? "text-[#0d3f56]" : "text-white"} style={{ fontSize: 26, lineHeight: 1 }}>StudyClub</span>
          </a>
          <nav className="flex-1 flex items-center justify-center gap-8" style={{ fontSize: 20, lineHeight: 1 }}>
            <a href="#/" className={["transition hover:opacity-80", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>דף הבית</a>
            <a href="#/about" className={["transition hover:opacity-80", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>אודות</a>
            <a href="#/contact" className={["transition hover:opacity-80", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>צור קשר</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function StudentSignupWithNavbarPreview() {
  const [email,setEmail]=useState("");
  const [fullName,setFullName]=useState("");
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const submit=(e:React.FormEvent)=>{e.preventDefault(); alert("נרשמת (תלמיד/ה)");};
  return (
    <div dir="rtl" style={{ ...baseBgStyle, fontFamily: "Calibri, Arial, sans-serif" }}>
      <Navbar />
      <main className="px-4" style={{ minHeight: `calc(100vh - ${NAV_H}px)`, paddingTop: 80 }}>
        <div className="max-w-xl mx-auto h-full flex flex-col justify-center gap-6">
          <section className="bg-white rounded-2xl p-6 ring-1 ring-black/5 shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-1" style={{ color: blue }}>הרשמה לתלמידים</h2>
              <p className="text-gray-700 font-bold">פתח/י חשבון כדי לקבוע שיעורים ולעקוב אחרי ההתקדמות</p>
            </div>
            <form onSubmit={submit} className="space-y-4 font-bold">
              <input type="email" placeholder="אימייל" value={email} onChange={e=>setEmail(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              <input type="text" placeholder="שם מלא" value={fullName} onChange={e=>setFullName(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              <input type="tel" placeholder="טלפון" value={phone} onChange={e=>setPhone(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" pattern="[0-9\\-\\+\\s]{7,}" />
              <input type="password" placeholder="סיסמה (מינ׳ 6 תווים)" value={password} onChange={e=>setPassword(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required minLength={6} />
              <button type="submit" className="w-full py-3 rounded-xl font-extrabold text-white shadow-lg hover:opacity-95" style={{ backgroundColor: blue }}>יצירת חשבון</button>
            </form>
            <div className="my-5 flex items-center gap-4 text-gray-400"><div className="h-px flex-1 bg-gray-200"/><span className="text-sm">או</span><div className="h-px flex-1 bg-gray-200"/></div>
            <button type="button" className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50 font-bold" aria-label="הרשם עם Google" onClick={()=>alert("Google OAuth (דמו)")}>
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
              הרשמה עם Google
            </button>
            <p className="text-center text-gray-600 mt-5 font-bold">כבר יש חשבון? <a href="#/login-student" className="hover:underline" style={{ color: orange }}>להתחברות</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
