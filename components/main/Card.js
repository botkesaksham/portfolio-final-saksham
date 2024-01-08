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
        icon={<div className='flex justify-center items-center w-full h-full'>
        <img
          src={item.icon}
          alt={item.company_name}
          className='w-[60%] h-[60%] object-contain bg-black'
        />
      </div>}
        iconStyle={{background:"#000"}}
        visible={inView}
      >
        <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
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
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
      </VerticalTimelineElement>
    </div>
  );
}