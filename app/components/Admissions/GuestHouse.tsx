import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const GuestHouseInfo = () => {
  const links = [
    {
      title: "Online Booking Form for Guest House",
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfTlpG94yDYrbLGQo_8UEJiN2d9jl_B8_JNjMIN_nm8borrPA/viewform"
    },
    {
      title: "Requisition Slip to Book Guest House",
      url: "/1. Requisition Slip to Book Guest House.pdf"
    },
    {
      title: "Rules for the Allotment of Guest House Accommodation & Room Tariff",
      url: "/2. Rules for the Allotment of Guest House Accommodation & Room Tariff.pdf"
    },
    {
      title: "Payment details for guest house fees through SB collect",
      url: "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=644817"
    },
    {
      title: "Guest House details and nearest hotel details",
      url: "/Guest House-1.pdf"
    }
  ];

  const contactInfo = {
    guestHouse: {
      title: "Guest House IIIT Nagpur",
      phone: "9730075010"
    },
    admin: {
      name: "Mr. Avinash Suryawanshi",
      position: "AoSD (Admin)",
      phone: "9960206223",
      email: "aosd@iiitn.ac.in"
    },
    address: "S.No. 140, 141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni, Village Waranga, Nagpur - 441108"
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Guest House Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Quick Links Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <div className="grid gap-3">
              {links.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start text-left h-auto py-4"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            {/* Guest House Contact */}
            <Card className="bg-slate-50">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">{contactInfo.guestHouse.title}</h3>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>{contactInfo.guestHouse.phone}</span>
                </div>
              </CardContent>
            </Card>

            {/* Admin Contact */}
            <Card className="bg-slate-50">
              <CardContent className="pt-6 space-y-2">
                <h3 className="font-semibold text-lg">{contactInfo.admin.name}</h3>
                <p className="text-slate-600">{contactInfo.admin.position}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>{contactInfo.admin.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href={`mailto:${contactInfo.admin.email}`} className="text-blue-600 hover:underline">
                      {contactInfo.admin.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-slate-50">
              <CardContent className="pt-6">
                <div className="flex gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <p>{contactInfo.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GuestHouseInfo;