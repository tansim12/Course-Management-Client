import { Container } from "@mui/material";
import CourseCard from "../CourseCard/CourseCard";

const SearchCourses = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        
      </div>
    </Container>
  );
};

export default SearchCourses;
