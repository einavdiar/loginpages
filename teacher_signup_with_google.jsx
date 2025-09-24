import React, { useState } from "react";

const blue = "#0d3f56";
const orange = "#f28c28";

export default function TeacherSignup(){
  const [email,setEmail] = useState("");
  const [fullName,setFullName] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirm,setShowConfirm] = useState(false);
  const [touchedConfirm,setTouchedConfirm] = useState(false);

  const passwordsMatch = password === confirmPassword;

  const submit = (e) => {
    e.preventDefault();
    if (!passwordsMatch) { alert("שגיאה: הסיסמאות לא תואמות."); return; }
    alert("נרשמת כמורה (דמו)");
  };

  const handleGoogleLogin = () => {
    // TODO: החליפו לנתיב ה-OAuth שלכם
    // למשל: window.location.href = "/auth/google";
    alert("דמו: התחברות עם Google");
  };

  const pageBg = {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url("https://static.vecteezy.com/system/resources/previews/025/348/965/non_2x/mathematics-outline-minimal-seamless-pattern-math-education-background-vector.jpg")',
    backgroundRepeat: "repeat",
    backgroundSize: "600px 600px",
    minHeight: "100vh",
  };

  return (
    <div dir="rtl" style={{...pageBg, fontFamily:'Calibri, Arial, sans-serif'}}>
      <main className="px-4" style={{minHeight:"100vh", paddingTop: 60, paddingBottom: 40}}>
        <div className="max-w-xl mx-auto h-full flex flex-col justify-center gap-6">
          <section className="text-right">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-2" style={{color:blue}}>הרשמה למורים</h1>
            <p className="text-gray-700 mb-2 font-bold">הצטרפו לקהילת המורים של StudyClub.</p>
          </section>

          <section className="bg-white rounded-2xl p-6 ring-1 ring-black/5 shadow-xl">
            <form onSubmit={submit} className="space-y-4 font-bold text-right">
              <div>
                <label className="block text-sm mb-1">מייל <span className="text-red-500">*</span></label>
                <input type="email" placeholder="example@domain.com" value={email} onChange={e=>setEmail(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              </div>

              <div>
                <label className="block text-sm mb-1">שם מלא <span className="text-red-500">*</span></label>
                <input type="text" placeholder="שם מלא" value={fullName} onChange={e=>setFullName(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              </div>

              <div>
                <label className="block text-sm mb-1">טלפון <span className="text-red-500">*</span></label>
                <input type="tel" placeholder="05X-XXXXXXX" value={phone} onChange={e=>setPhone(e.target.value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required pattern="[0-9\-\+\s]{7,}" />
              </div>

              <div>
                <label className="block text-sm mb-1">סיסמה <span className="text-red-500">*</span></label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="סיסמה (מינ׳ 6 תווים)"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
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
                    onChange={e=>setConfirmPassword(e.target.value)}
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
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.431 16.108 18.82 13 24 13c3.059 0 5.84 1.154 7.938 3.046l5.657-5.657C34.046 5.053 29.268 3 24 3 15.798 3 8.839 7.675 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 43c5.083 0 9.79-1.944 13.291-5.109l-6.147-5.2C29.139 34.884 26.715 36 24 36c-5.11 0-9.449-3.257-11.006-7.804l-6.6 5.087C9.89 38.915 16.457 43 24 43z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.09 3.185-3.56 5.68-6.659 6.691.001-.001 6.147 5.2 6.147 5.2C37.207 37.281 40 32.497 40 27c0-1.341-.138-2.651-.389-3.917z"/>
                </svg>
                <span className="font-bold">התחברות עם Google</span>
              </button>
            </form>
            <p className="text-center text-gray-600 mt-5 font-bold">כבר יש חשבון? <a href="#/teachers-login" className="hover:underline" style={{ color: orange }}>להתחברות</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}
