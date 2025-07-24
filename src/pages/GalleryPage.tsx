export const GalleryPage = () => {
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Placeholder for photos */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Photo {i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Conference/Travel Photos */}
        <section>
          <h2 className="text-lg font-medium mb-4">Academic Travel</h2>
          <p className="text-muted-foreground mb-6">
            Memories from conferences, research visits, and academic collaborations.
          </p>
          
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
            
            <div>
              <h3 className="font-medium mb-2">Research Visit - Institution Name</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Visit Photo 1</span>
                </div>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Visit Photo 2</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Art/Creative Work */}
        <section>
          <h2 className="text-lg font-medium mb-4">Creative Work</h2>
          <p className="text-muted-foreground mb-6">
            Some of my artistic endeavors and creative projects outside of research.
          </p>
          
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