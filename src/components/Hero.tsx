import { Button } from "@/components/ui/button";
import { Cloud, Shield, Network, Server } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

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
          <p className="text-xl md:text-2xl text-foreground/90 mb-12 leading-relaxed">
            Hands-on IT training environments where professionals master cloud, networking, Microsoft technologies, and cybersecurity
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("azure-range")}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-6 border-azure hover:bg-azure/10 hover:border-azure/50 transition-all"
            >
              <Cloud className="w-8 h-8 text-azure" />
              <span className="text-sm font-semibold">Azure Range</span>
            </Button>
            <Button
              onClick={() => scrollToSection("microsoft-range")}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-6 border-microsoft hover:bg-microsoft/10 hover:border-microsoft/50 transition-all"
            >
              <Server className="w-8 h-8 text-microsoft" />
              <span className="text-sm font-semibold">Microsoft Range</span>
            </Button>
            <Button
              onClick={() => scrollToSection("network-range")}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-6 border-network hover:bg-network/10 hover:border-network/50 transition-all"
            >
              <Network className="w-8 h-8 text-network" />
              <span className="text-sm font-semibold">Network Range</span>
            </Button>
            <Button
              onClick={() => scrollToSection("cyber-range")}
              variant="outline"
              className="flex flex-col items-center gap-2 h-auto py-6 border-cyber hover:bg-cyber/10 hover:border-cyber/50 transition-all"
            >
              <Shield className="w-8 h-8 text-cyber" />
              <span className="text-sm font-semibold">Cyber Range</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
