"use client";

import { useEffect, useState } from "react";

const formatNumber = (n: number): string => String(n).padStart(2, "0");

const Countdown = () => {
  const target = new Date("2140-04-18T00:00:00Z").getTime();
  const [now, setNow] = useState<number>(Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 28, fontWeight: 600 }}>{days} days</div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
        <div style={{ background: "#111827", color: "white", padding: "8px 12px", borderRadius: 8 }}>{formatNumber(hours)} hours</div>
        <div style={{ background: "#111827", color: "white", padding: "8px 12px", borderRadius: 8 }}>{formatNumber(minutes)} minutes</div>
        <div style={{ background: "#111827", color: "white", padding: "8px 12px", borderRadius: 8 }}>{formatNumber(seconds)} seconds</div>
      </div>
    </div>
  );
};

export default Countdown;
