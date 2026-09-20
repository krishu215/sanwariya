import { ImageResponse } from "next/og";

export const alt = "Shree Sanwariya Marketing — Ideas that get noticed. Marketing that gets remembered. Indore, Madhya Pradesh.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f6f4ee", padding: "56px 64px", color: "#24241f", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><div style={{ display: "flex", fontSize: 65, fontWeight: 800, letterSpacing: "-5px" }}>ssm<span style={{ color: "#cf3b28" }}>.</span></div><div style={{ display: "flex", fontSize: 18, letterSpacing: "2px" }}>MARKETING AGENCY · INDORE</div></div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 72, fontWeight: 700, lineHeight: 1.06, letterSpacing: "-3px" }}><span>Ideas that get noticed.</span><span>Marketing that</span><span style={{ color: "#cf3b28" }}>gets remembered.</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #d5d2c9", paddingTop: 24, fontSize: 18 }}><span>SHREE SANWARIYA MARKETING</span><span>OFFLINE + ONLINE. IDEA → EXECUTION.</span></div>
    </div>, size,
  );
}
