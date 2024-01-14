"use client";
import { experiences } from "@/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import Card from "@/components/sub/Card";
export default function Experience() {
  return (
    <div id="experience" className="md:w-full ml-5 mr-5 ">
    <h1 className="text-[40px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 pb-0">
        My Experience
    </h1>
    <section
      className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10 text-purple-500"
      id="#experience"
    >
      <VerticalTimeline lineColor="#e4e4e7">
        {experiences.map((item, index) => {
          return ( <Card key={index} item={item} /> );
        })}
      </VerticalTimeline>
    </section>
    </div>
  );
}