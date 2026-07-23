import { readFile } from "fs/promises";
import { join } from "path";

import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Renders the real Kavish Global logo, letterboxed to a square favicon —
// contained (not stretched/cropped) on a light backing since the source
// logo is black.
export default async function Icon() {
  const file = await readFile(join(process.cwd(), "public/media/brand/kavish-global-logo.png"));
  const src = `data:image/png;base64,${file.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7f5f2",
        }}
      >
        <img src={src} width={52} height={15} alt="" />
      </div>
    ),
    { ...size }
  );
}
