import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Authentication logic
  if (email === 'admin@example.com' && password === 'password') {
    return NextResponse.json({ token: 'your-jwt-token' }, { status: 200 });
  }

  return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
}
