import BannerWithShar from "../../Components/Banner And Headding/BannerWithShar";

const AllCourses = () => {
  return (
    <div>
      {/* banner  */}
      <div>
        <BannerWithShar
          image={
            "https://i.ibb.co/BcCcKLH/online-tutorials-concept-52683-37480.jpg"
          }
          title={"Infinite Learning, One Platform."}
          subTitle={
            "Explore a world of courses designed to shape your skills and fuel your passion for learning"
          }
        />
      </div>
    </div>
  );
};

export default AllCourses;
