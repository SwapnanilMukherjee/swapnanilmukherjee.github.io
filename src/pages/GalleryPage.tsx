import { useEffect, useState } from "react";
import { loadGallery, type GalleryPhoto, type AcademicTravelEvent } from "@/lib/dataLoader";

export const GalleryPage = () => {
  const [galleryData, setGalleryData] = useState<{
    photography: GalleryPhoto[];
    academic_travel: AcademicTravelEvent[];
    creative_work: GalleryPhoto[];
  }>({
    photography: [],
    academic_travel: [],
    creative_work: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadGallery();
        setGalleryData(data);
      } catch (error) {
        console.error('Error loading gallery data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-semibold mb-8">Gallery</h1>
      
      <div className="space-y-8">
        {/* Photo Gallery */}
        <section>
          <h2 className="text-lg font-medium mb-4">Photography</h2>
          <p className="text-muted-foreground mb-6">
            Some photos from my travels and daily life. Photography is one of my hobbies 
            that helps me see the world from different perspectives.
          </p>
          
          {loading ? (
            <div className="text-muted-foreground">Loading photos...</div>
          ) : galleryData.photography.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryData.photography.map((photo, i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{photo.title}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Photo {i}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Conference/Travel Photos */}
        <section>
          <h2 className="text-lg font-medium mb-4">Academic Travel</h2>
          <p className="text-muted-foreground mb-6">
            Memories from conferences, research visits, and academic collaborations.
          </p>
          
          {loading ? (
            <div className="text-muted-foreground">Loading travel photos...</div>
          ) : galleryData.academic_travel.length > 0 ? (
            <div className="space-y-6">
              {galleryData.academic_travel.map((event, index) => (
                <div key={index}>
                  <h3 className="font-medium mb-2">{event.title}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {event.photos.map((photo, photoIndex) => (
                      <div key={photoIndex} className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">{photo.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Conference Name 2024 - City, Country</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Conference Photo 1</span>
                  </div>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Conference Photo 2</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Art/Creative Work */}
        <section>
          <h2 className="text-lg font-medium mb-4">Creative Work</h2>
          <p className="text-muted-foreground mb-6">
            Some of my artistic endeavors and creative projects outside of research.
          </p>
          
          {loading ? (
            <div className="text-muted-foreground">Loading creative work...</div>
          ) : galleryData.creative_work.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {galleryData.creative_work.map((work, index) => (
                <div key={index}>
                  <h3 className="font-medium mb-2">{work.title}</h3>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-2">
                    <span className="text-muted-foreground text-sm">{work.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {work.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Digital Art</h3>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-2">
                  <span className="text-muted-foreground text-sm">Artwork 1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Description of your artistic work or creative projects.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Other Projects</h3>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center mb-2">
                  <span className="text-muted-foreground text-sm">Project 1</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Any other creative work, hobby projects, or interesting things you've made.
                </p>
              </div>
            </div>
          )}
        </section>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">
            This gallery will be updated as I capture more moments from my academic journey and personal adventures.
          </p>
        </div>
      </div>
    </div>
  );
};