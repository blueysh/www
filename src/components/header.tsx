import { getLanyard } from "@/lib/discord";
import { useState } from "react";

export default function Header({
  initialFillIsDone,
  fillStateHook,
}: {
  initialFillIsDone: boolean;
  fillStateHook: any;
}) {
  const [spotify, setSpotify] = useState({} as any);
  const [discord, setDiscord] = useState("loading...");

  if (!initialFillIsDone) {
    getLanyard().then((data) => {
      setSpotify(data.data.spotify);
      setDiscord(data.data.discord_status);

      fillStateHook(true);
    });
  }

  setTimeout(() => {
    getLanyard().then((data) => {
      setSpotify(data.data.spotify);
      setDiscord(data.data.discord_status);
    });
  }, 10000);

  const statusKey: any = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline",
  };

  return (
    <div className="bg-blue-600 text-white text-center p-2 px-5">
      <code>
        Status: <strong className="animate-pulse">{statusKey[discord]}</strong>{" "}
        |{" "}
      </code>
      {spotify ? (
        <code>
          Listening to <strong className="italic">{spotify.song}</strong> by{" "}
          <strong className="italic">
            {spotify.artist && spotify.artist.split("; ").length >= 3
              ? `${spotify.artist.split("; ")[0]} and others`
              : spotify.artist}
          </strong>
          <a
            href={`https://open.spotify.com/track/${spotify.track_id}`}
            className="mx-5 underline underline-offset-2 active:opacity-50 hover:opacity-75"
          >
            Play ↗
          </a>
        </code>
      ) : (
        <code>Not Listening to Spotify</code>
      )}
    </div>
  );
}
