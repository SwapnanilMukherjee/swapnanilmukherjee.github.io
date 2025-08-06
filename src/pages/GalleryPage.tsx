import { Image } from "lucide-react";

export function GalleryPage() {
  const galleryItems = [
    {
      title: "Conference Presentation",
      description: "Presenting research at International Conference 2024"
    },
    {
      title: "Lab Setup", 
      description: "Our research lab and equipment"
    },
    {
      title: "Team Photo",
      description: "Research group meeting"
    },
    {
      title: "Awards Ceremony",
      description: "Receiving best paper award"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-8">Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItems.map((item, index) => (
          <div key={index} className="bg-muted rounded-lg aspect-[4/3] flex flex-col items-center justify-center p-6 text-center">
            <Image size={48} className="text-muted-foreground mb-4" />
            <h3 className="font-medium mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}