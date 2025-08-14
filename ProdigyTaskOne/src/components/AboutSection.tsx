import { Card, CardContent } from '@/components/ui/card';
import { Zap, Smartphone, Palette, Code } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Dynamic Scrolling",
      description: "Navigation changes color and style as you scroll through different sections of the page."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Responsive Design",
      description: "Perfectly optimized for desktop, tablet, and mobile devices with adaptive layouts."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Modern Styling",
      description: "Beautiful gradients, smooth animations, and contemporary design patterns."
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Performance Optimized",
      description: "Efficient JavaScript implementation that ensures smooth performance across all devices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About Our Navigation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the next generation of web navigation with interactive elements 
            that respond to user behavior and create an engaging browsing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="
                group hover:shadow-xl transition-all duration-300 ease-in-out
                hover:scale-105 hover:border-primary/20
                bg-card border border-border
              "
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="
                    p-3 rounded-full bg-primary/10 group-hover:bg-primary/20
                    transition-colors duration-300 ease-in-out
                  ">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Interactive Navigation Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Scroll Detection</h4>
                <p className="text-muted-foreground">
                  Navigation automatically adapts its appearance based on scroll position.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Hover Effects</h4>
                <p className="text-muted-foreground">
                  Menu items respond with smooth transitions and visual feedback on hover.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Smooth Scrolling</h4>
                <p className="text-muted-foreground">
                  Click navigation items to smoothly scroll to corresponding sections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;