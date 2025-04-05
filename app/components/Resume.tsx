import { styles } from "../utils/ResumeStyle";
import {
  Document,
  Page,
  Text,
  View
} from '@react-pdf/renderer';

import { ResumeData } from "../utils/types";
const Resume = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Name and Contact */}
      <View style={styles.section}>
        <Text style={styles.header}>{data.name}</Text>
        <Text style={styles.text}>{data.email} | {data.mobile}</Text>
        <Text style={styles.text}>
          {data.portfolio} | {data.linkedin} | {data.github}
        </Text>
        <Text style={styles.text}>{data.location}</Text>
      </View>

      {/* Summary */}
      {data.summary && (
        <View style={styles.section}>
          <Text style={styles.header}>Summary</Text>
          <Text>{data.summary}</Text>
        </View>
      )}

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.header}>Skills</Text>
        <Text style={styles.bold}>Technical:</Text> <Text>{data.skills.technical.join(", ")}</Text>
        <Text style={styles.bold}>Soft Skills:</Text> <Text>{data.skills.softSkills.join(", ")}</Text>
      </View>

      {/* Education */}
      {data.education.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Education</Text>
          {data.education.map((edu, i) => (
            <View key={i}>
              <Text style={styles.bold}>{edu.degreeName}</Text>
              <Text>{edu.institution}, {edu.location} ({edu.startYear} - {edu.endYear})</Text>
              <Text>CGPA: {edu.cgpa}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Work Experience */}
      {data.workExperience.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Experience</Text>
          {data.workExperience.map((job, i) => (
            <View key={i}>
              <Text style={styles.bold}>{job.jobTitle}</Text>
              <Text>{job.companyName} ({job.startDate} - {job.endDate})</Text>
              <Text>{job.responsibilities}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Projects</Text>
          {data.projects.map((project, i) => (
            <View key={i}>
              <Text style={styles.bold}>{project.title}</Text>
              <Text>{project.description}</Text>
              <Text>Tech Stack: {project.techStack.join(", ")}</Text>
              <Text style={styles.link}>{project.demoLink}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Certifications */}
      {data.certifications.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Certifications</Text>
          {data.certifications.map((cert, i) => (
            <Text key={i}>{cert.name} - {cert.link}</Text>
          ))}
        </View>
      )}

      {/* Achievements */}
      {data.achievements.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Achievements</Text>
          {data.achievements.map((a, i) => (
            <View key={i}>
              <Text style={styles.bold}>{a.title}</Text>
              <Text>{a.description}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Positions of Responsibility */}
      {data.positionOfResponsibility.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Positions of Responsibility</Text>
          {data.positionOfResponsibility.map((pos, i) => (
            <View key={i}>
              <Text style={styles.bold}>{pos.position} at {pos.organization}</Text>
              <Text>{pos.duration}</Text>
              <Text>{pos.contributions}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Publications */}
      {data.publications.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.header}>Publications</Text>
          {data.publications.map((pub, i) => (
            <View key={i}>
              <Text style={styles.bold}>{pub.title}</Text>
              <Text>{pub.conference} - {pub.date}</Text>
              <Text>{pub.authors}</Text>
              <Text style={styles.link}>{pub.link}</Text>
            </View>
          ))}
        </View>
      )}
    </Page>
  </Document>
);

export default Resume ;