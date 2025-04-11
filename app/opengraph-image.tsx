import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Devstract - Next-Generation Web and Mobile Solutions"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "#0f172a",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle at 25% 25%, rgba(45, 212, 191, 0.1) 0%, transparent 50%)",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
        <div style={{ width: 100, height: 100, backgroundColor: "#2DD4BF", marginRight: 20 }} />
        <div
          style={{
            width: 200,
            height: 200,
            border: "8px solid #f8fafc",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "3px",
              backgroundColor: "#2DD4BF",
              left: "20%",
              top: "30%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#2DD4BF", marginLeft: -6 }} />
          </div>
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "3px",
              backgroundColor: "#2DD4BF",
              left: "20%",
              top: "50%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#2DD4BF", marginLeft: -6 }} />
          </div>
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "3px",
              backgroundColor: "#2DD4BF",
              left: "20%",
              top: "70%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#2DD4BF", marginLeft: -6 }} />
          </div>
        </div>
      </div>

      <div
        style={{
          fontSize: 64,
          fontWeight: "bold",
          color: "#f8fafc",
          marginBottom: 20,
          textAlign: "center",
        }}
      >
        DEVSTRACT
      </div>

      <div
        style={{
          fontSize: 32,
          color: "#94a3b8",
          textAlign: "center",
          maxWidth: "80%",
        }}
      >
        Next-Generation Web and Mobile Solutions
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
