import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Lock, Network, Server, Settings } from "lucide-react";

const AzureRange = () => {
  const services = [
    "Azure Portal & Azure CLI",
    "Azure Resource Manager (ARM) & Bicep",
    "Azure Virtual Machines (VMs)",
    "Azure Storage (Blob, File, Table, Queue)",
    "Azure Virtual Networks (VNet)",
    "Azure Load Balancer",
    "Azure Monitor & Log Analytics",
    "Azure Backup & Site Recovery",
    "Azure App Services",
    "Azure Networking (NSGs, Private Link, Peering)",
    "Azure Kubernetes Service (AKS)",
    "Azure Automation & Runbooks",
    "Azure Security Center (Defender for Cloud)",
    "Azure Key Vault",
    "Azure Policies",
    "Azure Virtual Desktop (AVD)",
    "Azure Infrastructure as Code (IaC)",
  ];

  const sandboxes = [
    {
      title: "Azure Storage Sandbox",
      description: "Work with blobs, shared access signatures, and tools for uploading, securing, and managing data.",
      launchTime: "2 min",
      runTime: "120 min",
      icon: Database,
    },
    {
      title: "Azure Networking Sandbox",
      description: "Manage virtual networks, peering, public IPs, and troubleshooting connectivity.",
      launchTime: "2 min",
      runTime: "120 min",
      icon: Network,
    },
    {
      title: "Azure Compute Sandbox",
      description: "Manage and configure virtual machines, extensions, and automation tools like cloud-init and scripts.",
      launchTime: "3 min",
      runTime: "120 min",
      icon: Server,
    },
  ];

  return (
    <section id="azure-range" className="py-20 bg-gradient-azure relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Cloud className="w-12 h-12 text-azure" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Azure Range</h2>
          </div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Direct access to Azure cloud services. Practice and skill up on cloud technologies directly in Azure with a sandboxed environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sandboxes.map((sandbox, index) => {
            const Icon = sandbox.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur border-azure/20 hover:border-azure/50 transition-all hover:scale-105">
                <Icon className="w-10 h-10 text-azure mb-4" />
                <h3 className="text-xl font-bold mb-2 text-foreground">{sandbox.title}</h3>
                <p className="text-foreground/70 mb-4">{sandbox.description}</p>
                <div className="flex gap-4 text-sm">
                  <Badge variant="secondary" className="bg-azure/20 text-azure border-azure/30">
                    Launch: {sandbox.launchTime}
                  </Badge>
                  <Badge variant="secondary" className="bg-azure/20 text-azure border-azure/30">
                    Run: {sandbox.runTime}
                  </Badge>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="bg-card/30 backdrop-blur rounded-lg p-8 border border-azure/20">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-8 h-8 text-azure" />
            <h3 className="text-2xl font-bold text-foreground">Azure Services & Technologies</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {services.map((service, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm border-azure/30 hover:bg-azure/10 transition-colors">
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureRange;
