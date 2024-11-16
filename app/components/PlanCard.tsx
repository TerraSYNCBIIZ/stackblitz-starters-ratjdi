import { Shield, ShieldCheck } from 'lucide-react';
import { Feature } from './Feature';

interface PlanCardProps {
  isPremium?: boolean;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export function PlanCard({ isPremium, title, price, description, features }: PlanCardProps) {
  return (
    <div className={`rounded-lg p-6 border ${
      isPremium 
        ? 'border-lime-400 bg-gray-800' 
        : 'border-gray-700 bg-gray-800'
    }`}>
      <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
        {isPremium ? (
          <ShieldCheck className="h-6 w-6 text-lime-400 mr-2" />
        ) : (
          <Shield className="h-6 w-6 text-lime-400 mr-2" />
        )}
        {title}
      </h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
      </div>
      <p className="mb-6 text-gray-300">{description}</p>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <Feature key={index} text={feature} />
        ))}
      </div>
    </div>
  );
}