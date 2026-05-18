"use client";

import { useEffect, useState } from "react";

const formatUnit = (n: number, unit: string): string => `${n} ${unit}${n !== 1 ? "s" : ""}`;

const Countdown = () => {
  const [now, setNow] = useState<number>(Date.now());

  const target = new Date("2140-04-18T00:00:00Z").getTime();
  const diff = Math.max(0, target - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 32, fontWeight: 700 }}>{formatUnit(days, "day")}</div>
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 16 }}>
        <span style={{ background: "#111827", color: "white", padding: "8px 12px", borderRadius: 8 }}>{formatUnit(hours, "hour")}</span>
        <span style={{ background: "#111827", color: "white", padding: "8px 12px", borderRadius: 8 }}>{formatUnit(minutes, "minute")}</span>
        <span style={{ background: "#111827", color: "white", padding: "8px 12px", borderRadius: 8 }}>{formatUnit(seconds, "second")}</span>
      </div>
    </div>
  );
};

export default Countdown;
