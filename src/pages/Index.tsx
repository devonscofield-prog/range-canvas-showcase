import Hero from "@/components/Hero";
import AzureRange from "@/components/AzureRange";
import MicrosoftRange from "@/components/MicrosoftRange";
import NetworkRange from "@/components/NetworkRange";
import CyberRange from "@/components/CyberRange";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <AzureRange />
      <MicrosoftRange />
      <NetworkRange />
      <CyberRange />
    </div>
  );
};

export default Index;
