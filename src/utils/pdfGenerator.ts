import { jsPDF } from 'jspdf';
import { contactData, summaryText, experienceData, skillCategories, awardsData, educationData } from '../data/resumeData';

export function generateResumePDF(): void {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 12;
  const contentWidth = pageWidth - (margin * 2); // 186mm
  let y = margin;

  const checkNewPage = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 10) {
      doc.addPage();
      y = margin;
      return true;
    }
    return false;
  };

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(contactData.name.toUpperCase(), pageWidth / 2, y, { align: 'center' });
  y += 6;

  doc.setFontSize(10.5);
  doc.setTextColor(8, 145, 178); // cyan-600
  doc.text(contactData.title, pageWidth / 2, y, { align: 'center' });
  y += 5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(71, 85, 105); // slate-600
  const contactStr = `Email: ${contactData.email}  |  Phone: ${contactData.phone}  |  Location: ${contactData.location}`;
  doc.text(contactStr, pageWidth / 2, y, { align: 'center' });
  y += 4.5;
  const linkStr = `LinkedIn: linkedin.com/in/shashidhara-h-v-465b7116b`;
  doc.text(linkStr, pageWidth / 2, y, { align: 'center' });
  y += 6;

  // Horizontal divider
  doc.setDrawColor(15, 23, 42);
  doc.setLineWidth(0.5);
  doc.line(margin, y, pageWidth - margin, y);
  y += 5;

  const addSectionHeader = (title: string) => {
    checkNewPage(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(203, 213, 225); // slate-300
    doc.setLineWidth(0.3);
    doc.line(margin, y, pageWidth - margin, y);
    y += 4.5;
  };

  // 1. Summary
  addSectionHeader('Professional Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(summaryText, contentWidth);
  checkNewPage(summaryLines.length * 3.8);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 3.8 + 3.5;

  // 2. Core Skills
  addSectionHeader('Core Skills');
  doc.setFontSize(8.5);
  skillCategories.forEach((cat) => {
    const skillsList = cat.skills.map((s) => s.name).join(', ');
    const label = `• ${cat.name}: `;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    
    const prefixWidth = doc.getTextWidth(label);
    const availableWidth = contentWidth - prefixWidth;
    
    doc.setFont('helvetica', 'normal');
    const skillLines = doc.splitTextToSize(skillsList, availableWidth);

    checkNewPage(skillLines.length * 3.8 + 1);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(label, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    
    if (skillLines.length > 0) {
      doc.text(skillLines[0], margin + prefixWidth, y);
      for (let i = 1; i < skillLines.length; i++) {
        y += 3.8;
        doc.text(skillLines[i], margin + prefixWidth, y);
      }
    }
    y += 4.5;
  });
  y += 1.5;

  // 3. Experience
  addSectionHeader('Professional Experience');
  experienceData.forEach((exp) => {
    checkNewPage(10);

    // Company & Role Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(`${exp.company} - ${exp.role}`, margin, y);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.period} | ${exp.location}`, pageWidth - margin, y, { align: 'right' });
    y += 4.5;

    // Bullet points
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(51, 65, 85);

    exp.bulletPoints.forEach((bullet) => {
      const bulletText = `•  ${bullet}`;
      const lines = doc.splitTextToSize(bulletText, contentWidth - 2);
      checkNewPage(lines.length * 3.5 + 1);
      
      lines.forEach((line: string, idx: number) => {
        const indent = idx === 0 ? margin : margin + 3;
        doc.text(line, indent, y);
        y += 3.5;
      });
      y += 0.8;
    });
    y += 2.5;
  });

  // 4. Achievements & Awards
  addSectionHeader('Achievements & Awards');
  doc.setFontSize(8);
  awardsData.forEach((award) => {
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    const titleText = `• ${award.title} (${award.issuer}): `;
    const prefixWidth = doc.getTextWidth(titleText);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const descLines = doc.splitTextToSize(award.description, contentWidth - prefixWidth);

    checkNewPage(descLines.length * 3.5 + 1);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(15, 23, 42);
    doc.text(titleText, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    if (descLines.length > 0) {
      doc.text(descLines[0], margin + prefixWidth, y);
      for (let i = 1; i < descLines.length; i++) {
        y += 3.5;
        doc.text(descLines[i], margin + prefixWidth, y);
      }
    }
    y += 4;
  });

  // Gen AI Hackathon award
  const hackathonTitle = `• Gen AI Hackathon (ECCN): `;
  doc.setFont('helvetica', 'bold');
  const hPrefixWidth = doc.getTextWidth(hackathonTitle);
  doc.setFont('helvetica', 'normal');
  const hackathonDesc = doc.splitTextToSize('Proposed and prototyped AI request summarization tool demonstrating a 50% reduction in manual review effort.', contentWidth - hPrefixWidth);
  checkNewPage(hackathonDesc.length * 3.5 + 1);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(hackathonTitle, margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(51, 65, 85);
  if (hackathonDesc.length > 0) {
    doc.text(hackathonDesc[0], margin + hPrefixWidth, y);
    for (let i = 1; i < hackathonDesc.length; i++) {
      y += 3.5;
      doc.text(hackathonDesc[i], margin + hPrefixWidth, y);
    }
  }
  y += 5;

  // 5. Education
  addSectionHeader('Education');
  educationData.forEach((edu) => {
    checkNewPage(8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${edu.degree} - ${edu.field}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(edu.year, pageWidth - margin, y, { align: 'right' });
    y += 4;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.text(`${edu.institution}, ${edu.location}`, margin, y);
    y += 4.5;
  });

  // Footer / Page numbers
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184); // slate-400
    doc.text(`Shashidhara H V — Resume | Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 6, { align: 'center' });
  }

  doc.save('Shashidhara_HV_Resume.pdf');
}
