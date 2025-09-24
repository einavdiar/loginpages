import React, { useEffect, useState } from "react";

const blue = "#0d3f56";
const NAV_H = 60;

const SafeImg = ({ src, alt, className, style }) => (
  <img src={src} alt={alt} className={className} style={style} referrerPolicy="no-referrer" />
);

function Navbar({ go }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [teachersOpen, setTeachersOpen] = useState(false);
  const [mobileTeachersOpen, setMobileTeachersOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all",
        scrolled ? "bg-white/90 backdrop-blur-md shadow" : "bg-[#0d3f56]",
      ].join(" ")}
      style={{ height: NAV_H }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-full">
        <div className="h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-2 sm:gap-3" aria-label="דף הבית">
            <span className="inline-flex items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5" style={{ width: 40, height: 40 }}>
              <SafeImg src="https://www.studyclub.co.il/images/studyClub.JPG" alt="StudyClub" className="object-contain rounded-full" style={{ width: 32, height: 32 }} />
            </span>
            <span className={scrolled ? "text-[#0d3f56]" : "text-white"} style={{ fontSize: 18, lineHeight: 1 }}>StudyClub</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-8" style={{ fontSize: 18, lineHeight: 1 }}>
            <a href="#/" className={["transition hover:opacity-80 font-semibold", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>דף הבית</a>
            <a href="#/about" className={["transition hover:opacity-80 font-semibold", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>אודות</a>
            <a href="#/contact" className={["transition hover:opacity-80 font-semibold", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>צור קשר</a>
            <a href="#/terms" className={["transition hover:opacity-80 font-semibold", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}>תקנון האתר</a>

            {/* Teachers dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setTeachersOpen(true)}
              onMouseLeave={() => setTeachersOpen(false)}
            >
              <button
                type="button"
                className={["transition hover:opacity-80 font-semibold inline-flex items-center gap-1", scrolled ? "text-[#0d3f56]" : "text-white"].join(" ")}
              >
                מורים
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>

              {teachersOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/5 overflow-hidden z-50">
                  <a href="#/teachers-signup" className="block w-full text-right px-4 py-3 hover:bg-gray-50 text-[#0d3f56] font-semibold">הרשמה למורים</a>
                  <a href="#/teachers-login" className="block w-full text-right px-4 py-3 hover:bg-gray-50 text-[#0d3f56] font-semibold border-t">התחברות למורים</a>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#/signup" className={["inline-flex items-center gap-2 rounded-xl px-3 py-2", scrolled ? "bg-white text-[#0d3f56] shadow" : "text-white border border-white"].join(" ")} style={{ fontSize: 14, lineHeight: 1 }}>הרשמה</a>
            <a href="#/login" className={["inline-flex items-center gap-2 rounded-xl px-3 py-2", scrolled ? "bg-white text-[#0d3f56] shadow" : "text-white border border-white"].join(" ")} style={{ fontSize: 14, lineHeight: 1 }}>התחברות</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg"
            aria-label="תפריט ניווט"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="flex flex-col py-4">
              <a href="#/" className="px-6 py-3 text-right text-[#0d3f56] hover:bg-gray-50 font-semibold">דף הבית</a>
              <a href="#/about" className="px-6 py-3 text-right text-[#0d3f56] hover:bg-gray-50 font-semibold">אודות</a>
              <a href="#/contact" className="px-6 py-3 text-right text-[#0d3f56] hover:bg-gray-50 font-semibold">צור קשר</a>
              <a href="#/terms" className="px-6 py-3 text-right text-[#0d3f56] hover:bg-gray-50 font-semibold">תקנון האתר</a>

              {/* Teachers (mobile, collapsible) */}
              <button
                onClick={() => setMobileTeachersOpen(!mobileTeachersOpen)}
                className="px-6 py-3 text-right text-[#0d3f56] hover:bg-gray-50 font-semibold flex items-center justify-between"
              >
                <span>מורים</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={mobileTeachersOpen ? "rotate-180 transition-transform" : "transition-transform"}>
                  <path d="M7 10l5 5 5-5z" />
                </svg>
              </button>
              {mobileTeachersOpen && (
                <div className="px-6 pb-2 space-y-2">
                  <a href="#/teachers-signup" className="block w-full text-right text-[#0d3f56] font-semibold py-2 px-2 hover:bg-gray-50 rounded-lg">הרשמה למורים</a>
                  <a href="#/teachers-login" className="block w-full text-right text-[#0d3f56] font-semibold py-2 px-2 hover:bg-gray-50 rounded-lg">התחברות למורים</a>
                </div>
              )}

              <div className="border-t mt-2 pt-2 px-6 space-y-2">
                <a href="#/signup" className="w-full block text-center py-2 px-4 bg-[#0d3f56] text-white rounded-xl font-semibold">הרשמה</a>
                <a href="#/login" className="w-full block text-center py-2 px-4 border border-[#0d3f56] text-[#0d3f56] rounded-xl font-semibold">התחברות</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default function PreviewNavbar() {
  return (
    <div dir="rtl" style={{ fontFamily: 'Calibri, Arial, sans-serif' }}>
      <Navbar />
      <main className="px-6" style={{ paddingTop: NAV_H + 20 }}>
        <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-white/80 ring-1 ring-black/5 shadow">
          <p className="text-lg" style={{ color: blue }}>
            Preview: לחצו על "מורים" כדי לפתוח תת־חלון עם "הרשמה למורים" ו"התחברות למורים".
          </p>
        </div>
      </main>
    </div>
  );
}
