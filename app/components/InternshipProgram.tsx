import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const documents = [
  {
    title: "Internship Application Form",
    link: "https://iiitn.ac.in/Downloads/internship/newformat2025/1_Application_Form_for_Internship_Program.pdf",
  },
  {
    title: "Internship Joining Application",
    link: "https://iiitn.ac.in/Downloads/internship/newformat2025/2_Internship_Joining_Application.pdf",
  },
  {
    title: "Internship Report Submission Guideline",
    link: "https://iiitn.ac.in/Downloads/internship/newformat2025/3_Internship_Report_Submission_Guidelines.docx",
  },
  {
    title: "Internship Evaluation Form",
    link: "https://iiitn.ac.in/Downloads/internship/newformat2025/4_Internship_Evaluation_Form.pdf",
  },
];

export default function InternshipProgram() {
    return (
      <section id="internship" className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Internship Program</h2>
        <br />
        <a className="text-blue-600 underline" href="./internship_data.pdf">Click here to open PDF</a>
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-left ml-6">Internship Documents</h2>
      <div className="space-y-2">
        {documents.map((doc, index) => (
          <Card key={index}>
            <CardContent className="flex justify-between items-center p-4">
              <span className="text-lg font-medium">{doc.title}</span>
              <Button asChild>
                <a href={doc.link} target="_blank" rel="noopener noreferrer">
                  Download
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      </section>
    );
  }