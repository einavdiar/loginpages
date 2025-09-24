import React, { useState } from "react";

const blue = "#0d3f56";
const orange = "#f28c28";

export default function TeachersSignupPage(){
  const [email,setEmail] = useState("");
  const [fullName,setFullName] = useState("");
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("");
  const submit = (e:any)=>{ e.preventDefault(); alert("נרשמת כמורה (דמו)"); };

  const pageBg: React.CSSProperties = {
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
              <input type="email" placeholder="מייל" value={email} onChange={e=>setEmail((e.target as HTMLInputElement).value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              <input type="text" placeholder="שם מלא" value={fullName} onChange={e=>setFullName((e.target as HTMLInputElement).value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required />
              <input type="tel" placeholder="טלפון" value={phone} onChange={e=>setPhone((e.target as HTMLInputElement).value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required pattern="[0-9\-\+\s]{7,}" />
              <input type="password" placeholder="סיסמה" value={password} onChange={e=>setPassword((e.target as HTMLInputElement).value)} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-right" required minLength={6} />

              <button type="submit" className="w-full py-3 rounded-xl font-extrabold text-white shadow-lg hover:opacity-95" style={{ backgroundColor: blue }}>הירשם/י</button>
            </form>
            <p className="text-center text-gray-600 mt-5 font-bold">כבר יש חשבון? <a href="#/teachers-login" className="hover:underline" style={{ color: orange }}>להתחברות</a></p>
          </section>
        </div>
      </main>
    </div>
  );
}