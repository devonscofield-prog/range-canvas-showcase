import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, HardDrive, Users, Shield } from "lucide-react";

const MicrosoftRange = () => {
  const platforms = [
    { name: "Windows Server 2025", icon: Server },
    { name: "Windows 11", icon: Users },
    { name: "Windows 12", icon: Users },
    { name: "Hyper-V", icon: HardDrive },
    { name: "Microsoft SQL", icon: Server },
  ];

  const technologies = [
    "Windows Active Directory",
    "DNS Services",
    "Hyper-V Virtualization",
    "Group Policy Management",
    "File and Storage Server",
    "DHCP Services",
    "Remote Desktop Services",
    "Windows Security",
    "PowerShell Administration",
    "Windows Deployment Services",
    "Certificate Services",
    "Network Policy Server",
  ];

  const features = [
    {
      title: "Enterprise Operating Systems",
      description: "Work with the latest Windows Server 2025, Windows 11, and Windows 12 in a production-like environment",
      icon: Server,
    },
    {
      title: "Active Directory",
      description: "Master domain services, user management, and organizational structure in a full AD environment",
      icon: Users,
    },
    {
      title: "Virtualization",
      description: "Deploy and manage virtual machines with Hyper-V, including nested virtualization scenarios",
      icon: HardDrive,
    },
    {
      title: "Microsoft Security",
      description: "Implement and test security policies, encryption, and compliance measures across Windows infrastructure",
      icon: Shield,
    },
  ];

  return (
    <section id="microsoft-range" className="py-20 bg-gradient-microsoft relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Server className="w-12 h-12 text-microsoft" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Microsoft Range</h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Master Microsoft technologies and Windows infrastructure with hands-on experience in enterprise environments.
          </p>
          <div className="mt-6">
            <Button asChild variant="default" size="lg">
              <a href="https://app.stormwindstudios.com/replay/169553/introduction-microsoft-range" target="_blank" rel="noopener noreferrer">
                View Video
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-microsoft/20 hover:border-microsoft/50 transition-all hover:scale-105">
                <Icon className="w-10 h-10 text-microsoft mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/30 backdrop-blur rounded-lg p-8 border border-microsoft/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-3">
              <Server className="w-8 h-8 text-microsoft" />
              Platforms & Operating Systems
            </h3>
            <div className="space-y-3">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-microsoft/5 border border-microsoft/20">
                    <Icon className="w-6 h-6 text-microsoft" />
                    <span className="text-foreground font-medium">{platform.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur rounded-lg p-8 border border-microsoft/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Microsoft Technologies</h3>
            <div className="grid grid-cols-1 gap-2">
              {technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 justify-start border-microsoft/30 hover:bg-microsoft/10 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicrosoftRange;
