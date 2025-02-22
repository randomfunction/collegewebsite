'use client';

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Button } from '@/components/ui/button';

const PlacementStats = () => {
  const batchStats = [
    { year: 2020, highest: 20, average: 8.5 },
    { year: 2021, highest: 46.75, average: 8.44 },
    { year: 2022, highest: 40, average: 12.04 },
    { year: 2023, highest: 90, average: 14 },
    { year: 2024, highest: 47, average: 13.25 },
  ];

  const pdfLinks = [
    // { id: '1', title: 'Placement Report 2020', url: '#' },
    // { id: '2', title: 'Placement Report 2021', url: '#' },
    { id: '1', title: 'Placement Report 2022', url: './Placement_stats_2022.pdf' },
    { id: '2', title: 'Placement Report 2023', url: './placement_stats_2023.pdf' },
    { id: '3', title: 'Placement Report 2024', url: './Placement_stats_2024.pdf' },
  ];

  return (
    <div className="space-y-6  p-8  bg-gray-900 text-white relative inset-0 bg-gradient-to-r from-gray-700 to-gray-920 opacity-95">
      {/* Header Stats */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Latest Placement Highlights - Batch 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">47 LPA</div>
              <div className="text-sm text-gray-600">Highest Package</div>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600">154</div>
              <div className="text-sm text-gray-600">Companies Visited</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trends Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Placement Trends (2022-2024)</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart width={800} height={250} data={batchStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="highest" stroke="#8884d8" name="Highest Package (LPA)" />
            <Line type="monotone" dataKey="average" stroke="#82ca9d" name="Average Package (LPA)" />
          </LineChart>
        </CardContent>
      </Card>

      {/* PDF Links */}
      <Card>
        <CardHeader>
          <CardTitle>Placement Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pdfLinks.map((pdf) => (
              <div key={pdf.id} className="p-4 bg-gray-100 rounded-lg flex justify-between">
                <span>{pdf.title}</span>
                <Button variant="link" asChild>
                  <a href={pdf.url} target="_blank" rel="noopener noreferrer">View PDF</a>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlacementStats;