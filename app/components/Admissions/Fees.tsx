import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";

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

const hostelData = {
  roomRent: {
    doubleSeater: 33000,
    fourSeater: 16500
  },
  otherFees: [
    { particular: "Caution Money (Refundable)", doubleSeater: 2000, fourSeater: 2000 },
    { particular: "Advance Electricity Charges (Adjustable as per Actuals)", doubleSeater: 15000, fourSeater: 15000 },
    { particular: "Advance Water Charges (Adjustable as per Actuals)", doubleSeater: 2000, fourSeater: 2000 },
    { particular: "Recreation", doubleSeater: 2000, fourSeater: 2000 },
    { particular: "Allied Services", doubleSeater: 20000, fourSeater: 20000 },
    { particular: "Depreciation Fund (One Time; Non-Refundable)", doubleSeater: 5000, fourSeater: 5000 },
    { particular: "Welfare Fee (One Time; Non-Refundable)", doubleSeater: 5000, fourSeater: 5000 }
  ],
  messCharges: [
    { particular: "Mess Deposit (One Time; Non-Refundable)", doubleSeater: 2000, fourSeater: 2000 },
    { particular: "Mess Charges (Adjustable as per Actuals)", doubleSeater: 40000, fourSeater: 40000 }
  ]
};

const Fees = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <Tabs defaultValue="academic" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="academic">Academic Fees</TabsTrigger>
          <TabsTrigger value="hostel">Hostel Fees</TabsTrigger>
        </TabsList>

        <TabsContent value="academic">
          <Card className="border-red-500 border-4">
            <CardHeader>
              <CardTitle>First Year Academic Fees Structure (2024-2025)</CardTitle>
            </CardHeader>
            <CardContent>
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

              <Alert className="mt-4">
                <AlertDescription>
                  Fees Payment is semester-wise in every Academic Session. Above fees do not include charges towards Hostel and Mess.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hostel">
          <Card>
            <CardHeader>
              <CardTitle>First Year Hostel Fees Structure For 2024-2025</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Particular</TableHead>
                    <TableHead>Double Seater (₹)</TableHead>
                    <TableHead>Four-Seater (₹)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="font-semibold">
                    <TableCell>Annual Room Rent</TableCell>
                    <TableCell>{hostelData.roomRent.doubleSeater}</TableCell>
                    <TableCell>{hostelData.roomRent.fourSeater}</TableCell>
                  </TableRow>
                  
                  <TableRow className="font-semibold">
                    <TableCell colSpan={3}>Other Fees</TableCell>
                  </TableRow>
                  {hostelData.otherFees.map((fee, index) => (
                    <TableRow key={index}>
                      <TableCell>{fee.particular}</TableCell>
                      <TableCell>{fee.doubleSeater}</TableCell>
                      <TableCell>{fee.fourSeater}</TableCell>
                    </TableRow>
                  ))}

                  <TableRow className="font-semibold">
                    <TableCell colSpan={3}>Mess Charges</TableCell>
                  </TableRow>
                  {hostelData.messCharges.map((fee, index) => (
                    <TableRow key={index}>
                      <TableCell>{fee.particular}</TableCell>
                      <TableCell>{fee.doubleSeater}</TableCell>
                      <TableCell>{fee.fourSeater}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <Alert className="mt-6">
                <AlertDescription>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>The fees are subject to change at the sole discretion of the Competent Authority.</li>
                    <li>Allotment of rooms in the Hostel shall be done on a "First Come First" basis.</li>
                    <li>Availability of the hostel is limited.</li>
                    <li>The room allotment shall be done by the Institute, and no change shall be permitted without prior approval of the Competent Authority.</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Institute Bank Details</CardTitle>
        </CardHeader>
        <CardContent>
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
                <TableCell className="font-bold">41759739179</TableCell>
                <TableCell>SBIN0006702</TableCell>
                <TableCell>VRCE BRANCH</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Online Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <Link
              href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Click Here to Pay Online
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>QR Codes</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Academic Fees QR Code</h4>
              <Image
                src="/academicfeesbi_page-0001.jpg"
                alt="Academic Fees QR Code"
                width={750}
                height={1061}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hostel Fees QR Code</h4>
              <Image
                src="/hostelfeessbi_page-0001.jpg"
                alt="Hostel Fees QR Code"
                width={750}
                height={1061}
                className="rounded-lg shadow-md"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Fees;