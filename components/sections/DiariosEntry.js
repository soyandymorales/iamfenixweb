"use client";

import { useEffect, useRef, useState } from "react";

import CTADiariosFenix from "@/components/sections/CTADiariosFenix";
import { hasDiariosAccess } from "@/libs/diarios-access";

export default function DiariosEntry({ unlocked, children }) {
  const [open, setOpen] = useState(unlocked);
  const paintedOpen = useRef(unlocked);

  useEffect(() => {
    if (hasDiariosAccess()) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open || paintedOpen.current) return;
    paintedOpen.current = true;
    document.querySelectorAll(".diarios-gate [data-reveal]").forEach((node) => {
      node.style.visibility = "visible";
      node.style.opacity = "1";
    });
  }, [open]);

  if (!open) {
    return <CTADiariosFenix onUnlocked={() => setOpen(true)} />;
  }

  return children;
}
