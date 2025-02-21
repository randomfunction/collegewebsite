import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

export default function Recruiters() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Why Recruit from IIITN Nagpur?</h1>
      
      <Accordion>
        <AccordionItem title="Admission">
          <Card>
            <CardHeader className="bg-primary text-white text-left">
              <CardTitle>Admission</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Established by MHRD, Govt of Maharashtra, and Industry partners.</li>
                <li>Declared as Institution of National Importance by Act of Parliament.</li>
                <li>Admissions happen through JoSAA. Only top 2% candidates taking JEE Mains Exam make it to IIITN.</li>
              </ul>
            </CardContent>
          </Card>
        </AccordionItem>

        <AccordionItem title="Industry Academia Collaboration">
          <Card>
            <CardHeader className="bg-primary text-white text-left">
              <CardTitle>Industry Academia Collaboration</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Tie-up with Tata Consultancy Services Ltd as Industry Partner.</li>
                <li>MoU with ESIEE Paris for exchange programmes.</li>
              </ul>
            </CardContent>
          </Card>
        </AccordionItem>

        <AccordionItem title="Curriculum">
          <Card>
            <CardHeader className="bg-primary text-white text-left">
              <CardTitle>Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6">
                <li>Industry-relevant dynamic curriculum designed by Board of Studies.</li>
                <li>Core subjects start from the 1st semester.</li>
                <li>Choice Based Credit System.</li>
                <li>Option to pursue credit-based Online Certification Courses.</li>
                <li>Mandatory industry internship for final year B.Tech.</li>
              </ul>
            </CardContent>
          </Card>
        </AccordionItem>

        <AccordionItem title="Research Environment">
          <Card>
            <CardHeader className="bg-primary text-white text-left">
              <CardTitle>Research Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Research focuses on industry-related problems. Collaboration opportunities available.</p>
              <h3 className="text-lg font-semibold mt-4">Research Areas:</h3>
              <ul className="list-disc pl-6">
                <li>Deep Learning, Machine Learning, IoT, High Performance Computing</li>
                <li>Signal Processing, Biomedical Signal Processing, Wireless Communication</li>
                <li>Nanoscience, Applied Mathematics, Real Algebraic Geometry</li>
              </ul>
            </CardContent>
          </Card>
        </AccordionItem>

        <AccordionItem title="Clubs & Communities">
          <Card>
            <CardHeader className="bg-primary text-white text-left">
              <CardTitle>Clubs & Communities</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-lg font-semibold">Technical:</h3>
              <ul className="list-disc pl-6">
                <li>Ack-Z - Ethical hacking club</li>
                <li>DotSlash - Programming Community</li>
                <li>Machine Learning Group, Competitive Programming Group</li>
              </ul>
              <h3 className="text-lg font-semibold mt-4">Cultural:</h3>
              <ul className="list-disc pl-6">
                <li>Music Club, Dance Club, Art Club</li>
              </ul>
            </CardContent>
          </Card>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
