export function MiscellaneousPage() {
  const teaching = [
    {
      title: "CS 101: Introduction to Computer Science",
      role: "Teaching Assistant",
      semester: "Fall 2024",
      description: "Assisted with lectures and graded assignments for introductory programming course."
    },
    {
      title: "CS 201: Data Structures",
      role: "Teaching Assistant", 
      semester: "Spring 2024",
      description: "Led recitation sessions and helped students with programming assignments."
    }
  ];

  const service = [
    {
      title: "Conference Reviewer",
      organization: "ICML 2024",
      description: "Reviewed papers for International Conference on Machine Learning"
    },
    {
      title: "Student Volunteer",
      organization: "NeurIPS 2023",
      description: "Helped with conference organization and logistics"
    }
  ];

  const awards = [
    {
      title: "Best Paper Award",
      organization: "Conference Name 2024",
      description: "Recognized for outstanding research contribution"
    },
    {
      title: "Graduate Fellowship",
      organization: "University Name",
      description: "Merit-based fellowship for academic excellence"
    }
  ];

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-semibold">Miscellaneous</h1>
      
      {/* Teaching */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Teaching</h2>
        <div className="space-y-6">
          {teaching.map((item, index) => (
            <div key={index} className="pb-6 border-b border-border last:border-b-0">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {item.role} • {item.semester}
              </p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Service</h2>
        <div className="space-y-6">
          {service.map((item, index) => (
            <div key={index} className="pb-6 border-b border-border last:border-b-0">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Awards</h2>
        <div className="space-y-6">
          {awards.map((item, index) => (
            <div key={index} className="pb-6 border-b border-border last:border-b-0">
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}