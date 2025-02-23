import AcademicEvents from "./components/AcademicEvents";
import Admissions from "./components/Admissions/Admisions";
import ContactAdmission from "./components/Admissions/Contact";
import Fees from "./components/Admissions/Fees";
import Formats from "./components/Admissions/Format";
import GuestHouseInfo from "./components/Admissions/GuestHouse";
import Loan from "./components/Admissions/LoanSchemes";
import PastYear from "./components/Admissions/PastYearCutoff";
import RuleBook from "./components/Admissions/RuleBook";
import ScholarshipsPage from "./components/Admissions/Scholarship";
import Placement from "./components/Placement";
import Programs from "./components/Programs";


export default function Home() {
  return (
    <div> 
       {/* <Placement/>  */}
      {/* <Admissions/> */}
      {/* <Formats/> */}
      {/* <Programs/> */}
      {/* <AcademicEvents/> */}
      <Programs/> 
      {/* <Doctoral/> */}
      {/* <Fees/>
      <RuleBook/>
      <PastYear/>
      <Loan/>
      <ScholarshipsPage/>
      <GuestHouseInfo/>
      <ContactAdmission/> */}
    </div>
  );
}

