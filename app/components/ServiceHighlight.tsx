import { LucideIcon } from 'lucide-react';

interface ServiceHighlightProps {
  icon: LucideIcon;
  text: string;
}

export function ServiceHighlight({ icon: Icon, text }: ServiceHighlightProps) {
  return (
    <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm">
      <Icon className="h-5 w-5 text-lime-400" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}