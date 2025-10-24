import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Router, Cable, Globe } from "lucide-react";

const NetworkRange = () => {
  const protocols = {
    switching: [
      "VLANs",
      "Private VLANs",
      "Trunking",
      "QoS",
    ],
    routing: [
      "OSPF",
      "EIGRP",
      "BGP",
      "Static Routing",
      "Summarization",
      "Redistribution",
      "Route Filtering",
      "Policy-Based Routing",
    ],
    infrastructure: [
      "DNS",
      "DHCP",
      "SSH",
      "GRE",
      "NTP",
    ],
    security: [
      "IPsec Tunnels",
      "ACLs",
      "VACLs",
      "Port Security",
    ],
    ipv6: [
      "OSPFv3",
      "BGP for IPv6",
      "6in4 Tunnels",
      "6to4 Tunnels",
      "6over4 Tunnels",
      "DHCPv6 PD",
      "IPv6 ACLs",
    ],
  };

  const platforms = [
    "Cisco IOS",
    "Cisco Catalyst 9300",
    "Cisco Nexus 9500",
    "Nmap",
    "PowerDNS",
    "Windows Server 2019",
  ];

  const certifications = [
    "Cisco CCNA",
    "CompTIA Network+ N10-009",
    "Cisco CCNP ENCOR",
    "Cisco CCNP ENARSI",
    "Modern Networking with IPv6",
  ];

  return (
    <section id="network-range" className="py-20 bg-gradient-network relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Network className="w-12 h-12 text-network" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Network Range</h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            A dynamic networking sandbox with routers, multi-layer switches, and connected hosts. From simple setups to advanced architectures.
          </p>
        </div>

        <div className="mb-12">
          <Card className="p-8 bg-card/50 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-6">
              <Router className="w-10 h-10 text-network" />
              <h3 className="text-2xl font-bold text-foreground">Over 70 Lab Activities Available</h3>
            </div>
            <p className="text-foreground/80 text-lg">
              Work with full networking devices where you can follow structured labs or break out and experiment with your own configurations.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card/30 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-4">
              <Cable className="w-8 h-8 text-network" />
              <h3 className="text-xl font-bold text-foreground">Switching</h3>
            </div>
            <div className="space-y-2">
              {protocols.switching.map((protocol, index) => (
                <Badge key={index} variant="outline" className="mr-2 border-network/30 hover:bg-network/10">
                  {protocol}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-4">
              <Router className="w-8 h-8 text-network" />
              <h3 className="text-xl font-bold text-foreground">Routing</h3>
            </div>
            <div className="space-y-2">
              {protocols.routing.map((protocol, index) => (
                <Badge key={index} variant="outline" className="mr-2 mb-2 border-network/30 hover:bg-network/10">
                  {protocol}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-8 h-8 text-network" />
              <h3 className="text-xl font-bold text-foreground">Infrastructure</h3>
            </div>
            <div className="space-y-2">
              {protocols.infrastructure.map((protocol, index) => (
                <Badge key={index} variant="outline" className="mr-2 border-network/30 hover:bg-network/10">
                  {protocol}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-network" />
              <h3 className="text-xl font-bold text-foreground">IPv6</h3>
            </div>
            <div className="space-y-2">
              {protocols.ipv6.map((protocol, index) => (
                <Badge key={index} variant="outline" className="mr-2 mb-2 border-network/30 hover:bg-network/10">
                  {protocol}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-4">
              <Router className="w-8 h-8 text-network" />
              <h3 className="text-xl font-bold text-foreground">Platforms</h3>
            </div>
            <div className="space-y-2">
              {platforms.map((platform, index) => (
                <div key={index} className="text-foreground/80 text-sm py-1">
                  • {platform}
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/30 backdrop-blur border-network/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="w-8 h-8 flex items-center justify-center bg-network text-background">
                <span className="text-lg font-bold">✓</span>
              </Badge>
              <h3 className="text-xl font-bold text-foreground">Class Alignment</h3>
            </div>
            <div className="space-y-2">
              {certifications.map((cert, index) => (
                <div key={index} className="text-foreground/80 text-sm py-1">
                  • {cert}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NetworkRange;
