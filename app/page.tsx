"use client";

import dynamic from "next/dynamic";

// Load ConnectButton ONLY on client (fixes crash)
const ConnectButton = dynamic(
  async () => {
    const mod = await import("@rainbow-me/rainbowkit");
    return mod.ConnectButton;
  },
  { ssr: false }
);

export default function Home() {
  return (
    <main
      style={{
        padding: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <h1>🚀 My First Base App</h1>
      <p>Connect your wallet to continue</p>

      <ConnectButton />
    </main>
  );
}
