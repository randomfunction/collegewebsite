import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const curriculumData = [
  {
    year: "2021",
    sections: [
      { title: "Scheme & Syllabus CSE", link: "https://iiitn.ac.in/Downloads/academic/2025/BTech-CSE-Scheme-1.pdf" },
    ],
  },
  {
    year: "2022",
    sections: [
      { title: "Scheme & Syllabus DSA", link: "https://iiitn.ac.in/Downloads/academic/2025/BTech-CSE-AIML-Scheme-2.pdf" },
      { title: "Scheme & Syllabus AIML", link: "https://iiitn.ac.in/Downloads/academic/2025/BTech-CSE-DSA-Scheme-2.pdf" },
      { title: "Scheme & Syllabus HCIG", link: "https://iiitn.ac.in/Downloads/academic/2025/BTech-CSE-HCIGT-Scheme-2.pdf" },
    ],
  },
  {
    year: "PhD Curriculum",
    sections: [
      { title: "PhD Rule Book", link: "https://iiitn.ac.in/Downloads/academic/phd/PhD%20Rule%20Book.pdf" },
    ],
  },
];

export default function Curriculum() {
  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <Tabs defaultValue="2021" className="w-full">
        <TabsList className="grid grid-cols-3">
          {curriculumData.map(({ year }) => (
            <TabsTrigger key={year} value={year}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>
        {curriculumData.map(({ year, sections }) => (
          <TabsContent key={year} value={year}>
            <div className="space-y-4">
              {sections.map(({ title, link }) => (
                <Card key={title}>
                  <CardContent className="p-4">
                    <Link href={link} target="_blank" className="text-blue-600 hover:underline">
                      {title}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
