import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import azureImage from "@/assets/azure-range.jpg";
import microsoftImage from "@/assets/microsoft-range.jpg";
import networkImage from "@/assets/network-range.jpg";
import cyberImage from "@/assets/cyber-range.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const ranges = [
    {
      id: "azure-range",
      title: "Azure Range",
      description: "Master Azure cloud services with hands-on labs for compute, storage, networking, and security",
      image: azureImage,
      color: "azure"
    },
    {
      id: "microsoft-range",
      title: "Microsoft Range",
      description: "Practice with Windows Server, Active Directory, and enterprise Microsoft technologies",
      image: microsoftImage,
      color: "microsoft"
    },
    {
      id: "network-range",
      title: "Network Range",
      description: "Build and troubleshoot networks with routers, switches, and real-world scenarios",
      image: networkImage,
      color: "network"
    },
    {
      id: "cyber-range",
      title: "Cyber Range",
      description: "Develop security skills in a real world environment through Capture the Flag activities using applications like Splunk, Wireshark, OpenVas, and NMap",
      image: cyberImage,
      color: "cyber"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            StormWind Ranges
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-16 leading-relaxed">
            Hands-on IT training environments where professionals master cloud, networking, Microsoft technologies, and cybersecurity
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ranges.map((range) => (
              <Card
                key={range.id}
                onClick={() => scrollToSection(range.id)}
                className={`group cursor-pointer overflow-hidden bg-card/50 backdrop-blur border-${range.color}/20 hover:border-${range.color}/50 transition-all hover:scale-105 hover:shadow-xl`}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={range.image}
                    alt={range.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-foreground">{range.title}</h3>
                  <p className="text-sm text-foreground/70 mb-4">{range.description}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full border-${range.color}/30 hover:bg-${range.color}/10`}
                  >
                    Explore Range
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
