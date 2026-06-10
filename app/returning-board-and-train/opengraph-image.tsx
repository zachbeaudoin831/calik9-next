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
            "url(https://calik9.com/images/returning-bt-dogs.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />
    ),
    { width: 1200, height: 630 }
  );
}
