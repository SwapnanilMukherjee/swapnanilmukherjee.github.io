import { useEffect, useState } from "react";
import { loadTeaching, loadService, loadAwards, type TeachingPosition, type ServiceItem, type Award } from "@/lib/dataLoader";

export const MiscellaneousPage = () => {
  const [teaching, setTeaching] = useState<TeachingPosition[]>([]);
  const [service, setService] = useState<ServiceItem[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [teachingData, serviceData, awardsData] = await Promise.all([
          loadTeaching(),
          loadService(),
          loadAwards()
        ]);
        setTeaching(teachingData);
        setService(serviceData);
        setAwards(awardsData);
      } catch (error) {
        console.error('Error loading miscellaneous data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Miscellaneous</h1>
      
      <div className="space-y-8">
        {/* Teaching */}
        <section>
          <h2 className="text-lg font-medium mb-4">Teaching</h2>
          {loading ? (
            <div className="text-muted-foreground">Loading teaching data...</div>
          ) : teaching.length > 0 ? (
            <div className="space-y-4">
              {teaching.map((position, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{position.title}</h3>
                    <span className="text-sm text-muted-foreground">{position.semester}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {position.institution} • Instructor: {position.instructor}
                  </p>
                  {position.responsibilities && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Responsibilities: {position.responsibilities}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground">No teaching experience available.</div>
          )}
        </section>

        {/* Service */}
        <section>
          <h2 className="text-lg font-medium mb-4">Service</h2>
          {loading ? (
            <div className="text-muted-foreground">Loading service data...</div>
          ) : service.length > 0 ? (
            <div className="space-y-3">
              {service.map((item, index) => (
                <div key={index}>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.organization}{item.description && ` - ${item.description}`}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground">No service activities available.</div>
          )}
        </section>

        {/* Awards & Honors */}
        <section>
          <h2 className="text-lg font-medium mb-4">Awards & Honors</h2>
          {loading ? (
            <div className="text-muted-foreground">Loading awards data...</div>
          ) : awards.length > 0 ? (
            <div className="space-y-3">
              {awards.map((award, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{award.title}</h3>
                    <p className="text-sm text-muted-foreground">{award.organization}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{award.year}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-muted-foreground">No awards available.</div>
          )}
        </section>

        {/* Skills & Tools */}
        <section>
          <h2 className="text-lg font-medium mb-4">Skills & Tools</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Programming Languages</h3>
              <p className="text-sm text-muted-foreground">
                Python, R, JavaScript, Java, C++
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">ML/AI Frameworks</h3>
              <p className="text-sm text-muted-foreground">
                PyTorch, TensorFlow, scikit-learn, Hugging Face
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tools & Platforms</h3>
              <p className="text-sm text-muted-foreground">
                Git, Docker, AWS, Jupyter, LaTeX
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <p className="text-sm text-muted-foreground">
                English (Native), Spanish (Conversational)
              </p>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section>
          <h2 className="text-lg font-medium mb-4">Beyond Academia</h2>
          <p className="text-muted-foreground leading-relaxed">
            When I'm not researching, I enjoy [hobbies/interests]. I'm passionate about 
            [personal interests] and love [activities]. I also volunteer with [organization] 
            and am always interested in [other activities/causes].
          </p>
        </section>
      </div>
    </div>
  );
};