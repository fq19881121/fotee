import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    project: "travel-ai.fotoee.com",
    period: "7d",
    metrics: {
      pv: 48291,
      uv: 12804,
      countries: 42,
      mobileDeviceShare: 0.68
    },
    referrers: [
      { source: "direct", visitors: 4820 },
      { source: "x.com", visitors: 2180 },
      { source: "producthunt.com", visitors: 1640 }
    ]
  });
}
