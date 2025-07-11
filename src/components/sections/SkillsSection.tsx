import React from "react";

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  {
    name: "Python",
    icon: "/icons/python.png",
  },
  {
    name: "SQL",
    icon: "/icons/sql.png",
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.png",
  },
  {
    name: "FastAPI",
    icon: "/icons/fastapi.png",
  },
  {
    name: "LangChain",
    icon: "/icons/langchain.png",
  },
  {
    name: "Flask",
    icon: "/icons/flask.png",
  },
  {
    name: "GCP",
    icon: "/icons/gcp.png",
  },
  {
    name: "AWS",
    icon: "/icons/aws.png",
  },
  {
    name: "Azure",
    icon: "/icons/azure.png",
  },
  {
    name: "Docker",
    icon: "/icons/docker.png",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.png",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.png",
  },
  {
    name: "Hugging Face",
    icon: "/icons/huggingface.png",
  },
  {
    name: "Pinecone",
    icon: "/icons/pinecone.png",
  },
  {
    name: "GA4",
    icon: "/icons/ga4.png",
  },
  {
    name: "Git",
    icon: "/icons/git.png",
  },
];

const SkillsSection = () => {
  return (
    <div className="py-16">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 relative">
              <img
                src={skill.icon}
                alt={`${skill.name} icon`}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-medium text-center uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
