import React, { useState, useEffect } from "react";

const blue = "#0d3f56";
const NAV_H = 60;

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

export default function StudentSignup(){
  const [email,setEmail]=useState("");
  const [fullName,setFullName]=useState("");
  const [track,setTrack]=useState("school"); // school | university | enrichment
  const [phone,setPhone]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirm,setShowConfirm]=useState(false);
  const [touchedConfirm,setTouchedConfirm]=useState(false);

  const passwordsMatch = password === confirmPassword;

  const submit=(e)=>{
    e.preventDefault();
    if (!passwordsMatch) { alert("שגיאה: הסיסמאות לא תואמות."); return; }
    alert(`נרשמת כתלמיד \u2022 מסלול: ${track === "school" ? "בית ספר" : track === "university" ? "אקדמי" : "העשרה"} (דמו)`);
  };

  const handleGoogleLogin = () => {
    // TODO: החליפו לנתיב ה-OAuth שלכם (למשל: window.location.href = "/auth/google")
    alert("דמו: התחברות עם Google");
  };

  const baseBgStyle = {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url("https://static.vecteezy.com/system/resources/previews/025/348/965/non_2x/mathematics-outline-minimal-seamless-pattern-math-education-background-vector.jpg")',
    backgroundRepeat: "repeat",
    backgroundSize: "600px 600px",
    backgroundAttachment: "scroll",
    backgroundPosition: "top left",
    backgroundColor: "#ffffff",
    minHeight: "100vh",
  };

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
              <div>
                <label className="block text-sm mb-1">אימייל <span className="text-red-500">*</span></label>
                <input type="email" placeholder="example@domain.com" value={email} onChange={e=>setEmail(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              </div>

              <div>
                <label className="block text-sm mb-1">שם מלא <span className="text-red-500">*</span></label>
                <input type="text" placeholder="שם מלא" value={fullName} onChange={e=>setFullName(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              </div>

              {/* בחירת מסלול */}
              <div>
                <label className="block text-sm mb-1">מסלול לימוד <span className="text-red-500">*</span></label>
                <select
                  value={track}
                  onChange={(e)=>setTrack(e.currentTarget.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right bg-white"
                  required
                >
                  <option value="school">בית ספר</option>
                  <option value="university">אקדמי</option>
                  <option value="enrichment">העשרה</option>
                </select>
              </div>

              <div>
                <label className="block text-sm mb-1">טלפון <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="05X-XXXXXXX" value={phone} onChange={e=>setPhone(e.currentTarget.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required pattern="[0-9\-\+\s]{7,}" />
              </div>

              <div>
                <label className="block text-sm mb-1">סיסמה <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="סיסמה (מינ׳ 6 תווים)"
                    value={password}
                    onChange={e=>setPassword(e.currentTarget.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right pr-10"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "הסתר סיסמה" : "הצג סיסמה"}
                    onClick={() => setShowPassword(p => !p)}
                    className="absolute right-3"
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.042.156-2.047.45-3.001M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">אימות סיסמה <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="הקליד/י שוב את הסיסמה"
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.currentTarget.value)}
                    onBlur={() => setTouchedConfirm(true)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right pr-10"
                    required
                  />
                  <button
                    type="button"
                    aria-label={showConfirm ? "הסתר סיסמה" : "הצג סיסמה"}
                    onClick={() => setShowConfirm(s => !s)}
                    className="absolute right-3"
                  >
                    {showConfirm ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.042.156-2.047.45-3.001M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                {!passwordsMatch && touchedConfirm && (
                  <p className="mt-2 text-sm text-red-600">הסיסמאות אינן תואמות.</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-extrabold text-white shadow-lg hover:opacity-95"
                style={{ backgroundColor: blue }}
                disabled={!passwordsMatch || password.length < 6}
              >
                הירשם/י
              </button>

              <div className="flex items-center gap-3 my-2">
                <div className="h-px bg-gray-300 flex-1" />
                <span className="text-gray-500 text-sm">או</span>
                <div className="h-px bg-gray-300 flex-1" />
              </div>

              <button type="button" onClick={handleGoogleLogin} className="w-full py-3 rounded-xl border shadow-sm hover:bg-gray-50 flex items-center justify-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.59 31.91 29.137 35 24 35c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.84 1.154 7.938 3.046l5.657-5.657C34.046 5.053 29.268 3 24 3 12.955 3 4 11.955 4 23s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.651-.389-3.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.431 16.108 18.82 13 24 13c3.059 0 5.84 1.154 7.938 3.046ל5.657-5.657C34.046 5.053 29.268 3 24 3 15.798 3 8.839 7.675 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 43c5.083 0 9.79-1.944 13.291-5.109l-6.147-5.2C29.139 34.884 26.715 36 24 36c-5.11 0-9.449-3.257-11.006-7.804ל-6.6 5.087C9.89 38.915 16.457 43 24 43z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.09 3.185-3.56 5.68-6.659 6.691.001-.001 6.147 5.2 6.147 5.2C37.207 37.281 40 32.497 40 27c0-1.341-.138-2.651-.389-3.917z"/>
                </svg>
                <span className="font-bold">התחברות עם Google</span>
              </button>

              <p className="text-center text-gray-600 mt-5 font-bold">כבר יש חשבון? <a href="#/student-login" className="hover:underline" style={{ color: blue }}>להתחברות</a></p>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
