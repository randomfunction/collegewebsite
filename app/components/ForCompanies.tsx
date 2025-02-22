import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ForCompanies() {
  return (
    <section id="companies" className="py-16 flex justify-center">
      <Card className="w-full max-w-5xl ">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-gray-900">For Companies</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            Submit a Job Announcement using the form below.
          </p>
          <Button asChild>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHnTqRwRCry212Zv44KS4EMfG_f6XWzYUKQ1h_AQwdvAH8VA/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Fill Out the Form
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
