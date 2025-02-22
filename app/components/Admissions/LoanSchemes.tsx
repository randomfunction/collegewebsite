import { Card, CardContent } from "@/components/ui/card";

export default function Loan() {
  return (
    <div className="py-16 px-6 bg-gray-900 text-white text-center border-white border-2">
      <h2 className="text-2xl font-bold mb-6">Loan Schemes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { bank: "SBI Bank", link: "./SBI_SCHL.jpg" },
          { bank: "Canara Bank", link: "./CANARA_BANK_LOAN_SCHEME.pdf" },
          { bank: "PNB Bank", link: "./PNB Bank _Loan Doc.pdf" },
          { bank: "Bank of Maharashtra", link: "./Edu loan flyer General-1.pdf" },
        ].map(({ bank, link }, index) => (
          <Card key={index} className="p-4">
            <CardContent className="text-center">
              <h3 className="font-bold">{bank}</h3>
              <a className="text-blue-500 hover:underline" href={link}>
                Click Here
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
