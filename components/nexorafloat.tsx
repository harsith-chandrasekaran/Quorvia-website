"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function NexoraFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const touchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 992);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ---------- Desktop ---------- */
  const onMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };
  // Don't auto-close on mouse-leave if popup is open
  const onMouseLeave = () => {
    if (!isMobile) setIsHovered(false);
  };
  // Click toggles popup; popup stays until explicitly closed
  const onIconClick = () => {
    if (!isMobile) setIsOpen((v) => !v);
  };

  /* ---------- Mobile ---------- */
  const onTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (!isMobile) return;
    e.preventDefault();
    cancelAutoClose();
    setIsHovered(true);
    setIsOpen(true);
  };
  const onTouchEnd = () => {
    if (!isMobile) return;
    // Keep popup open for 4s after finger lifts, then close
    touchTimer.current = setTimeout(() => {
      setIsHovered(false);
      setIsOpen(false);
    }, 4000);
  };
  const cancelAutoClose = () => {
    if (touchTimer.current) clearTimeout(touchTimer.current);
  };

  return (
    <motion.div
      data-no-invert="true"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, type: "spring", bounce: 0.4 }}
      style={{
        position: "fixed",
        top: isMobile ? "auto" : "5.5rem",
        bottom: isMobile ? "1.8rem" : "auto",
        right: isMobile ? "1.2rem" : "1.8rem",
        zIndex: 3000,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.6rem",
      }}
    >
      {/* ── Icon Button ── */}
      <motion.button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onIconClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onTouchMove={cancelAutoClose}
        animate={{
          scale: isHovered ? 1.12 : 1,
          rotate: isHovered ? 6 : 0,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 18 }}
        aria-label="Nexora DevStudio partnership"
        style={{
          position: "relative",
          height: isMobile ? "3rem" : "3.6rem",
          width: isMobile ? "3rem" : "3.6rem",
          backgroundColor: "#F5F5F5",
          border: isOpen
            ? "2px solid rgba(136, 19, 55, 0.5)"
            : "1.5px solid rgba(200,200,200,0.5)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          cursor: "pointer",
          padding: 0,
          outline: "none",
          boxShadow: isHovered
            ? "0 0 0 4px rgba(136,19,55,0.12), 0 20px 30px -5px rgba(0,0,0,0.25)"
            : "0 8px 20px -3px rgba(0,0,0,0.15)",
          transition: "box-shadow 0.3s ease, border 0.3s ease",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      >
        <img
          src="/nexora-logo.svg"
          alt="Nexora DevStudio"
          style={{
            width: "40%",
            height: "40%",
            objectFit: "contain",
            objectPosition: "center center",
            pointerEvents: "none",
            display: "block",
          }}
        />
        <AnimatePresence>
          {isHovered && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                boxShadow: "inset 0 0 20px rgba(136, 19, 55, 0.22)",
                pointerEvents: "none",
              }}
            />
          )}
        </AnimatePresence>
      </motion.button>

      {/* ── Popup Card ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 14 : -10, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 14 : -10, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            // Stop click propagation so clicks inside popup don't close it
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "absolute",
              top: isMobile ? "auto" : "4.4rem",
              bottom: isMobile ? "3.6rem" : "auto",
              right: 0,
              width: "220px",
              backgroundColor: "#18181b",
              color: "#fff",
              borderRadius: "1.2rem",
              borderTopRightRadius: isMobile ? "1.2rem" : "0.3rem",
              borderBottomRightRadius: isMobile ? "0.3rem" : "1.2rem",
              padding: "1rem 1.15rem",
              border: "1px solid #27272a",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.65)",
              // Always interactive so the link can be clicked
              pointerEvents: "all",
              zIndex: 3001,
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "0.55rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <span style={{ fontSize: "1rem" }}>🤝</span>
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#a78bfa",
                  }}
                >
                  Development Partner
                </span>
              </div>
              {/* Close button */}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsHovered(false);
                }}
                style={{
                  background: "none",
                  border: "none",
                  color: "#71717a",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  lineHeight: 1,
                  padding: "0.1rem 0.3rem",
                  borderRadius: "4px",
                }}
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <p
              style={{
                fontSize: "0.78rem",
                lineHeight: "1.55",
                color: "#d4d4d8",
                margin: "0 0 0.9rem",
              }}
            >
              Quorvia Labs &amp; Nexora are a collaborative duo — united to
              deliver world-class digital experiences.
            </p>

            {/* Visit link — works on BOTH mobile & desktop */}
            <a
              href="https://nexora-devstudio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#a78bfa",
                textDecoration: "none",
                padding: "0.45rem 0.85rem",
                border: "1px solid rgba(167,139,250,0.35)",
                borderRadius: "8px",
                background: "rgba(167,139,250,0.1)",
                cursor: "pointer",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              Visit Nexora DevStudio →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
