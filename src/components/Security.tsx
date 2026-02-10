import { Shield, Lock, FileCheck, Database } from 'lucide-react';
import { useState } from 'react';

const Security = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const securityFeatures = [
    {
      icon: Lock,
      title: "Encripción",
      description: "Encriptamos todos tus datos en reposo y en tránsito."
    },
    {
      icon: FileCheck,
      title: "Cumplimiento",
      description: "Estamos en proceso de certificación de ISO-27001 y SOC-2"
    },
    {
      icon: Database,
      title: "Datos",
      description: "No entrenamos modelos con datos de nuestros clientes sin su permiso."
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="security" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Seguridad y cumplimiento
          </h2>
          <p className="text-xl text-gray-600">
            Cuidamos tus datos con los más altos estándares y protocolos de seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isFlipped = flippedCard === index;
            
            return (
              <div
                key={index}
                className="relative h-64 cursor-pointer perspective-1000"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-2">Click para más info</p>
                  </div>

                  {/* Back of card */}
                  <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 flex items-center justify-center rotate-y-180">
                    <p className="text-white text-center text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Security;
