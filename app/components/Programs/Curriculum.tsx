import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const data = {
  Curriculum: [
    {
      year: "Core",
      sections: [
        { title: "Scheme & Syllabus CSE", link: "./BTech-CSE-Scheme-1.pdf" },
        { title: "Scheme & Syllabus ECE", link: "./ECE_Scheme_Batch_2023_Onwards.pdf" },
      ],
    },
    {
      year: "Specialization",
      sections: [
        { title: "Scheme & Syllabus DSA", link: "./BTech-CSE-DSA-Scheme-2.pdf" },
        { title: "Scheme & Syllabus AIML", link: "./BTech-CSE-AIML-Scheme-2.pdf" },
        { title: "Scheme & Syllabus HCIG", link: "./BTech-CSE-HCIGT-Scheme-2.pdf" },
        { title: "Scheme & Syllabus IOT", link: "./ECE_IoT_Scheme_Batch_2023_onwards.pdf" },
      ],
    },
    {
      year: "PhD Curriculum",
      sections: [{ title: "PhD Rule Book", link: "./PhD_Rule_Book.pdf" }],
    },
  ],
  Syllabus: [
    {
      year: "Core",
      sections: [
        { title: "Syllabus CSE", link: "./BTech-CSE-Syllabus-1.pdf" },
        { title: "Syllabus ECE", link: "./ECE_Scheme_and_Syllabus_2023_onwards.pdf" },
      ],
    },
    {
      year: "Specialization",
      sections: [
        { title: "Syllabus DSA", link: "./BTech-CSE-DSA-Syllabus-1.pdf" },
        { title: "Syllabus AIML", link: "./BTech-CSE-AIML-Syllabus-1.pdf" },
        { title: "Syllabus HCIG", link: "./BTech-CSE-HCIGT-Syllabus-1.pdf" },
        { title: "Syllabus IOT", link: "./ECE_IoT_Scheme_and_Syllabus_2023_onwards.pdf" },
      ],
    },
  ],
};

export default function Curriculum() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Tabs defaultValue="Curriculum" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          {Object.keys(data).map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(data).map(([category, sections]) => (
          <TabsContent key={category} value={category}>
            <Tabs defaultValue="Core">
              <TabsList className="grid grid-cols-3 mb-4">
                {sections.map(({ year }) => (
                  <TabsTrigger key={year} value={year}>
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {sections.map(({ year, sections }) => (
                <TabsContent key={year} value={year}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sections.map(({ title, link }) => (
                      <Card key={title}>
                        <CardContent className="p-4">
                          <Link href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {title}
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
