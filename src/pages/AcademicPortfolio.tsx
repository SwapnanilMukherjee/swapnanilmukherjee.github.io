import { Navigation } from "@/components/Navigation";
import { AcademicHeader } from "@/components/AcademicHeader";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactSection } from "@/components/ContactSection";
import { academicData } from "@/data/academicData";

const AcademicPortfolio = () => {
  return (
    <div className="min-h-screen">
      <Navigation sections={academicData.navigationSections} />
      
      {/* Header Section */}
      <div id="header">
        <AcademicHeader
          name={academicData.personal.name}
          title={academicData.personal.title}
          affiliation={academicData.personal.affiliation}
          location={academicData.personal.location}
          email={academicData.personal.email}
          profileImage={academicData.personal.profileImage}
          cvUrl={academicData.personal.cvUrl}
          githubUrl={academicData.personal.githubUrl}
          linkedinUrl={academicData.personal.linkedinUrl}
          scholarUrl={academicData.personal.scholarUrl}
        />
      </div>

      {/* About Section */}
      <AboutSection 
        bio={academicData.bio}
        researchInterests={academicData.researchInterests}
      />

      {/* Education Section */}
      <EducationSection education={academicData.education} />

      {/* Experience Section */}
      <ExperienceSection experiences={academicData.experience} />

      {/* Publications Section */}
      <PublicationsSection publications={academicData.publications} />

      {/* Contact Section */}
      <ContactSection contact={academicData.contact} />

      {/* Footer */}
      <footer className="py-8 bg-muted/50 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            © {new Date().getFullYear()} {academicData.personal.name}. 
            Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AcademicPortfolio;