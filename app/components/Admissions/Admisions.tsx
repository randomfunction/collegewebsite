import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Admissions() {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-blue-100 mb-10">
          Admissions & Academic Info
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Undergraduate B.Tech Admissions */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Undergraduate B.Tech</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">B.Tech Admissions (CSE/ECE) 2024-25:</p>
              <Button variant="link" asChild>
                <Link href="https://iiitn.ac.in/admission_new.php" target="_blank">
                  Visit Admission Page <ExternalLink className="ml-1 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* PhD Admissions */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Postgraduate (PhD)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700 font-semibold">PhD Admissions Winter 2024-2025:</p>
              <ul className="mt-4 space-y-3">
                {[
                  {
                    href: "https://iiitn.ac.in/Downloads/phd/AdmissionW24-II/Schedule%20for%20Written%20Test%20and%20Interview%20for%20PhD%20Admission%20VS%20FULL%20TIME%20FEB%202025.pdf",
                    text: "Schedule for Written Test & Interview",
                  },
                  {
                    href: "https://iiitn.ac.in/Downloads/phd/AdmissionW24-II/PhD%20VS%20FT%20FEB%202025%20SHORLISTED%20FOR%20WT%20CSE%20ECE%20UPLOAD%20COPY.pdf",
                    text: "Provisionally Shortlisted Candidates",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <ExternalLink className="w-5 h-5 text-blue-600 mr-2" />
                    <Link href={item.href} target="_blank" className="text-blue-600 hover:underline">
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* UG Academic Rule Book */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">UG Academic Rule Book</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">Academic rule book for B.Tech (CSE & ECE):</p>
              <Button variant="outline" asChild className="mt-3">
                <Link href="/Downloads/AcademicRuleBook/Academic%20Rule%20Book_B.Tech_2024-25%20Onwards.pdf" target="_blank">
                  Download B.Tech Rule Book <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* PG Academic Rule Book */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">PG Academic Rule Book</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-700">Academic rule book for PhD (CSE & ECE):</p>
              <Button variant="outline" asChild className="mt-3">
                <Link href="/Downloads/phd/PhD_Rule_Book-1.pdf" target="_blank">
                  Download PhD Rule Book <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
