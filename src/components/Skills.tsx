import { BarChart, Search, Palette, Users, TrendingUp, Layout, Megaphone, Globe } from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Google Ads', icon: Megaphone, color: 'from-blue-500 to-blue-600' },
    { name: 'Google Analytics', icon: BarChart, color: 'from-green-500 to-green-600' },
    { name: 'Adobe Express', icon: Palette, color: 'from-red-500 to-red-600' },
    { name: 'SurveyMonkey', icon: Users, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Sitemap & UX Design', icon: Layout, color: 'from-purple-500 to-purple-600' },
    { name: 'Business Development', icon: TrendingUp, color: 'from-indigo-500 to-indigo-600' },
    { name: 'Digital Storytelling', icon: Globe, color: 'from-pink-500 to-pink-600' },
    { name: 'Web Design', icon: Layout, color: 'from-cyan-500 to-cyan-600' },
    { name: 'UX Optimization', icon: Users, color: 'from-teal-500 to-teal-600' },
    { name: 'SEO', icon: Search, color: 'from-orange-500 to-orange-600' },
    { name: 'Campaign Development', icon: Megaphone, color: 'from-rose-500 to-rose-600' },
    { name: 'Brand Management', icon: TrendingUp, color: 'from-violet-500 to-violet-600' },
    { name: 'Public Speaking', icon: Users, color: 'from-fuchsia-500 to-fuchsia-600' },
    { name: 'Persuasive Messaging', icon: Megaphone, color: 'from-sky-500 to-sky-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity`}></div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
