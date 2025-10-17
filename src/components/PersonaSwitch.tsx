import { useState } from 'react';
import { motion } from 'framer-motion';
import { personas, getPersonaBenefits, getPersonaMetrics } from '@/data/personas';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import KPIBadge from './KPIBadge';

const PersonaSwitch = () => {
  const [selectedPersona, setSelectedPersona] = useState(personas[0].id);

  const currentPersona = personas.find(p => p.id === selectedPersona);
  const benefits = getPersonaBenefits(selectedPersona);
  const metrics = getPersonaMetrics(selectedPersona);

  return (
    <div className="space-y-8">
      {/* Persona Pills */}
      <div className="flex flex-wrap justify-center gap-6">
        {personas.map((persona) => (
          <button
            key={persona.id}
            onClick={() => setSelectedPersona(persona.id)}
            className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 text-lg border-2 ${
              selectedPersona === persona.id
                ? 'bg-brand-2 text-white shadow-2xl border-brand-2 transform scale-105'
                : 'glass text-muted-foreground hover:text-foreground hover:bg-white/10 border-white/20 hover:border-brand-2/50 hover:shadow-lg'
            }`}
          >
            {persona.name}
          </button>
        ))}
      </div>

      {/* Persona Content */}
      <motion.div
        key={selectedPersona}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Persona Info */}
        {currentPersona && (
          <div className="text-center max-w-4xl mx-auto p-8 glass border-2 border-white/20 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-display font-bold mb-4 text-brand-2">{currentPersona.role}</h3>
            <p className="text-muted-foreground text-xl leading-relaxed">{currentPersona.description}</p>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(metrics).map(([key, value]) => (
            <KPIBadge
              key={key}
              label={key}
              value={value}
              trend={value.includes('%') && !value.includes('Score') && !value.includes('Rating') ? 'up' : 'neutral'}
            />
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass border-2 border-white/20 h-full shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl text-brand-2">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">{benefit.description}</p>
                  
                  {benefit.metric && (
                    <div className="bg-card/70 rounded-xl p-6 border border-white/10">
                      <div className="text-3xl font-bold text-brand-2 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="text-base text-muted-foreground font-medium">
                        {benefit.impact}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PersonaSwitch;