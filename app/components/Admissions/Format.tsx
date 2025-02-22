import React from "react";

const InstituteFormat = [
  {
    id: 1,
    name: "Undertaking For Cast Validity (only for Maharashtra candidate)",
    link: "https://admission.iiitn.ac.in//Downloads/Undertaking for Cast Validity.pdf",
  },
  {
    id: 2,
    name: "Undertaking For Correctness in admission form",
    link: "https://admission.iiitn.ac.in//Downloads/Undertaking for correctness.pdf",
  },
  {
    id: 3,
    name: "Undertaking For Non-Available Documents",
    link: "https://admission.iiitn.ac.in//Downloads/Undertaking for missing documents.pdf",
  },
  {
    id: 4,
    name: "Affidavit For Gap Certificate",
    link: "gap_certificate.pdf",
  },
];

const CentralFormat = [
  {
    id: 1,
    name: "FORM-GEN-EWS",
    link: "FORM-GEN-EWS.pdf",
  },
  {
    id: 2,
    name: "FORM-OBC-NCL",
    link: "FORM-OBC-NCL.pdf",
  },
  {
    id: 3,
    name: "FORM-SC-ST",
    link: "FORM-SC-ST.pdf",
  },
  {
    id: 4,
    name: "FORM-PwD (II)",
    link: "FORM-PwD (II).pdf",
  },
  {
    id: 5,
    name: "FORM-PwD (III)",
    link: "FORM-PwD (III)).pdf",
  },

  {
    id: 6,
    name: "FORM-PwD (IV)",
    link: "FORM-PwD (IV).pdf",
  },

  {
    id: 7,
    name: "FORM-DYSLEXIC-1",
    link: "FORM-DYSLEXIC-1.pdf",
  },

  {
    id: 8,
    name: "FORM-DYSLEXIC-2",
    link: "FORM-DYSLEXIC-2.pdf",
  },

  {
    id: 9,
    name: "FORM-DS",
    link: "FORM-DS.pdf",
  },
];

const Formats = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-red-600 text-2xl font-bold mb-4">
        Institute Formats
      </h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Sr. No.</th>
            <th className="border px-4 py-2">Format</th>
            <th className="border px-4 py-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {InstituteFormat.map((format) => (
            <tr key={format.id} className="text-center">
              <td className="border px-4 py-2">{format.id}</td>
              <td className="border px-4 py-2">{format.name}</td>
              <td className="border px-4 py-2">
                <a
                  href={format.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2 className="text-red-600 text-2xl font-bold mb-4">Central Formats</h2>
      <table className="w-full border border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Sr. No.</th>
            <th className="border px-4 py-2">Format</th>
            <th className="border px-4 py-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {CentralFormat.map((format) => (
            <tr key={format.id} className="text-center">
              <td className="border px-4 py-2">{format.id}</td>
              <td className="border px-4 py-2">{format.name}</td>
              <td className="border px-4 py-2">
                <a
                  href={format.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Formats;
