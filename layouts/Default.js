import { useState } from "react";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      <Navbar open={open} setOpen={setOpen} />
      <section className="flex flex-col flex-1 min-w-0 overflow-hidden bg-gray-200">
        <div
          className="relative z-0 flex items-center justify-center px-3 py-2 bg-white "
          onClick={() => setOpen(true)}
        >
          <svg
            className="absolute left-0 w-6 h-6 ml-3 cursor-pointer md:hidden"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <h1 className="text-2xl">MustPlan</h1>
        </div>
        <div className="container px-4 pt-3 mx-auto mt-5">{children}</div>
      </section>
    </div>
  );
};

export function withDefautLayout(Component) {
  Component.layout = Layout;
  return Component;
}
