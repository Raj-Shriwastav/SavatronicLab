import { ImageIcon } from "lucide-react";

export default function Gallery() {
  // Placeholders for 6 gallery images
  const images = Array.from({ length: 6 });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h1>
        <p className="text-lg text-gray-600">
          A visual journey of our prototypes, workshops, testing sessions, and exhibitions.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((_, i) => (
          <div key={i} className="aspect-square bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 border border-gray-200 hover:border-brand-soft transition-colors cursor-pointer group">
            <ImageIcon className="w-8 h-8 mb-2 group-hover:text-brand-soft transition-colors" />
            <span className="text-sm font-medium">&lt;Fill_data: Image {i+1}&gt;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
