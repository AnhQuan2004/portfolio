import React, { useState } from "react";
import {
  Calendar,
  Building,
  ExternalLink,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  yearStart: string;
  yearEnd: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "GFI",
    title: "AI Engineer",
    company: "GFI Group",
    period: "Dec 2024 - NOW",
    yearStart: "2024",
    yearEnd: "NOW",
    description: `• Designed and maintained scalable end-to-end ETL pipelines on GCP, reducing data processing time by 40% for both batch and real-time workflows using Cloud Composer, external APIs, and cloud storage.

• Optimized BigQuery performance and cost efficiency, achieving 30% cost reduction through SQL tuning, partitioning, clustering, and best practices in data modeling.

• Managed GCS-based data lake architecture and implemented HTTPS Load Balancing for Cloud Run services to ensure high availability, autoscaling, and reliable global routing.

• Designed and deployed AI chat systems using LangChain and AWS, including intent classification, memory integration, and dynamic response generation, improving engagement and reducing failure rate by 20%.

• Enhanced AI agent performance through prompt engineering, cloud-based inference optimization, and systematic evaluation to ensure accurate, context-aware interactions.

• Researched and applied cutting-edge LLM and vector database technologies to build scalable, production-ready AI solutions in collaboration with cross-functional teams.`,
    technologies: [
      "GCP",
      "BigQuery",
      "Cloud Composer",
      "LangChain",
      "AWS",
      "Cloud Run",
      "LLM",
      "Vector Databases",
    ],
  },
  {
    id: "RELOVED",
    title: "Data Engineer",
    company: "RE.LOVED - Sustainable Fashion",
    period: "Jun 2024 - Jan 2025",
    yearStart: "2024",
    yearEnd: "2025",
    description: `• Optimized GTM setup for 90% data accuracy (GA4, Facebook Pixel).

• Built scalable data architecture for marketing, sales, and operations data.

• Implemented comprehensive tracking solutions to support business intelligence and decision-making processes.`,
    technologies: [
      "Google Tag Manager",
      "GA4",
      "Facebook Pixel",
      "Data Architecture",
    ],
  },
  {
    id: "TDTU",
    title: "AI Researcher",
    company: "TDTU NLP-KD LAB",
    period: "Jan 2024 - NOW",
    yearStart: "2024",
    yearEnd: "NOW",
    description: `• Developed educational RAG assistant with 80% retrieval accuracy, and built chatbot systems (50+ weekly users) using OpenAI API, LangChain, and FastAPI.

• Fine-tuned Vietnamese NLP models using LoRA and transformer architectures, achieving strong performance in sentiment analysis and text classification tasks.

• Contributed to NLP research community by reviewing state-of-the-art papers, experimenting with small model efficiency, and presenting at academic conferences.

• Independently coded and deployed a full-stack AI project for MindWell, a mental health platform, handling both frontend and backend development single-handedly.`,
    technologies: [
      "OpenAI API",
      "LangChain",
      "FastAPI",
      "LoRA",
      "Transformers",
      "Vietnamese NLP",
      "RAG",
      "Full-stack Development",
    ],
  },
  {
    id: "LOTUS",
    title: "Software Engineer",
    company: "Lotus Company",
    period: "Jun 2023 - Dec 2023",
    yearStart: "2023",
    yearEnd: "2023",
    description: `• Developed full-stack app with AI chatbot, reducing support workload by 35%.

• Set up CI/CD pipelines and cloud workflows for fast AI feature iteration.

• Built comprehensive software solutions integrating AI capabilities to improve operational efficiency and user experience.`,
    technologies: [
      "Full-stack Development",
      "AI Chatbot",
      "CI/CD",
      "Cloud Workflows",
    ],
  },
];

const ExperienceSection = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="space-y-8">
      <h2 className="section-title">Work Experience</h2>

      <p className="text-muted-foreground mb-8 text-justify">
        My professional journey in AI engineering has been marked by impactful
        roles where I've applied cutting-edge techniques to solve complex
        problems.
      </p>

      <div className="relative mt-8">
        {/* Timeline vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-primary/20" />

        {/* Experience items */}
        <div className="space-y-16">
          {experiences.map((exp, index) => {
            const isExpanded = expandedItems.has(exp.id);
            return (
              <div key={exp.id} className="relative pl-24">
                {/* Year indicator on the left */}
                <div className="absolute left-0 top-2 flex flex-col items-center text-primary">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative">
                    <Calendar className="w-6 h-6 absolute" />
                  </div>
                  <span className="text-xs font-medium mt-2 font-mono">
                    {exp.yearStart}-{exp.yearEnd}
                  </span>
                </div>

                {/* Content */}
                <div className="rounded-lg border-2 border-border bg-card/10 hover:bg-card/20 transition-all p-5 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Building className="h-4 w-4 mr-1.5" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-mono">
                      {exp.period}
                    </span>
                  </div>

                  {/* Details that can be expanded */}
                  {isExpanded && (
                    <div className="transition-all duration-300 ease-in-out">
                      <div className="text-muted-foreground mb-5 leading-relaxed text-justify">
                        {exp.description.split("\n").map((line, index) => (
                          <p
                            key={index}
                            className={line.trim() === "" ? "h-2" : "mb-2"}
                          >
                            {line}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-accent/20 hover:bg-accent/30 text-foreground font-mono text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-primary hover:text-primary/80 p-0 h-auto font-medium"
                    onClick={() => toggleExpanded(exp.id)}
                  >
                    {isExpanded ? (
                      <>
                        Hide Details <ChevronDown className="h-3 w-3 ml-1" />
                      </>
                    ) : (
                      <>
                        View Details <ChevronRight className="h-3 w-3 ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
