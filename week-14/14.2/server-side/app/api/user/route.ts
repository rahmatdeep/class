import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    return Response.json({ username: "rahmat", email: "rahmatdeep@gmail.com" })
  }


export async function POST(req: NextRequest) {
    const body = await req.json();

    return NextResponse.json({ username: body.username, password: body.password })
}
