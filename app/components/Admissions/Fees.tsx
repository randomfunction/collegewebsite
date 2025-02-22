import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const feesData = {
  tuition: 198000,
  others: [
    { name: "Development Fees", amount: 13500 },
    { name: "End Semester Examination Fees", amount: 2000 },
    { name: "Registration Fees", amount: 1500 },
    { name: "Library Fees", amount: 3000 },
    { name: "Gym, Cultural Activities & Magazine Fees", amount: 2500 },
    { name: "Sports Fees", amount: 2800 },
    { name: "Internet & Computer Maintenance Fees", amount: 3300 },
    { name: "Training & Placement Fees", amount: 900 },
    { name: "Industry-Institute Interaction Fees", amount: 800 },
    { name: "Group Insurance Premium", amount: 700 },
    { name: "Convocation Fees", amount: 0 },
  ],
  oneTimeFees: [
    { name: "Library Deposit (Refundable)", amount: 5000 },
    { name: "Caution Deposit (Refundable)", amount: 5000 },
    { name: "Identity Card Fee", amount: 200 },
    { name: "Medical Exam Fee", amount: 300 },
    { name: "Welfare Fund", amount: 2500 },
    { name: "Medical Aid Fund", amount: 5000 },
  ],
  oddSemester: 123850,
  evenSemester: 123150,
};

export default function AcadFees() {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6">
      <Card className="border-solid border-red-500 border-4">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">First Year Academic Fees Structure (2024-2025)</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Particulars</TableHead>
                <TableHead>Amount (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Tuition Fees</TableCell>
                <TableCell>{feesData.tuition}</TableCell>
              </TableRow>
              {feesData.others.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.name}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold">
                <TableCell>Total Annual Fees</TableCell>
                <TableCell>
                  {feesData.tuition + feesData.others.reduce((acc, fee) => acc + fee.amount, 0)}
                </TableCell>
              </TableRow>
              {feesData.oneTimeFees.map((fee, index) => (
                <TableRow key={index}>
                  <TableCell>{fee.name}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                </TableRow>
              ))}
              <TableRow className="font-bold">
                <TableCell>Total Fees (Including One-Time)</TableCell>
                <TableCell>
                  {feesData.tuition + 
                  feesData.others.reduce((acc, fee) => acc + fee.amount, 0) + 
                  feesData.oneTimeFees.reduce((acc, fee) => acc + fee.amount, 0)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Odd Semester Fees</TableCell>
                <TableCell>{feesData.oddSemester}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Even Semester Fees</TableCell>
                <TableCell>{feesData.evenSemester}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p className="mt-4">Note: Fees Payment is semester-wise in every Academic Session. Above fees do not include charges towards Hostel and Mess.</p>
        </CardContent>
      </Card>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Institute Bank Details</h2>
        <Card>
          <CardContent className="p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Name of Account</TableHead>
                  <TableHead>Account No</TableHead>
                  <TableHead>IFSC Code</TableHead>
                  <TableHead>Branch Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Academic Fees</TableCell>
                  <TableCell>Indian Institute of Information Technology, Nagpur General</TableCell>
                  <TableCell><strong>41759739179</strong></TableCell>
                  <TableCell>SBIN0006702</TableCell>
                  <TableCell>VRCE BRANCH</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Online Payment Link:</h3>
        <Link
          href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
          target="_blank"
          className="text-blue-600 underline"
        >
          Click Here
        </Link>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold ">Institute Academic Fees QR Code:</h3>
        <Image
          src="/academicfeesbi_page-0001.jpg"
          alt="Academic Fees QR Code"
          width={750}
          height={1061}
          className="mt-4 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}