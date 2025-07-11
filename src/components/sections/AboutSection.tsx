import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <div className="space-y-4 text-muted-foreground text-justify">
              <p>
                Hello! I'm Nguyen Anh Quan, a dedicated Bachelor of Computer
                Science student at Ton Duc Thang University, with a strong
                foundation in AI, machine learning, and data engineering.
                Currently, I serve as an AI Engineer at GFI Group, where I
                design and maintain scalable end-to-end ETL pipelines on GCP,
                reducing data processing time by 40% and achieving 30% cost
                reduction through BigQuery optimization and data modeling best
                practices.
              </p>
              <p>
                My experience spans roles such as a Data Engineer at RE.LOVED,
                where I optimized GTM setup for 90% data accuracy, and as an AI
                Researcher at TDTU NLP-KD Lab, where I've built RAG-based
                educational assistants with 80% retrieval accuracy and deployed
                chatbot systems serving 50+ weekly users. I've also fine-tuned
                Vietnamese NLP models using LoRA and transformer architectures.
              </p>
              <p>
                Passionate about solving complex problems, I bring expertise in
                AI/ML technologies, cloud platforms (GCP, AWS, Azure), and
                production deployment. My achievements include 3rd place in
                mAInia AI Hackathon (2025) and contributions to the NLP research
                community through academic papers and conference presentations.
              </p>
              <div className="pt-2">
                <h3 className="text-foreground font-medium mb-2">
                  Here are a few technologies I've been working with recently:
                </h3>
                <ul className="grid grid-cols-2 gap-1 text-sm">
                  {[
                    "Python",
                    "FastAPI",
                    "LangChain",
                    "GCP",
                    "AWS",
                    "Hugging Face",
                    "LoRA",
                    "TypeScript",
                  ].map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <Card className="overflow-hidden border border-muted bg-card/30 hover:bg-card/50 transition-colors animate-float">
              <CardContent className="p-0">
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img
                    src="/nguyenanhquan.JPG"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium">AI Engineer</h3>
                  <p className="text-sm text-muted-foreground">
                    Passionate about solving complex problems with AI
                  </p>
                </div>
              </CardContent>
            </Card>
            {/* 
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold gradient-text">1+</div>
                  <p className="text-xs text-muted-foreground">
                    Years Experience
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <p className="text-xs text-muted-foreground">
                    Projects Completed
                  </p>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
