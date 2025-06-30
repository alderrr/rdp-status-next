// app/api/status/route.ts

let currentClient: string | null = null;
let lastUpdated: string | null = null;

export async function POST(req: Request) {
  const body = await req.json();
  currentClient = body.client || null; // null = clear status
  lastUpdated = new Date().toISOString();
  return Response.json({ status: 'ok', received: currentClient });
}

export async function GET() {
  return Response.json({ client: currentClient, lastUpdated });
}
