import { NextResponse } from "next/server";

export async function POST() { return NextResponse.json({ error: "Native registration is not available. Please use QBBE’s current student portal." }, { status: 503 }); }
