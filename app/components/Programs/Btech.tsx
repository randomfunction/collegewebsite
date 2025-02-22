import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BTechCourses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-purple-900 text-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-500">
          B.Tech Programs
        </h1>

        {/* CSE Department */}
        <Card className="mb-8 bg-purple-/40 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-400">
              Department of Computer Science & Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="cse" className="border-gray-800">
                <AccordionTrigger className="text-lg text-gray-300">
                  B.Tech. Computer Science & Engineering
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Bachelor of Technology in Computer Science & Engineering is
                  provided at IIIT Nagpur, computer science students follow an
                  integrated curriculum that includes topics such as programming
                  languages, computer architecture, operating systems, and
                  theoretical foundation of computer science and mathematics.
                  Artificial intelligence, natural language processing,
                  computational complexity and algorithm analysis, computer
                  communications, combinatorial methods, databases,
                  optimization, and soft skills, etc. are among the courses
                  covered in upper-level of curriculum. Students get the
                  flexibility in a fast changing area as a result of this
                  integrated approach; they are prepared to engage in both
                  applied and theoretical breakthroughs in computer science.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="aiml" className="border-gray-800">
                <AccordionTrigger className="text-lg text-gray-300">
                  B.Tech. CSE (Artificial Intelligence & Machine Learning)
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  A Bachelor of Technology in Computer Science Engineering
                  (Artificial Intelligence & Machine Learning) is one of the
                  most prestigious degrees available in this decade. The goal of
                  the course is to build a solid foundation by using the ideas
                  and technology of Artificial Intelligence, which include
                  logic, knowledge representation, probabilistic models, and
                  machine learning.
                  <br />
                  <br />
                  While artificial intelligence aims to simulate human intellect
                  and behaviour, machine learning is a subset of AI that allows
                  a computer system to make predictions or make judgments based
                  on previous data without having to be explicitly programmed.
                  <br />
                  <br />
                  Students will learn how to analyse, create, and build
                  knowledge-based and expert systems, as well as Artificial Life
                  and robots, and systems that employ neural networks.
                  <br />
                  <br />
                  According to study, roughly 30% of all B2B organisations will
                  use artificial intelligence to improve at least one of their
                  sales processes. This shines light on a critical facet of this
                  field: the market's job requirement. In relative to other
                  traditional engineering professions, a B. Tech. in the subject
                  should yield substantially larger returns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dsa" className="border-gray-800">
                <AccordionTrigger className="text-lg text-gray-300">
                  B.Tech. CSE (Data Science & Analytics)
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  This curriculum is aimed to teach students the fundamentals of
                  computer science and data analytics. It also teaches
                  problem-solving and engineering abilities via the use of
                  computational approaches. Students will get the chance to
                  study ideas, tools, and approaches for modelling, analysing,
                  and discovering usable information for a variety of real-world
                  challenges. They are also urged to provide solutions that use
                  appropriate data visualisation approaches to aid
                  decision-making. Students will gain programming, statistical,
                  mathematical reasoning, machine learning, knowledge finding,
                  communication, and visualisation abilities as a result of this
                  curriculum.To fulfil its goal, the department has highly
                  skilled faculty, outstanding laboratories, and learning
                  materials. The programmes are tailored to meet the industry's
                  ever-changing needs and demands. The emphasis is on
                  comprehensive learning and motivating students to participate
                  meaningfully at all levels.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hci" className="border-gray-800">
                <AccordionTrigger className="text-lg text-gray-300">
                  B.Tech. CSE (Human Computer Interaction & Gaming Technology)
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Human-Computer Interaction (HCI) is a multidimensional subject
                  of study that focuses on the design of computer technology,
                  specifically the interaction and interface between humans
                  (users) and devices and systems that include or embed
                  computing. HCI researches how people use technology artefacts
                  as well as how those artefacts may be made to make them easier
                  to use. To better understand and enhance the design,
                  implementation, application, analysis, and assessment of
                  interactive systems, computer scientists engage with
                  specialists in engineering, psychology, linguistics, and
                  social and system organisation in HCI research.
                  <br />
                  <br />
                  Computer games have progressed beyond their roots as
                  amusement. Educational games, therapeutic games, simulation
                  games, and gamification of utilitarian applications have all
                  been used by researchers and practitioners in novel ways.
                  Individuals and society gain from gaming researchers producing
                  games and using gaming ideas. In the study of games,
                  human-computer interaction (HCI) is crucial. HCI specialists
                  aid in the design and development of better games by
                  evaluating user characteristics, interactions during gaming,
                  and behavioural consequences of gameplay.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* ECE Department */}
        <Card className="mb-8 bg-purple-/40 border-gray-800">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-400">
              Department of Electronics & Communication Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="ece" className="border-gray-800">
                <AccordionTrigger className="text-lg text-gray-300">
                  B.Tech. Electronics & Communication Engineering
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Department of Electronics and Communication offers a Bachelor
                  of Technology in Electronics and Communication Engineering.
                  Spherical development of students is achieved by exposing them
                  to the latest curriculum that includes flavors of Embedded
                  systems, Internet of Things, Communication technologies,
                  Control systems, Image and Computer Vision, CMOS design,
                  Machine learning, Artificial Intelligence, etc. We always try
                  to cope with the rapidly changing technologies by updating our
                  curriculum every semester. We conduct rigorous lab sessions
                  and projects to strengthen concepts and provide hands-on
                  experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="iot" className="border-gray-800">
                <AccordionTrigger className="text-lg text-gray-300">
                  B.Tech. ECE (Internet of Things)
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Internet of Things (IoT) applications enormously increased in
                  the past few years since it has a vast scope of usage. IoT in
                  general refers to a network of internet-connected devices that
                  find various applications in engineering and day to day life.
                  When objects are interconnected across the world, it allows
                  people or things using those objects to be connected anytime.
                  As an example, from urban transport to medical devices, home
                  electronics and appliances to cars, heart monitoring implants
                  and many more, all connected things ease human life.
                  <br />
                  <br />
                  B.Tech course in ECE (Internet of Things (IoT)) aims to equip
                  students with a solid theoretical foundation, systematic
                  professional knowledge and strong practical skills in the IoT
                  field. Through this program, the students shall have a
                  thorough knowledge of electronic engineering, computer science
                  and a firm foundation into wireless communication, and
                  computer networks. Moreover, deep knowledge on IoT devices,
                  systems and networks is also included. The students will
                  develop strong skills in sensors & instrumentation,
                  chip-design, and privacy & security of IoT.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BTechCourses;
