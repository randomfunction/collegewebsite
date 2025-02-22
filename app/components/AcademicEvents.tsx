"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Award } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const AcademicEvents = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const ongoingEvents = [
    {
      title: "Foundations of Cybersecurity",
      date: "March 25 - September 25, 2025",
      department: "Computer Science and Engineering",
      contact: "Dr. Shishupal Kumar",
      type: "Certificate Programme",
      eventBrochure:
        "https://iiitn.ac.in/images/workshop/2025/QC-JFDP-Feb-2025.pdf",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSct23IH1il3WThflm4TctGN9IMfwmX99Jc1_BEEoteq1Xxdaw/viewform",
    },
    {
      title: "Biometrics Security in the Generative AI Era",
      date: "March 1 - March 12, 2025",
      department: "Computer Science and Engineering",
      contact: "Dr. Nishat Ansari, Dr. Milind Penurkar",
      type: "Faculty Development Programme",
      eventBrochure:
      "https://iiitn.ac.in/images/workshop/2025/IIITN_FDP_Biometrics%20Security%20in%20the%20Generative%20AI%20Era.pdf",
    registrationLink:
      "https://forms.gle/5zfKC5N8gjrp7Nsc9",
    },
    {
      title: "Intricacies of Analog & Mixed Signal design",
      date: "17th Feb to 28th Feb 2025",
      department: "Electronics & Communication Engineering Department",
      contact: "Dr. Paritosh Pashwe and Dr. Parul Sahare",
      type: "Faculty Development Programme",
      eventBrochure:
      "https://iiitn.ac.in/images/workshop/2025/IIITN_FDP_Biometrics%20Security%20in%20the%20Generative%20AI%20Era.pdf",
    registrationLink:
      "https://forms.gle/5zfKC5N8gjrp7Nsc9",
    },
    {
      title: "Quantum Computing",
      date: "17th Feb to 28th Feb 2025",
      department: "Computer Science and Engineering",
      contact: "Dr. Jitendra Tembhurne and Dr. Tausif Diwan",
      type: "Faculty Development Programme",
      eventBrochure:
      "https://iiitn.ac.in/images/workshop/2025/QC-JFDP-Feb-2025.pdf",
    registrationLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSct23IH1il3WThflm4TctGN9IMfwmX99Jc1_BEEoteq1Xxdaw/viewform",
    },
  ];

  const pastEvents = [
    {
      title: "PYTHON: BASIC & ADVANCE",
      date: "January 15, 2024",
      organizer: "Dr. Khushboo Jain",
      type: "Certification Course",
    },
    {
      title: "Quantum Computing Innovations and Its Applications",
      date: "December 18-22, 2023",
      organizer: "Dr. Jitendra Tembhurne & Dr. Aatish Daryapurkar",
      type: "Faculty Development Program",
    },
    {
      title: "Competitive Programming for Problem Solving (CPPS - 2023)",
      date: "December 11-15, 2023",
      organizer: "Dr. Jitendra Tembhurne & Dr. Tausif Diwan",
      type: "Winter Training Program",
    },
    {
      title: "Integrating Excel and Python for Advanced Technical Analysis of Stock Market Data",
      date: "October 16-20, 2023",
      organizer: "Dr. Jagdish Chakole",
      type: "Online Workshop",
    },
    {
      title: "Basics of Python",
      date: "July 24-28, 2023",
      organizer: "Dr. Pooja Jain",
      type: "Online Workshop",
    },
    {
      title: "Internet of Things (IoT) – A Prototype Designing using Embedded Development Boards",
      date: "May 9-11, 2023",
      organizer: "Dr. Rashmi Pandhare & Dr. Mayuri Digalwar",
      type: "Workshop",
    },
    {
      title: "Ansys for High Frequency Electromagnetics, 5G and related Innovative Technologies",
      date: "April 20-21, 2023",
      organizer: "Dr. Girish Ghivela & Dr. Shankar Bhattacharjee",
      type: "Online Workshop",
    },
    {
      title: "Blockchain Technology",
      date: "March 13-17, 2023",
      organizer: "Dr. Vrinda Yadav",
      type: "Workshop",
    },
    {
      title: "Gender Discrimination and Equality Promotion at Workplace",
      date: "September 19-23, 2022",
      organizer: "Dr. Kirti Dorshetwar",
      type: "Short Term Training Program",
    },
    {
      title: "Celebrating Women in Mathematics",
      date: "May 31 - June 01, 2022",
      organizer: "Dr. Charu Goel",
      type: "Event",
    },
    {
      title: "National Education Policy NEP Online Webinar Series",
      date: "March 2022",
      organizer: "Dr. Jitendra V Tembhurne, Dr. Rashami Pandhare, Mr. Vishesh Gaikwad, Mr. Gourav Malode",
      type: "Webinar Series",
    },
    {
      title: "Fundamentals of Deep Learning: Dive into Deep Learning",
      date: "March 14-22, 2022",
      organizer: "Dr. Jitendra V Tembhurne & Dr. Tausif Diwan",
      type: "Short Term Training Program",
    },
    {
      title: "Machine Learning and Its Application",
      date: "March 7-12, 2022",
      organizer: "Dr. Pooja Jain",
      type: "Short Term Training Program",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      date: "December 9-13, 2019",
      organizer: "Dr. Pooja Jain",
      type: "Workshop",
    },
    {
      title: "Internet of Things",
      date: "December 16-20, 2019",
      organizer: "Dr. Tapan Kumar Jain",
      type: "Workshop",
    },
    {
      title: "Machine Learning for IIIT Nagpur Students",
      date: "March 16-17, 2019",
      organizer: "Department of Computer Science & Engineering",
      type: "Workshop",
    },
  ];


  return (
    <div className="py-12 px-6 pb-10 bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen  text-blue-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-2">Academic Events</h1>
        <p className="text-blue-100 mb-10">Conferences, Workshops, and Certifications</p>
      </motion.div>

      <Tabs defaultValue="ongoing" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ongoing">Ongoing Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="ongoing">
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence>
              {ongoingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant="secondary">{event.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm text-gray-600">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span className="text-sm text-gray-600">{event.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span className="text-sm text-gray-600">Contact: {event.contact}</span>
                        </div>
                        {event.eventBrochure && (
                          <div className="flex items-center gap-2">
                            <a
                              href={event.eventBrochure}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-blue-500 underline"
                            >
                              Event Brochure
                            </a>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </TabsContent>

        <TabsContent value="past">
          <div className="grid gap-6 md:grid-cols-2">
            <AnimatePresence>
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm text-gray-600">{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4" />
                          <span className="text-sm text-gray-600">Organizer: {event.organizer}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AcademicEvents;
