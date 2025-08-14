import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Globe, Layers, Rocket } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Create responsive, interactive websites with modern navigation systems and smooth user experiences.",
      features: ["Responsive Design", "Interactive Elements", "Performance Optimization"]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "UI/UX Design",
      description: "Design beautiful interfaces that captivate users and provide intuitive navigation experiences.",
      features: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      icon: <Layers className="w-12 h-12 text-primary" />,
      title: "Frontend Architecture",
      description: "Build scalable frontend applications with component-based architecture and modern frameworks.",
      features: ["React Development", "Component Libraries", "State Management"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Performance Optimization",
      description: "Optimize your website's performance with efficient code, lazy loading, and smooth animations.",
      features: ["Code Splitting", "Lazy Loading", "Animation Optimization"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We specialize in creating modern web experiences with interactive navigation 
            and engaging user interfaces that drive results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="
                group hover:shadow-2xl transition-all duration-500 ease-in-out
                hover:scale-105 hover:border-primary/30
                bg-card border border-border overflow-hidden
                relative
              "
            >
              {/* Gradient Overlay */}
              <div className="
                absolute inset-0 bg-gradient-to-br from-primary/5 to-primary-glow/5
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
              "></div>
              
              <CardHeader className="relative z-10">
                <div className="mb-4">
                  <div className="
                    p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 w-fit
                    transition-all duration-300 ease-in-out group-hover:scale-110
                  ">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline"
                  className="
                    w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground
                    transition-all duration-300 ease-in-out group-hover:scale-105
                  "
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl p-8 md:p-12 text-primary-foreground">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life 
              with cutting-edge web technologies and interactive design.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="
                bg-primary-foreground text-primary hover:bg-primary-foreground/90
                px-8 py-4 rounded-full text-lg font-semibold
                transition-all duration-300 ease-in-out hover:scale-105
              "
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;