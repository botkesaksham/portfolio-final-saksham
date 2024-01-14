import Image from "next/image";
import { FaGithub } from 'react-icons/fa';
import React from "react";
interface Props {
  src: string;
  title: string;
  description: string;
  githubLink: string;
}

const ProjectCard = ({ src, title, description, githubLink }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border-2 border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-white bg-black">
            <FaGithub size={24} />
          </a>
        </div>
        <p className="mt-2 text-gray-300 text-clip font-medium">{description}</p>
      </div>
      
    </div>
  );
};

export default ProjectCard;
