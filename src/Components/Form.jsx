export function Form({ title, content, setContent, setTitle, handleAdd }) {
  return (
    <form className="container  ">
      <div className="flex flex-1 mx-auto sm:mx-0 flex-col container max-w-md p-6 rounded-xl m-4 shadow-lg form-container">
        <div>
          <input
            className="flex-1 px-6 pt-3 pb-2 mb-6 w-full rounded-lg 
            bg-gray-300
            focus:outline-none"
            type="text"
            placeholder="Enter your name..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className=" px-6 pt-3 pb-2 w-full h-48 mb-4 rounded-lg border-1 border-white 
            bg-gray-300  focus:outline-none md:mr-3 md:mb-0 "
            placeholder="Enter your review here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div
          className="py-2 rounded-[10px] px-6 bg-blue-gradient font-poppins font-medium text-primary text-center mt-2 outline-none text-[18px] "
          onClick={handleAdd}
        >
          Add Review
        </div>
      </div>
    </form>
  );
}
