type FeatureCardProps = {
  title: string;
  description: string;
  emoji: string;
};

export default function FeatureCard({
  title,
  description,
  emoji,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer">
      <div className="text-5xl mb-4">{emoji}</div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}