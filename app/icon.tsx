import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
          background: "#0a0d0c",
          color: "#f3f6f0",
          fontFamily: "Arial, sans-serif",
          fontSize: 280,
          fontWeight: 800,
          letterSpacing: "-0.12em",
        }}
      >
        <span style={{ transform: "translateX(-18px)" }}>B</span>
        <span
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: 132,
            height: 132,
            background: "#b7f34b",
          }}
        />
      </div>
    ),
    size,
  );
}
