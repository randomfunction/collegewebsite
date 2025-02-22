import BTechCourses from "./Btech";
import Curriculum from "./Curriculum";
import Reports from "./Reports";
import PhdCourses from "./phD";

export default function Programs() {
    return (
        <div>
             <BTechCourses />
            <PhdCourses />
           <Curriculum/>
           <Reports/>
        </div>
       
    );
}
