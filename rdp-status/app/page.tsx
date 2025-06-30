'use client';

import { useEffect, useState } from 'react';

export default function HomePage() {
  const [client, setClient] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      const res = await fetch('/api/status');
      const data = await res.json();
      setClient(data.client);
      setLastUpdated(data.lastUpdated);
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">🖥️ RDP Session Monitor</h1>
      {client ? (
        <>
          <p>🔐 <strong>{client}</strong> is currently connected via RDP.</p>
          <p className="text-sm text-gray-500">Last updated: {new Date(lastUpdated!).toLocaleString()}</p>
        </>
      ) : (
        <p>✅ No one is currently connected via RDP.</p>
      )}
    </main>
  );
}
