import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';

const Phdresearch = () => {
  const cseAreas = [
    "Machine Learning",
    "Artificial Intelligence",
    "Big Data Analytics",
    "Natural Language Processing",
    "RTOS and Embedded Systems",
    "High Performance Computing",
    "Bio-informatics",
    "Parallel Computing",
    "Distributed Computing"
  ];

  const eceAreas = [
    "Communication, Wireless Sensor Network, and IoT",
    "Microwave and Antennas",
    "Signal, Image & Video Processing",
    "Process Control system",
    "Intelligent Systems"
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Research Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="cse" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cse">Computer Science Engineering</TabsTrigger>
              <TabsTrigger value="ece">Electronics & Communication</TabsTrigger>
            </TabsList>
            
            <TabsContent value="cse">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Computer Science and Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full pr-4">
                    <div className="grid gap-4">
                      {cseAreas.map((area, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ece">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Electronics and Communication Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-[400px] w-full pr-4">
                    <div className="grid gap-4">
                      {eceAreas.map((area, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Phdresearch;