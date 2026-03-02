import { Instagram, Video } from 'lucide-react';
import { socialMedia } from '@/data/extendedVisaTypes';

export function SocialMediaWidget() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 p-2 rounded-lg">
            <Instagram className="h-6 w-6" />
          </div>
          <div>
            <p className="font-semibold">Bizi Takip Edin!</p>
            <p className="text-sm text-white/80">{socialMedia.description}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a 
            href={`https://instagram.com/${socialMedia.instagram.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" />
            {socialMedia.instagram}
          </a>
          <a 
            href={`https://tiktok.com/@${socialMedia.tiktok.replace('@', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
          >
            <Video className="h-4 w-4" />
            TikTok
          </a>
        </div>
      </div>
    </div>
  );
}
