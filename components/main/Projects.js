"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Tilt } from 'react-tilt'
import {projectsData} from '@/constants'


const ProjectItems = () => {
  return projectsData.map((project, index) => (
    <Tilt key={index}>
      <ProjectCard src={project.src} title={project.title} description={project.description} githubLink={project.githubLink}/>
    </Tilt>
  ));
};

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 pt-0" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10">
        <ProjectItems />
      </div>
    </div>
  );
};

export default Projects;