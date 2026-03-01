// navbar - fixed at top, goes transparent to blurred on scroll
// also has a mobile hamburger menu

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// all the nav links in one place so i dont repeat myself
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open/closed
  const [scrolled, setScrolled] = useState(false); // did user scroll down
  const pathname = usePathname();

  // listen for scroll to add the blur background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu when navigating to a new page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "14px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.25s ease",
        background: scrolled
          ? "rgba(12, 12, 20, 0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.06)"
          : "none",
      }}
    >
      {/* logo on the left */}
      <Link
        href="/"
        style={{
          fontSize: "22px",
          color: "#818cf8",
          letterSpacing: "0.02em",
        }}
      >
        XC
      </Link>

      {/* desktop nav links - hidden on mobile via css */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
        className="desktop-nav"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color:
                pathname === link.href
                  ? "#818cf8"
                  : "rgba(255, 255, 255, 0.5)",
              transition: "color 0.2s ease",
              letterSpacing: "0.04em",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* hamburger button - only shows on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        className="mobile-menu-btn"
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "5px",
        }}
      >
        <span
          style={{
            width: "25px",
            height: "2px",
            background: "white",
            transition: "all 0.3s ease",
            // top line rotates 45deg and shifts down to form the X
            transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <span
          style={{
            width: "25px",
            height: "2px",
            background: "white",
            transition: "all 0.3s ease",
            opacity: isOpen ? 0 : 1, // middle line just disappears
          }}
        />
        <span
          style={{
            width: "25px",
            height: "2px",
            background: "white",
            transition: "all 0.3s ease",
            // bottom line rotates the other way to complete the X
            transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}
        />
      </button>

      {/* fullscreen mobile menu overlay */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(12, 12, 20, 0.98)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "28px",
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color:
                  pathname === link.href
                    ? "#818cf8"
                    : "rgba(255, 255, 255, 0.6)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      {/* hide desktop nav on small screens, show hamburger instead */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
