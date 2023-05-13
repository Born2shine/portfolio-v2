import { Routes, Route, NavLink } from "react-router-dom";
import { Suspense } from "react";
import { Home, About, Resume, Portfolio, SinglePortfolio, Contact } from "./pages";

const App = () => {
  return (
    <section className="h-screen w-screen overflow-hidden">
      <Suspense fallback={<div className="bg-overlay h-screen w-screen flex flex-col gap-4 justify-center items-center">
       <div className="w-16 h-16 rounded-full border-2 border-[#ffffff] border-t-2 border-t-isPrimary5 animate-spin transition-all duration-30"></div>
       <div className="text-sm">
       <span className="font-1 tracking-widest text-[#ffffffff]">tomcodes {`</>`} </span>
       </div>
      </div>}>
        <main className="bg-banner h-screen bg-[#ffffffff]">
          {/* <div className="bg-overlay"></div> */}
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/resume" element={<Resume />} />
            <Route index path="/portfolio" element={<Portfolio />} />
            <Route index path="/portfolio/:id" element={<SinglePortfolio />} />
            <Route index path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Suspense>
    </section>
  );
};

export default App;
