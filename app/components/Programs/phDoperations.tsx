import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Phdoperations = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Operational Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Registration Validity Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Validity of Registration</h2>
            <div className="space-y-4 text-lg">
              <div className="p-4 rounded-lg bg-muted/50">
                <p>
                  The registration will be valid for a period of{' '}
                  <span className="font-semibold">6 years for M.Tech. degree holders</span> and{' '}
                  <span className="font-semibold">7 years for B.Tech. degree holders</span> from 
                  the date of registration and no further extension will be granted under normal 
                  circumstances.
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <p>
                  After 6/7 years, if a candidate wishes to continue research, he/she will be 
                  required to register again. A candidate should apply for re-registration before 
                  completion of 6/7 years of registration period. Failure to do so a candidate 
                  will be required to register again following the procedure for fresh candidates.
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-4" />

          {/* Duration Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Duration of Ph.D. Programme</h2>
            <div className="space-y-4 text-lg">
              <div className="p-4 rounded-lg bg-muted/50">
                <p>
                  Three (3) years from the date of joining the programme till the date of 
                  Submission of Thesis for candidates of{' '}
                  <span className="font-semibold">Ex-A, IN-AS, IN-U, IN-ES.</span>
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50">
                <p>
                  <span className="font-semibold">For Industry candidates</span>, three years 
                  if posses Master's Degree otherwise{' '}
                  <span className="font-semibold">Four years</span> for candidate with 
                  Bachelor's Degree.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Phdoperations;