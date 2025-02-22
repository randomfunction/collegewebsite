import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Recruiters() {
  return (
    <div className="py-16 px-6 bg-gray-900 text-white relative inset-0 bg-gradient-to-r from-gray-700 to-gray-920 opacity-95">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Why Recruit from IIITN Nagpur?
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Admission</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Established by MHRD, Govt of Maharashtra, and Industry partners.</li>
              <li>Declared as Institution of National Importance by Act of Parliament.</li>
              <li>Admissions through JoSAA, selecting only the top 2% from JEE Mains.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-green-500 to-green-700 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Industry Academia Collaboration</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Tie-up with Tata Consultancy Services Ltd as Industry Partner.</li>
              <li>MoU with ESIEE Paris for exchange programmes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Curriculum</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Industry-relevant dynamic curriculum.</li>
              <li>Core subjects start from the 1st semester.</li>
              <li>Choice Based Credit System with online certification options.</li>
              <li>Mandatory industry internship for final year B.Tech.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-red-500 to-red-700 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Research Environment</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700">
              Research focuses on industry-related problems with collaboration opportunities.
            </p>
            <h3 className="text-lg font-semibold mt-4">Research Areas:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Deep Learning, Machine Learning, IoT, High Performance Computing</li>
              <li>Signal Processing, Biomedical Signal Processing, Wireless Communication</li>
              <li>Nanoscience, Applied Mathematics, Real Algebraic Geometry</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-lg border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white p-4 rounded-t-lg">
            <CardTitle className="text-xl">Clubs & Communities</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold">Technical:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ack-Z - Ethical hacking club</li>
              <li>DotSlash - Programming Community</li>
              <li>Machine Learning Group, Competitive Programming Group</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4">Cultural:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Music Club, Dance Club, Art Club</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
