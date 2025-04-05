'use client';
import React, { useState, useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Resume from '@/app/components/Resume';
import { ResumeData } from '@/app/utils/types';

export default function ViewPdfPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('resumeData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setResumeData(parsedData);
      } catch (err) {
        console.error('Error parsing resumeData from localStorage:', err);
      }
    }
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      {resumeData ? (
        <PDFViewer width="100%" height="100%">
          <Resume data={resumeData} />
        </PDFViewer>
      ) : (
        <p>Loading PDF preview...</p>
      )}
    </div>
  );
}
