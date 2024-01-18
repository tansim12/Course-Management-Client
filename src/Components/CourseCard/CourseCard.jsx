const CourseCard = () => {
  return (
    <div>
      <div className="p-4 shadow-lg w-full md:max-w-[350px] font-sans rounded-xl space-y-6 my-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <svg
              className="hover:fill-red-500 fill-[#c5c5C7] "
              width={20}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ cursor: "pointer" }}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path>
              </g>
            </svg>
            <span className="text-[#c5c5c7]">999+</span>
          </div>
          <button className="bg-orange-600 text-white px-2 py-1 rounded-xl">
            30% off
          </button>
        </div>
        <div className="flex justify-center w-full h-48 lg:h-[280px]">
          <img
            className="rounded-lg bg-black/40 w-full h-full hover:scale-105 hover:transition-all"
            src="https://source.unsplash.com/300x300/?smartwatch"
            alt="img"
          />
        </div>
        <div className=" w-[85%] mx-auto font-semibold space-y-2">
          <h6>Waterproof Sport Smart Watch Monitor for IOS & Android</h6>
          <h6>status</h6>
          <h6>8 weeks</h6>
          <h6>Online</h6>
          <p className="text-gray-400 text-sm font-semibold">Cours Name</p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="px-4 py-2 rounded-lg bg-[#03CC9C] text-white font-semibold font-sans">
            Enrol
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
