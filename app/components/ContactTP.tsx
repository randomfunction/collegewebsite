import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactTP() {
  const contacts = [
    {
      name: 'Dr. Paritosh Peshwe',
      position: 'Faculty Co-ordinator Training & Placement',
      phone: '+91 9975104323',
      email: 'paritoshpeshwe@iiitn.ac.in',
    },
    {
      name: 'Dr. Meera Jagdale',
      position: 'Officer (Training & Placement cell)',
      phone: '+91 9764490050',
      email: 'tnp@iiitn.ac.in',
    },
    {
      name: 'Shri Pritesh Tiwari',
      position: 'Officer (Training & Placement cell)',
      phone: '+91 9890070945',
      email: 'otp@iiitn.ac.in',
    },
  ];


    return (
      <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <Card key={index} className="shadow-lg border rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{contact.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 font-medium">{contact.position}</p>
              <p className="text-gray-600 mt-2">
                📞 <span className="font-semibold">{contact.phone}</span>
              </p>
              <p className="text-gray-600">
                ✉️ <a href={`mailto:${contact.email}`} className="text-blue-500 hover:underline">{contact.email}</a>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    );
  }