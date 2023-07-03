import { useState, useEffect } from "react";
import { Replay } from "./Reply";

export function Replays() {
  const [replay, setReplay] = useState("");
  const [replays, setReplays] = useState(
    localStorage.getItem("REPLAYS")
      ? JSON.parse(localStorage.getItem("REPLAYS"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("REPLAYS", JSON.stringify(replays));
  }, [replays]);

  function handleAddReplay(e) {
    e.preventDefault();
    if (!replay) return;
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const hour = d.getHours();
    const minutes = d.getMinutes();
    setReplays([
      ...replays,
      {
        id: crypto.randomUUID(),
        replay: replay,
        date: `${year}/${month + 1}/${date} ${hour}:${minutes}`,
      },
    ]);
    setReplay("");
  }

  return (
    <>
      {replays.map((replay) => {
        return (
          <Replay
            key={replay.id}
            replay={replay}
            replays={replays}
            setReplays={setReplays}
          />
        );
      })}

      <form
        className="max-w-md  flex justify-between items-center text-black "
        onSubmit={handleAddReplay}
      >
        <input
          className=" px-6 py-2 w-[65%] rounded-lg 
          bg-gray-300 mt-3
          focus:outline-none"
          value={replay}
          onChange={(e) => setReplay(e.target.value)}
          type="text"
          placeholder="Replay..."
        />
        {replay ? (
          <button
            className="sidebar px-6 py-2 mt-3 font-semibold text-center text-white w-[30%] duration-500 transform rounded-lg cursor-pointer focus:outline-none bg-green-500 hover:bg-opacity-90"
            onClick={handleAddReplay}
          >
            Reply
          </button>
        ) : null}
      </form>
    </>
  );
}
