import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Target, Award, Zap, Eye, TrendingUp } from "lucide-react";

const CyberRange = () => {
  const tools = ["OpenVAS", "NMAP", "Wireshark", "Splunk"];

  const skills = [
    "Security Incident and Event Management",
    "Vulnerability Assessments",
    "Network and Packet Analysis",
    "Incident Detection",
  ];

  const features = [
    {
      title: "Realistic Challenges",
      description: "Dynamic 'capture the flag' challenges that simulate real-world scenarios, exposing vulnerabilities, breaches and cyber threats.",
      icon: Target,
    },
    {
      title: "Expert Guidance",
      description: "Invaluable guidance from seasoned security professionals, equipping you with the latest insights and solutions.",
      icon: Award,
    },
    {
      title: "Defense Tools",
      description: "Master top-tier defense tools and techniques through experiential learning with measurable achievements.",
      icon: Shield,
    },
    {
      title: "Real World Application",
      description: "Sharpen your abilities by facing and overcoming real-world challenges in an unparalleled training platform.",
      icon: Zap,
    },
  ];

  const upcomingEvents = [
    "Web Application Security",
    "Detecting Malicious PowerShell",
    "Advanced Threat Hunting",
  ];

  return (
    <section id="cyber-range" className="py-20 bg-gradient-cyber relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-cyber" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Cyber Range</h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Enhance your cybersecurity skills with a cutting-edge practical training environment designed to keep you ahead of emerging threats.
          </p>
          <div className="mt-6">
            <Button asChild variant="default" size="lg">
              <a href="https://fast.wistia.com/embed/channel/ldye5f7b67?wchannelid=ldye5f7b67&wmediaid=gg8rfkzk3y" target="_blank" rel="noopener noreferrer">
                View Video
              </a>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-cyber/20 hover:border-cyber/50 transition-all hover:scale-105">
                <Icon className="w-10 h-10 text-cyber mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card/30 backdrop-blur border-cyber/20">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-10 h-10 text-cyber" />
              <h3 className="text-2xl font-bold text-foreground">Core Security Skills</h3>
            </div>
            <p className="text-foreground/80 mb-6">
              Start your cyber range journey by mastering essential tools. These activities will prepare you for more advanced challenges ahead.
            </p>
            <div className="space-y-3 mb-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-cyber"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-3">TOOLS & TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} className="bg-cyber/20 text-cyber border-cyber/30 hover:bg-cyber/30">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/30 backdrop-blur border-cyber/20">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-10 h-10 text-cyber" />
              <h3 className="text-2xl font-bold text-foreground">Coming Soon</h3>
            </div>
            <p className="text-foreground/80 mb-6">
              Our next events in the cyber range tackle key topics in cybersecurity. Learn to detect attacks against web applications, identify malicious activity, and secure authentication systems.
            </p>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-4 rounded-lg bg-cyber/5 border border-cyber/20">
                  <div className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyber" />
                    <span className="text-foreground font-medium">{event}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-r from-cyber/10 to-cyber/5 border-cyber/30 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Built for beginners and seasoned professionals
          </h3>
          <p className="text-foreground/80 text-lg">
            Transform your expertise into an unassailable asset against evolving cyber risks through hands-on CTF challenges.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default CyberRange;
