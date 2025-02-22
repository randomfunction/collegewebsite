import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Phdfeatures from "./phDfeatures"
import Phdoperations from "./phDoperations"
import Phdresearch from "./phDresearch"
import PhDProgramOverview from "./phdoverview"

const PhdCourses = () => {
  return (

    <div className="min-h-screen bg-gradient-to-b from-black to-red-900 text-gray-100 p-6">
        <PhDProgramOverview/>
            <Phdfeatures/>
            <Phdresearch/>
            <Phdoperations/>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-red-400">PhD Programs</h1>

        <Card className="mb-8 bg-red-900/40 border border-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-red-300">
              Institute offers a Ph.D. degree program in:
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" className="space-y-4">
              <AccordionItem value="cse" className="border border-gray-800 rounded-lg">
                {/* <AccordionTrigger className="text-lg text-red-200 hover:text-red-400">
                  Computer Science & Electronics Research Areas
                </AccordionTrigger> */}
                <AccordionContent className="text-gray-300 space-y-4">
                  <p>
                    <strong>Ph.D. Coordinators:</strong>
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <strong>CSE Department:</strong> Dr. Mayuri Digalwar  
                      <br />
                      Assistant Professor, CSE, IIIT Nagpur  
                      <br />
                      <span className="text-red-400">Email:</span> mayuri@iiitn.ac.in
                    </li>
                    <li>
                      <strong>ECE Department:</strong> Dr. Rashmi Pandhare  
                      <br />
                      Assistant Professor, ECE, IIIT Nagpur  
                      <br />
                      <span className="text-red-400">Email:</span> rpandhare@iiitn.ac.in
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PhdCourses;
