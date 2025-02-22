import BTechCourses from "./Programs/Btech";
import Curriculum from "./Programs/Curriculum";
import Reports from "./Programs/Reports";
import PhdCourses from "./Programs/phD";

export default function Programs() {
  return (
    <div>
      <BTechCourses />
      <PhdCourses />
      <Curriculum />
      <Reports />
    </div>
  );
}
