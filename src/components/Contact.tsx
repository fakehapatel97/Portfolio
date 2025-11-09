import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fakehapatel97@gmail.com',
      href: 'mailto:fakehapatel97@gmail.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 929-569-8868',
      href: 'tel:+19295698868',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/fakeha-patel',
      href: 'https://www.linkedin.com/in/fakeha-patel/',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm open to collaborations, marketing roles, or creative projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.label === 'LinkedIn' ? '_blank' : undefined}
              rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
              className="group bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${contact.color} mb-4 group-hover:scale-110 transition-transform`}>
                <contact.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.label}</h3>
              <p className="text-sm text-gray-600 break-words">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-8">
            <p className="text-gray-700 text-lg font-medium">
              Looking forward to hearing from you! 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
