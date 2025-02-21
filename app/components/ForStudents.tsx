import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle, CardContent } from "@/components/ui/card";
import { div } from "framer-motion/client";


export function ForStudents() {
  const documents = [
    {
      category: 'ID Proof',
      details: 'Aadhaar Card (mandatory) / PAN Card / Driving License / Voter ID card',
    },
    {
      category: 'Address Proof',
      details: 'Electricity bill / Bank Passbook / Aadhar card / Rent agreement (Any One)',
    },
    {
      category: 'Self Attested Marksheets',
      details: '10th Std, 12th Std and all B.Tech Semesters and Transcript',
    },
    {
      category: 'Additional Documents',
      details: 'Course certificates / internship certificates, 10 Passport Photos (White Background), Updated CV (2 Copies)',
    },
  ];
 
  return (
    <div>
      <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Required Documents for Students</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full border-collapse border border-gray-300 text-left text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Document Type</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 font-medium">{doc.category}</td>
                <td className="border border-gray-300 px-4 py-2">{doc.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-6 space-y-4">
          <Button variant="link" asChild>
            <a className="text-blue-600" href="https://iiitn.ac.in/page/for-students/46/images/tnp/CV-format.docx">📄 CV Format (Click Here)</a>
          </Button>
          <Button variant="link" asChild>
            <a className="text-blue-600" href="https://iiitn.ac.in/Downloads/tnp/Placement%20Policy-2021-22.pdf">📜 Placement Policy (Click Here)</a>
          </Button>
          <Button variant="link" asChild>
            <a className="text-blue-600" href="https://iiitn.ac.in/Downloads/tnp/SEMESTER%20INTERNSHIP%20GUIDELINES%20-%20BATCH%202021_2.pdf">📘 Internship Instructions & Evaluation Guidelines (Click Here)</a>
          </Button>
          <Button variant="link" asChild>
            <a className="text-blue-600" href="https://iiitn.ac.in/Downloads/tnp/SEMESTER%20INTERNSHIP%20EVALUATION%20-%20BATCH%202021.pdf">📕 Semester Internship Evaluation Guidelines (Click Here)</a>
          </Button>
        </div>
      </CardContent>

    </Card>
    </div>
    );
  }