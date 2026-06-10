import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "2-Week Board & Train (Returning Clients) | Cali K9®";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundImage:
            "url(https://assets.cdn.filesafe.space/9RVPGbjB6dCgPVsRbKEE/media/67c270a01e6df2ebba9219d2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 45%",
        }}
      />
    ),
    { width: 1200, height: 630 }
  );
}
