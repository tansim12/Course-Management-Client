import SearchCourses from "../../Components/Search by Course/SearchCourses";

const Home = () => {
  return (
    <div className="">
      {/* banner section  */}
      <div className="h-[50vh]">Banner</div>

      {/* search courses section  */}
      <div>
        <SearchCourses />
      </div>
    </div>
  );
};

export default Home;
