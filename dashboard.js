import { useState, useEffect } from "react";
import axios from "axios";

export default function Dashboard() {
  const [botInfo, setBotInfo] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/botinfo").then((res) => setBotInfo(res.data));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-4xl font-bold">Bot Dashboard</h1>
      {botInfo ? (
        <div className="mt-5">
          <p><strong>Bot neve:</strong> {botInfo.botName}</p>
          <p><strong>Státusz:</strong> {botInfo.status}</p>
          <p><strong>Verzió:</strong> {botInfo.version}</p>
        </div>
      ) : (
        <p>Betöltés...</p>
      )}
    </div>
  );
}
