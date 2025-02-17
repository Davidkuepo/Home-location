import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedText = ({ title, subtitle, buttonText, onButtonClick }) => {
  const textProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 }
  });

  

  return (
    <animated.div
      style={textProps}
      className="text-center py-20 bg-gradient-to-r">
      <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">{title}</h1>
      <p className="text-xl md:text-2xl text-black mb-8">{subtitle}</p>
    </animated.div>
  );
};

export default AnimatedText;
