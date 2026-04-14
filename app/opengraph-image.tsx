import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Carina Stuenes - Holistisk hälsa och välmående";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "68px",
          background:
            "radial-gradient(circle at 15% 20%, #e4eddc 0, transparent 35%), radial-gradient(circle at 85% 15%, #ece4d8 0, transparent 32%), linear-gradient(130deg, #f6f3ee, #fcfbf8)",
          color: "#1f2a1f",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "1px solid #d8d3c9",
            borderRadius: "999px",
            padding: "10px 18px",
            fontSize: 28,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          Holistisk halsa och valmaende
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 74, fontWeight: 700, lineHeight: 1.06 }}>Carina Stuenes</div>
          <div style={{ fontSize: 34, color: "#374737", maxWidth: "90%" }}>
            Behandlingar, yoga och mindfulness for balans i kropp och sinne
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
