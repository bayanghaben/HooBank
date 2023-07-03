import { quotes } from "../assets";
import { Replays } from "./Replys";
export function Post({ title, content, date, handleDeletePost, id }) {
  return (
    <div
      className="flex justify-between flex-col px-6 py-12 rounded-[20px]  break-words
    w-[370px] md:mr-10 sm:mr-5 mr-0 my-5  sidebar form-container"
    >
      <div className="flex justify-between">
        <img
          src={quotes}
          alt="double_quotes"
          className="w-[42.6px] h-[27.6px] object-contain"
        />
        <button onClick={() => handleDeletePost(id)}>
          <i className="fa-solid fa-trash text-red-600"></i>
        </button>
      </div>

      <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img
          src="https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          alt=""
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {title}
          </h4>
          <p className="font-poppins  font-normal text-[10px] leading-[24px] text-dimWhite">
            {date}
          </p>
        </div>
      </div>
      <Replays />
    </div>
  );
}
