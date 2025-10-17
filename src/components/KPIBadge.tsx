import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface KPIBadgeProps {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
  animateValue?: boolean;
}

const KPIBadge = ({ 
  label, 
  value, 
  prefix = '', 
  suffix = '', 
  trend = 'neutral',
  className = '',
  animateValue = true
}: KPIBadgeProps) => {
  const [displayValue, setDisplayValue] = useState(animateValue ? '0' : value);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!animateValue) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateNumber();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`kpi-${label.replace(/\s+/g, '-')}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, animateValue]);

  const animateNumber = () => {
    const numericValue = parseFloat(value.replace(/[^0-9.-]/g, ''));
    const isDecimal = value.includes('.');
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const increment = numericValue / steps;

    let currentValue = 0;
    const timer = setInterval(() => {
      currentValue += increment;
      
      if (currentValue >= numericValue) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        const formatted = isDecimal 
          ? currentValue.toFixed(1) 
          : Math.floor(currentValue).toString();
        setDisplayValue(formatted);
      }
    }, duration / steps);
  };

  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-danger';
      default: return 'text-foreground';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up': return '↗';
      case 'down': return '↘';
      default: return '';
    }
  };

  return (
    <motion.div
      id={`kpi-${label.replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`glass border-2 border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      <div className="text-base text-muted-foreground mb-2 font-medium">{label}</div>
      <div className={`text-3xl font-bold font-display ${getTrendColor()} flex items-center space-x-2`}>
        <span>{prefix}{displayValue}{suffix}</span>
        {trend !== 'neutral' && (
          <span className="text-xl opacity-80">{getTrendIcon()}</span>
        )}
      </div>
    </motion.div>
  );
};

export default KPIBadge;