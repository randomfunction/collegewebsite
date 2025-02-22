'use client';

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Link from "next/link";

const events = [
  {
    name: "National Online Webinar on Cyber Security and Youth",
    date: "9th April, 2021",
    report: "/Downloads/report/Report on Cyber Security Webinar.pdf",
    coordinator: {
      name: "Dr. Kirti Dorshetwar",
      link: "https://iiitn.ac.in//profile.php?alias=basic-sciences&id=28",
    },
  },
  {
    name: "400th Birth Anniversary Year of Guru Tegh Bahadur",
    date: "1st April, 2021",
    report: "/Downloads/report/Martyrs Day.pdf",
    coordinator: {
      name: "Dr. Vipin Kamble",
      link: "https://iiitn.ac.in//profile.php?alias=electronics-&communication-engg&id=43",
    },
  },
  {
    name: "Elimination of Single Use Plastic",
    date: "19th April, 2021",
    report: "/Downloads/report/Elimination of Single Use Plastic.pdf",
    coordinator: {
      name: "Dr. Vipin Kamble",
      link: "https://iiitn.ac.in//profile.php?alias=electronics-&communication-engg&id=43",
    },
  },
  {
    name: "Building an Innovation/ product fit for market",
    date: "14th June, 2021",
    report: "/Downloads/report/Session on Innovation Product fit for Market.pdf",
    coordinator: {
      name: "Dr. Vipin Kamble",
      link: "https://iiitn.ac.in//profile.php?alias=electronics-&communication-engg&id=43",
    },
  },
];

export default function Reports() {
  return (
    <Card>
      <CardHeader className="bg-slate-800 text-white text-lg font-bold p-4">Events</CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Event Name</TableHead>
              <TableHead className="text-center">Date</TableHead>
              <TableHead className="text-center">Report</TableHead>
              <TableHead className="text-center">Coordinated By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell className="text-center font-medium">{event.name}</TableCell>
                <TableCell className="text-center">{event.date}</TableCell>
                <TableCell className="text-center">
                  <Link href={event.report} target="_blank" className="text-blue-600 hover:underline">
                    Click Here
                  </Link>
                </TableCell>
                <TableCell className="text-center">
                  <Link href={event.coordinator.link} target="_blank" className="text-blue-600 hover:underline">
                    {event.coordinator.name}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
