"use client";
import React, { useRef, useState } from "react";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import ResumeData from "../utils/types";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

export default function CreateResume() {
  const stepperRef = useRef<any>(null);

  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    email: "",
    mobile: "",
    linkedin: "",
    github: "",
    portfolio: "",
    location: "",
    summary: "",
    skills: {
      technical: [],
      softSkills: [],
    },
    education: [
      {
        degreeName: "",
        institution: "",
        location: "",
        startYear: "",
        endYear: "",
        cgpa: 0,
      },
    ],
    workExperience: [],
    projects: [
      {
        title: "",
        description: "",
        techStack: [],
        role: "",
        demoLink: "",
      },
    ],
    certifications: [],
    achievements: [],
    positionOfResponsibility: [],
    publications: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof ResumeData
  ) => {
    const value = key === "mobile" ? Number(e.target.value) : e.target.value;
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleArrayChange = (
    section: keyof ResumeData,
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedSection = [...(prev[section] as any[])];
      updatedSection[index] = {
        ...updatedSection[index],
        [name]: value,
      };

      return {
        ...prev,
        [section]: updatedSection,
      };
    });
  };
  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degreeName: "",
          institution: "",
          location: "",
          startYear: "",
          endYear: "",
          cgpa: 0,
        },
      ],
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.education];
      updated.splice(index, 1);
      return { ...prev, education: updated };
    });
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: "",
          responsibilities: "",
        },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.workExperience];
      updated.splice(index, 1);
      return { ...prev, workExperience: updated };
    });
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          title: "",
          description: "",
          techStack: [],
          role: "",
          demoLink: "",
        },
      ],
    }));
  };

  const removeProject = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.projects];
      updated.splice(index, 1);
      return { ...prev, projects: updated };
    });
  };

  const addCertification = () => {
    setFormData((prev) => ({
      ...prev,
      certifications: [...prev.certifications, { name: "", link: "" }],
    }));
  };

  const removeCertification = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.certifications];
      updated.splice(index, 1);
      return { ...prev, certifications: updated };
    });
  };

  const addAchievement = () => {
    setFormData((prev) => ({
      ...prev,
      achievements: [...prev.achievements, { title: "", description: "" }],
    }));
  };

  const removeAchievement = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.achievements];
      updated.splice(index, 1);
      return { ...prev, achievements: updated };
    });
  };

  const addPositionOfResponsibility = () => {
    setFormData((prev) => ({
      ...prev,
      positionOfResponsibility: [
        ...prev.positionOfResponsibility,
        {
          position: "",
          organization: "",
          duration: "",
          contributions: "",
        },
      ],
    }));
  };

  const removePositionOfResponsibility = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.positionOfResponsibility];
      updated.splice(index, 1);
      return { ...prev, positionOfResponsibility: updated };
    });
  };

  const addPublication = () => {
    setFormData((prev) => ({
      ...prev,
      publications: [
        ...prev.publications,
        {
          title: "",
          conference: "",
          authors: "",
          date: "",
          link: "",
        },
      ],
    }));
  };

  const removePublication = (index: number) => {
    setFormData((prev) => {
      const updated = [...prev.publications];
      updated.splice(index, 1);
      return { ...prev, publications: updated };
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] p-6">
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-xl">
        <Stepper ref={stepperRef} orientation="vertical">
          <StepperPanel header="Contact Information">
            <div className="space-y-4">
              <InputText
                value={formData.name}
                onChange={(e) => handleInputChange(e, "name")}
                placeholder="Full Name"
                className="w-full mb-3"
              />
              <InputText
                value={formData.mobile}
                onChange={(e) => handleInputChange(e, "mobile")}
                placeholder="Mobile Number"
                className="w-full mb-3"
              />
              <InputText
                value={formData.email}
                onChange={(e) => handleInputChange(e, "email")}
                placeholder="Email Address"
                className="w-full mb-3"
              />
              <InputText
                value={formData.linkedin}
                onChange={(e) => handleInputChange(e, "linkedin")}
                placeholder="LinkedIn"
                className="w-full mb-3"
              />
              <InputText
                value={formData.github}
                onChange={(e) => handleInputChange(e, "github")}
                placeholder="GitHub"
                className="w-full mb-3"
              />
              <InputText
                value={formData.portfolio}
                onChange={(e) => handleInputChange(e, "portfolio")}
                placeholder="Portfolio"
                className="w-full mb-3"
              />
              <InputText
                value={formData.location}
                onChange={(e) => handleInputChange(e, "location")}
                placeholder="Town / City"
                className="w-full mb-3"
              />
            </div>
            <div className="flex justify-end pt-4">
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Professional Summary">
            <div className="space-y-4">
              <InputTextarea
                value={formData.summary}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    summary: e.target.value,
                  }))
                }
                rows={4}
                placeholder="Your 2–3 line professional summary"
                className="w-full"
              />
            </div>
            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Skills">
            <div className="space-y-4">
              <InputTextarea
                value={formData.skills.technical.join(", ")}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      technical: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    },
                  }))
                }
                rows={3}
                placeholder="Technical Skills (comma separated)"
                className="w-full mb-2"
              />
              <InputTextarea
                value={formData.skills.softSkills.join(", ")}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setFormData((prev) => ({
                    ...prev,
                    skills: {
                      ...prev.skills,
                      softSkills: e.target.value
                        .split(",")
                        .map((item) => item.trim()),
                    },
                  }))
                }
                rows={3}
                placeholder="Soft Skills (comma separated)"
                className="w-full"
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Education">
            <div className="space-y-6">
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50 relative"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputText
                      name="degreeName"
                      value={edu.degreeName}
                      onChange={(e) => handleArrayChange("education", index, e)}
                      placeholder="Degree Name"
                      className="w-full"
                    />
                    <InputText
                      name="institution"
                      value={edu.institution}
                      onChange={(e) => handleArrayChange("education", index, e)}
                      placeholder="Institution Name"
                      className="w-full"
                    />
                    <InputText
                      name="location"
                      value={edu.location}
                      onChange={(e) => handleArrayChange("education", index, e)}
                      placeholder="Location"
                      className="w-full"
                    />
                    <div className="flex gap-2">
                      <InputText
                        name="startYear"
                        value={edu.startYear}
                        onChange={(e) =>
                          handleArrayChange("education", index, e)
                        }
                        placeholder="Start Year"
                        className="w-full"
                      />
                      <InputText
                        name="endYear"
                        value={edu.endYear}
                        onChange={(e) =>
                          handleArrayChange("education", index, e)
                        }
                        placeholder="End Year"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <InputText
                    name="cgpa"
                    value={edu.cgpa.toString()}
                    onChange={(e) => handleArrayChange("education", index, e)}
                    placeholder="CGPA / Percentage"
                    className="w-full mt-2"
                  />
                  {formData.education.length > 1 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger mt-3"
                      onClick={() => removeEducation(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Education"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addEducation}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Work Experience">
            <div className="space-y-6">
              {formData.workExperience.map((exp, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputText
                      name="jobTitle"
                      value={exp.jobTitle}
                      onChange={(e) =>
                        handleArrayChange("workExperience", index, e)
                      }
                      placeholder="Job Title"
                      className="w-full"
                    />
                    <InputText
                      name="companyName"
                      value={exp.companyName}
                      onChange={(e) =>
                        handleArrayChange("workExperience", index, e)
                      }
                      placeholder="Company Name"
                      className="w-full"
                    />
                    <InputText
                      name="startDate"
                      value={exp.startDate}
                      onChange={(e) =>
                        handleArrayChange("workExperience", index, e)
                      }
                      placeholder="Start Date (e.g. Jan 2023)"
                      className="w-full"
                    />
                    <InputText
                      name="endDate"
                      value={exp.endDate}
                      onChange={(e) =>
                        handleArrayChange("workExperience", index, e)
                      }
                      placeholder="End Date (e.g. Mar 2023)"
                      className="w-full"
                    />
                  </div>
                  <InputTextarea
                    name="responsibilities"
                    value={exp.responsibilities}
                    onChange={(e) =>
                      handleArrayChange("workExperience", index, e)
                    }
                    rows={3}
                    placeholder="Responsibilities / Achievements (bullet points separated by line)"
                    className="w-full mt-2"
                  />

                  {formData.workExperience.length > 0 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger"
                      onClick={() => removeExperience(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Experience"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addExperience}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Projects">
            <div className="space-y-6">
              {formData.projects.map((proj, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50 relative"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputText
                      name="title"
                      value={proj.title}
                      onChange={(e) => handleArrayChange("projects", index, e)}
                      placeholder="Project Title"
                      className="w-full"
                    />
                    <InputText
                      name="techStack"
                      value={proj.techStack?.join(", ")}
                      onChange={(e) => {
                        const value = e.target.value
                          .split(",")
                          .map((v) => v.trim());
                        const updated = [...formData.projects];
                        updated[index].techStack = value;
                        setFormData((prev) => ({ ...prev, projects: updated }));
                      }}
                      placeholder="Technologies Used (comma separated)"
                      className="w-full"
                    />
                    <InputText
                      name="role"
                      value={proj.role}
                      onChange={(e) => handleArrayChange("projects", index, e)}
                      placeholder="Your Role / Contribution"
                      className="w-full"
                    />
                    <InputText
                      name="demoLink"
                      value={proj.demoLink}
                      onChange={(e) => handleArrayChange("projects", index, e)}
                      placeholder="GitHub / Live Link (optional)"
                      className="w-full"
                    />
                  </div>
                  <InputTextarea
                    name="description"
                    value={proj.description}
                    onChange={(e) => handleArrayChange("projects", index, e)}
                    rows={3}
                    placeholder="Project Description"
                    className="w-full mt-2"
                  />

                  {formData.projects.length > 1 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger mt-3"
                      onClick={() => removeProject(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Project"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addProject}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Certifications">
            <div className="space-y-6">
              {formData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50 relative"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <InputText
                      name="name"
                      value={cert.name}
                      onChange={(e) =>
                        handleArrayChange("certifications", index, e)
                      }
                      placeholder="Certification Name"
                      className="w-full"
                    />
                    <InputText
                      name="link"
                      value={cert.link}
                      onChange={(e) =>
                        handleArrayChange("certifications", index, e)
                      }
                      placeholder="Certificate Link (optional)"
                      className="w-full"
                    />
                  </div>

                  {formData.certifications.length > 1 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger mt-3"
                      onClick={() => removeCertification(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Certification"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addCertification}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Achievements">
            <div className="space-y-6">
              {formData.achievements.map((ach, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50 relative"
                >
                  <InputText
                    name="title"
                    value={ach.title}
                    onChange={(e) =>
                      handleArrayChange("achievements", index, e)
                    }
                    placeholder="Achievement Title"
                    className="w-full mb-2"
                  />
                  <InputTextarea
                    name="description"
                    value={ach.description}
                    onChange={(e) =>
                      handleArrayChange("achievements", index, e)
                    }
                    rows={2}
                    placeholder="Description / Context"
                    className="w-full"
                  />

                  {formData.achievements.length > 0 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger mt-3"
                      onClick={() => removeAchievement(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Achievement"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addAchievement}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Position Of Responsibility">
            <div className="space-y-6">
              {formData.positionOfResponsibility.map((act, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50 relative"
                >
                  <div className="grid md:grid-cols-2 gap-4 mb-2">
                    <InputText
                      name="position"
                      value={act.position}
                      onChange={(e) =>
                        handleArrayChange("positionOfResponsibility", index, e)
                      }
                      placeholder="Position (e.g., President)"
                      className="w-full"
                    />
                    <InputText
                      name="organization"
                      value={act.organization}
                      onChange={(e) =>
                        handleArrayChange("positionOfResponsibility", index, e)
                      }
                      placeholder="Organization / Event"
                      className="w-full"
                    />
                    <InputText
                      name="duration"
                      value={act.duration}
                      onChange={(e) =>
                        handleArrayChange("positionOfResponsibility", index, e)
                      }
                      placeholder="Duration (e.g., Jan 2023 – Mar 2024)"
                      className="w-full"
                    />
                  </div>
                  <InputTextarea
                    name="contributions"
                    value={act.contributions}
                    onChange={(e) =>
                      handleArrayChange("positionOfResponsibility", index, e)
                    }
                    placeholder="Key Contributions"
                    rows={3}
                    className="w-full"
                  />

                  {formData.positionOfResponsibility.length > 0 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger mt-3"
                      onClick={() => removePositionOfResponsibility(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Activity"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addPositionOfResponsibility}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                onClick={() => stepperRef.current?.nextCallback()}
              />
            </div>
          </StepperPanel>

          <StepperPanel header="Publications">
            <div className="space-y-6">
              {formData.publications.map((pub, index) => (
                <div
                  key={index}
                  className="border p-4 rounded-xl shadow-sm bg-gray-50 relative"
                >
                  <div className="grid md:grid-cols-2 gap-4 mb-2">
                    <InputText
                      name="title"
                      value={pub.title}
                      onChange={(e) =>
                        handleArrayChange("publications", index, e)
                      }
                      placeholder="Publication Title"
                      className="w-full"
                    />
                    <InputText
                      name="conference"
                      value={pub.conference}
                      onChange={(e) =>
                        handleArrayChange("publications", index, e)
                      }
                      placeholder="Conference / Journal"
                      className="w-full"
                    />
                    <InputText
                      name="authors"
                      value={pub.authors}
                      onChange={(e) =>
                        handleArrayChange("publications", index, e)
                      }
                      placeholder="Authors"
                      className="w-full"
                    />
                    <InputText
                      name="date"
                      value={pub.date}
                      onChange={(e) =>
                        handleArrayChange("publications", index, e)
                      }
                      placeholder="Date (e.g., Feb 2024)"
                      className="w-full"
                    />
                    <InputText
                      name="link"
                      value={pub.link}
                      onChange={(e) =>
                        handleArrayChange("publications", index, e)
                      }
                      placeholder="DOI / Link (optional)"
                      className="w-full"
                    />
                  </div>

                  {formData.publications.length > 0 && (
                    <Button
                      label=""
                      icon="pi pi-trash"
                      className="p-button-sm p-button-danger mt-3"
                      onClick={() => removePublication(index)}
                    />
                  )}
                </div>
              ))}

              <Button
                label="Add Publication"
                icon="pi pi-plus"
                className="p-button-sm mt-4"
                onClick={addPublication}
              />
            </div>

            <div className="flex justify-between pt-4">
              <Button
                label="Back"
                icon="pi pi-arrow-left"
                onClick={() => stepperRef.current?.prevCallback()}
              />
              <Button
                label="Finish"
                icon="pi pi-check"
                className="p-button-success"
                onClick={() => console.log("All Steps Done", formData)}
              />
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </div>
  );
}
