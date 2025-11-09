import { MessageCircle, Heart, Lightbulb, Monitor } from 'lucide-react';

const Strengths = () => {
  const strengths = [
    {
      title: 'Exceptional Communication & Storytelling',
      description: 'Crafting narratives that resonate and inspire action.',
      icon: MessageCircle,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Consumer-Centric Approach',
      description: 'Prioritizing user needs to build lasting relationships.',
      icon: Heart,
      color: 'from-pink-500 to-pink-600',
    },
    {
      title: 'Creative Problem-Solving',
      description: 'Innovative solutions for complex marketing challenges.',
      icon: Lightbulb,
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      title: 'Tech & UX Focused',
      description: 'Leveraging technology to optimize user experience.',
      icon: Monitor,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="strengths" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Key Strengths
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${strength.color} mb-6 group-hover:scale-110 transition-transform`}>
                <strength.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h3>
              <p className="text-gray-600 leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strengths;
