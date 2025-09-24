import React from "react";

const blue = "#0d3f56";
const orange = "#f28c28";

const SafeImg = ({ src, alt, className, style }: any) => (
  <img src={src} alt={alt} className={className} style={style} referrerPolicy="no-referrer" />
);

export default function TeachersJoinSection() {
  const iconBg: React.CSSProperties = { backgroundColor: "#fff", borderRadius: 12, padding: 6 };
  const pageBg: React.CSSProperties = {
    backgroundImage:
      'linear-gradient(rgba(255,255,255,0.97), rgba(255,255,255,0.97)), url("https://static.vecteezy.com/system/resources/previews/025/348/965/non_2x/mathematics-outline-minimal-seamless-pattern-math-education-background-vector.jpg")',
    backgroundRepeat: "repeat",
    backgroundSize: "600px 600px",
    minHeight: "100vh",
  };

  const Card = ({ title, text }: { title: string; text: string }) => (
    <div className="rounded-2xl border bg-white/90 backdrop-blur p-6 text-center shadow-sm" style={{ borderColor: `${blue}22` as any }}>
      <div className="flex justify-center mb-4">
        <SafeImg
          src="https://w7.pngwing.com/pngs/570/728/png-transparent-orange-check-lofo-check-mark-symbol-computer-icons-orange-tree-miscellaneous-angle-text-thumbnail.png"
          alt="orange check"
          className="h-10 w-10 object-contain"
          style={iconBg}
        />
      </div>
      <h3 className="text-2xl mb-2" style={{ color: orange }}>{title}</h3>
      <p className="text-lg leading-8 opacity-90">{text}</p>
    </div>
  );

  return (
    <div dir="rtl" className="px-4 py-10" style={{ ...pageBg, fontFamily: "Calibri, Arial, sans-serif", color: blue }}>
      <div className="mx-auto max-w-5xl text-right">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: blue }}>מורים – הצטרפו אלינו</h1>
          <p className="text-xl opacity-90">הפכו את הידע והניסיון שלכם להשפעה אמיתית על תלמידים – עם מערכת חכמה שמרכזת תיאומים, שיעורים ותשלומים במקום אחד.</p>
        </header>

        <div className="flex items-center justify-between mb-3">
          <h2 className="text-2xl font-bold" style={{ color: blue }}>מה אנחנו מחפשים?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card title="ידע מקצועי חזק" text="מורים שמכירים לעומק את החומר ויודעים לפרק נושאים מורכבים לפשוטים." />
          <Card title="עמידה במבחן מקצועי" text="לפני העלאה לפלטפורמה עוברים מבחן מקצועי בתחום ההוראה שלכם." />
          <Card title="עמידה במבחן אישיות" text="יכולת העברת שיעור נעימה, סבלנות ותקשורת חיובית עם תלמידים והורים." />
        </div>

        <div className="text-center mt-8">
          <a href="#/teachers-signup" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-lg bg-white shadow-sm transition hover:shadow-md" style={{ border: `2px solid ${blue}`, color: blue }}>
            <SafeImg src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="teacher icon" className="w-6 h-6 object-contain" style={{ backgroundColor: "#fff", borderRadius: 8, padding: 2 }} />
            הרשמה למורים
          </a>
        </div>
      </div>
    </div>
  );
}