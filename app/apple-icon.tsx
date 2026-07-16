import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 38,
          background: "#0a0d0c",
          color: "#f3f6f0",
          fontFamily: "Arial, sans-serif",
          fontSize: 98,
          fontWeight: 800,
          letterSpacing: "-0.12em",
        }}
      >
        <span style={{ transform: "translateX(-6px)" }}>B</span>
        <span
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 46,
            height: 46,
            background: "#b7f34b",
          }}
        />
      </div>
    ),
    size,
  );
}
