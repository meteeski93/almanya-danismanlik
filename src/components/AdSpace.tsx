import { Megaphone } from 'lucide-react';

interface AdSpaceProps {
  position: 'sidebar' | 'inline' | 'footer';
  title?: string;
}

export function AdSpace({ position, title = "Sponsorlu" }: AdSpaceProps) {
  const sizeClasses = {
    sidebar: "w-full h-64",
    inline: "w-full h-48",
    footer: "w-full h-32"
  };

  return (
    <div className={`${sizeClasses[position]} bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center p-4`}>
      <div className="bg-gray-300 p-3 rounded-full mb-3">
        <Megaphone className="h-6 w-6 text-gray-500" />
      </div>
      <p className="text-gray-500 font-medium text-sm">{title}</p>
      <p className="text-gray-400 text-xs mt-1">Reklam alanı</p>
      <p className="text-gray-400 text-xs">meteeski93@gmail.com</p>
    </div>
  );
}
