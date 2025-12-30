import { Accordion } from "../components/accordion";

const coursesAccordion = [
  {
    title: "Core Robotics Courses",
    content: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Introduction to Robotics</li>
        <li>Robot Dynamics</li>
        <li>Robot Control</li>
      </ul>
    ),
    defaultOpen: true,
  },
  {
    title: "Mechanical Focus",
    content: "Coursework emphasizing kinematics, dynamics, and mechanical design.",
  },
  {
    title: "Electrical & Systems",
    content: "Sensors, actuators, embedded systems, and signal processing.",
  },
]

const projectsAccordion = [
  { title: "Capstone Project", content: "Autonomous robotic system design." },
  { title: "Vision System", content: "Computer vision for object detection." },
  { title: "Controls Lab", content: "PID and state-space control." },
  { title: "Mechatronics", content: "Integrated mechanical and electrical systems." },
]

const electivesAccordion = [
  { title: "AI for Robotics", content: "Planning, learning, and autonomy." },
  { title: "Human-Robot Interaction", content: "User-centered robot design." },
  { title: "Mobile Robotics", content: "Localization and mapping." },
  { title: "Advanced Sensors", content: "Lidar, IMUs, and sensor fusion." },
]


export default function Robotics_engineering() {
  return (

    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-white">
          Robotics Engineering
        </h2>
        
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-6">
            I earned a Bachelor of Science in Robotics Engineering from Worcester Polytechnic Institute in December of 2025.
            The program is ABET-accredited. Because this degree is less common than a typical mechanical or electrical
            engineering degree, I created this page to provide more details.
          </p>
          <p className="mb-26">
            The following is a list of the relevant courses I took that pertain to the field of Robotics Engineering.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-12">

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Unified Robotics
          </p>
          <Accordion items={coursesAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Computer Science
          </p>
          <Accordion items={projectsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Electrical Engineering
          </p>
          <Accordion items={projectsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Mechanical Engineering
          </p>
          <Accordion items={projectsAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Physics
          </p>
          <Accordion items={electivesAccordion} />

          <p className="mb-2 text-center sm:mb-6 text-slate-300  sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Physics
          </p>
          <Accordion items={electivesAccordion} />
        </div>

      </div>
    </div>

    );
}

