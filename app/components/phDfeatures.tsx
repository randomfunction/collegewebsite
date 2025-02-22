import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Phdfeatures = () => {
  const gradeTable = [
    { range: '81-100', grade: 'AA' },
    { range: '71-80', grade: 'AB' },
    { range: '61-70', grade: 'BB' },
    { range: '56-60', grade: 'BC' },
    { range: '51-55', grade: 'CC' },
    { range: '46-50', grade: 'CD' },
    { range: '40-45', grade: 'DD' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Doctoral Programme Features</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="coursework">
              <AccordionTrigger className="text-xl font-semibold">Course Work</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <p className="text-lg">
                  All registered Ph.D students need to complete coursework requirements:
                  <span className="font-bold"> 6 credits </span>
                  for M.Tech degree holders and
                  <span className="font-bold"> 12 credits </span>
                  for B.Tech degree holders in either mode:
                </p>
                <div className="ml-6">
                  <p>1. Courses offered by the institute</p>
                  <p>2. Credits through online courses (MOOC platforms like NPTEL/MIT-OCW/Coursera/edX)</p>
                  <p className="font-semibold">Minimum course hours for online: 40</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="assessment">
              <AccordionTrigger className="text-xl font-semibold">Assessment Mechanics for Online/MOOC Courses</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">1. Course Accomplishment (25% weightage)</h3>
                    <p>Candidate must successfully complete the registered online course as per evaluation criteria.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold">2. Institute-level Assessment (75% weightage)</h3>
                    <p>Additional 100 Marks institute level assessment conducted and evaluated by supervisor/course instructor.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">3. Final Score Calculation</h3>
                    <p>Final Score = 0.25 (Online assessment score) + 0.75 (Institute-level assessment score)</p>
                  </div>

                  <div>
                    <h3 className="font-semibold">4. Gradation</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-center">Range of marks obtained</TableHead>
                          <TableHead className="text-center">Grade</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {gradeTable.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell className="text-center">{row.range}</TableCell>
                            <TableCell className="text-center">{row.grade}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="seminars">
              <AccordionTrigger className="text-xl font-semibold">Progress Seminars</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-2">
                  <p>1. Scholars must give progress seminars every six months in their department.</p>
                  <p>2. Submit a brief write-up outlining previous work, current status, and future plans to RPC members.</p>
                  <p>3. Must earn satisfactory remarks from RPC. Two consecutive unsatisfactory remarks may lead to registration cancellation if explanation is unsatisfactory.</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Phdfeatures;