import { useState } from "react";

export function Replay({ replay, replays, setReplays }) {
  const [isEditing, setIsEditing] = useState(false);

  function onChangeReplay(preReplay) {
    setReplays(
      replays.map((r) => {
        if (r.id === preReplay.id) {
          return preReplay;
        } else return r;
      })
    );
  }

  function handleDeleteReplay(id) {
    setReplays(replays.filter((el) => el.id !== id));
  }

  let replayContent;

  isEditing
    ? (replayContent = (
        <input
          className="flex-1 p-2 mt-2 w-full rounded-lg sidebar
          bg-gray-300
          focus:outline-none"
          value={replay.replay}
          onChange={(e) => {
            onChangeReplay({
              ...replay,
              replay: e.target.value,
            });
          }}
        />
      ))
    : (replayContent = <span className="form-replay">{replay.replay}</span>);

  return (
    <div
      className="max-w-md p-4 rounded-xl my-4 shadow-lg bg-gray-50 flex justify-between items-start text-black"
      key={replay.id}
    >
      <div className="flex space-x-4 ">
        <img
          className="rounded-full h-10"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
          alt="img"
        />

        <div className="">
          <div className=" ">
            <h4 className="text-lg font-bold ">Name</h4>
          </div>
          <span className="text-[10px] ">{replay.date}</span>
          <div className="mt-2">{replayContent}</div>
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <i className="fa-solid fa-check"></i>
          ) : (
            <i className="fa-solid fa-pen-to-square"></i>
          )}
        </button>
        <button onClick={() => handleDeleteReplay(replay.id)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
    </div>
  );
}
