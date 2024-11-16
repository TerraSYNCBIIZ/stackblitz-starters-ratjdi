import { CheckCircle } from 'lucide-react';

interface FeatureProps {
  text: string;
}

export function Feature({ text }: FeatureProps) {
  return (
    <div className="flex items-start space-x-3">
      <CheckCircle className="h-5 w-5 text-lime-400 mt-1 flex-shrink-0" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}