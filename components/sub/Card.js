import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

export default function Card({ item }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        date={item.date}
        contentStyle={{
          background: "#051427",
          color: "#fff",
          minHeight: "200px",
        }}
        contentArrowStyle={{ borderRight: "10px solid #051427" }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={item.icon}
              alt={item.company_name}
              className="w-[80%] h-[80%] object-contain bg-transparent"
            />
          </div>
        }
        iconStyle={{ background: "#000" }}
        visible={inView}
      >
        <div>
          <h3 className="text-purple-500 text-xl font-poppins font-semibold">
            {item.title}
          </h3>
          <p className="text-black-500 font-medium text-base">
            {item.company_name}
          </p>
        </div>

        <ul className="my-5 list-disc ml-5 space-y-2">
          {item.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-black-500/50 pl-1 text-sm font-medium"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </div>
  );
}
