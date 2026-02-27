import { defaultOffset } from "motion";
import { Accordion } from "../components/accordion";


const Quant_Math = [
    { title: "Mathematics Courses", 
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Probability</li>
          <li>Linear Algebra</li>
          <li>Differential Equations</li>
          <li>Discrete Math</li>
          <li>Multivariable Calculus</li>
          <li>Engineering Math</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
]

const CS_Systems = [

  { title: "Object-Oriented Programming (Python, C++, Java)", 
    content: (`Implemented data structures and control logic in Python and C++; Java used in formal OOP coursework`),
    defaultOpen: true,
  },
  {
    title: "Assembly",
    content: (
    `Wrote multiple MSP430 programs in Assembly for embedded systems applications`
    ),
  },
  { title: "Linux OS", content: `Linux-based development and systems programming` 
  },
  { title: "Git", content: `Git (CLI & GitHub) for version-controlled collaborative development`
  },
  { title: "SQL", content: `PostgreSQL for relational schema design and backend integration`
  }, 
  { title: "Microcontroller Programming",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>Raspberry Pi programming in C and Python</li>
          <li>Pico CNC with grblHAL firmware programming in C (MQP Mini CNC Mill)</li>
          <li>PLC programming: Arduino PLC IDE</li>
        </ul>
      </div>
    ),
  },
  { title: "MATLAB", content: `MATLAB for controls, robotics modeling, circuit analysis, and mathematical computation with visualization.` 
  },
  { title: "Software Engineering", content: `PERN stack: PostgreSQL, Express, React, and Node.js`
  },
]

const Robotics_EmbeddedSys = [
    { title: "Artificial Intelligence in Robotics",     
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>A* search</li>
          <li>Dijkstra's algorithm</li>
          <li>Adversarial search</li>
          <li>Markov decision processes</li>
          <li>Reinforcement learning</li>
          <li>Neural networks</li>
          <li>Deep learning</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
    { title: "Unified Robotics Courses",     
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-1">
          <li>RBE2001: Mechanical Applications in Robotics</li>
          <li>RBE2002: Sensing and Perception</li>
          <li>RBE3001: Manipulation</li>
          <li>RBE3002: Navigation</li>
        </ul>
      </div>
    ),
    defaultOpen: true,
  },
  { title: "Communication Protocols", content: (
    <div className="space-y-4">
      <ul className="list-disc pl-5 space-y-1">
        <li>UART</li>
        <li>I2C</li>
        <li>SPI</li>
      </ul>
    </div>
  ),
  defaultOpen: true,
  },
  { title: "Industrial Robotics", content: `Programming: Arduino PLC, a UR5 Universal Robots arm, and an M-1iA FANUC delta robot`
  },
]

const MQPAccordion = [
  {
    title: "Mini CNC Mill",
    content: (
      <div className="space-y-4 pb-2">
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed and implemented mechanical bed leveling</li>
          <li>Established a GitHub-based workflow for version control and remote collaboration on SOLIDWORKS files</li>
          <li>Performed load and torque calculations to verify bearing capacity along the linear rails</li>
          <li>Discovered that the software "glitches" noticed by students were actually the result of electromagnetic interference (EMI)
            from the VFD powering the spindle</li>
          <li>Developed a laser probe and safety system for the automatic tool changer</li>
          <li>Calibrated axis motors and drivers</li>
          <li>Created new fixturing for the work area</li>
          <li>Lead technical contributor across mechanical design, controls integration, and systems diagnostics.</li>
        </ul>

        {/* Centered button */}
        <div className="flex justify-center mt-2 mb-2">
          <a
            href="https://digital.wpi.edu/concern/parent/h128nk052/file_sets/gf06g7088"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-4 py-2 bg-slate-800 text-blue-400 border-slate-500 rounded-2xl shadow transition
            hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
              View Full Report
            </button>
          </a>
        </div>
      </div>
      
    ),
    defaultOpen: true,
  },
];

export default function Education() {
  return (

    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-xl md:text-4xl mb-12 text-slate-400 font-semibold">
          Education
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed">
          <p className="mb-24">
            Robotics Engineering (WPI) with emphasis on quantitative modeling, control systems, and software development.
          </p>
        </div>
        {/* Accordions */}
        <div className="space-y-12">

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Quantitative & Mathematical Foundations
          </p>
          <Accordion items={Quant_Math} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Computer Science & Systems
          </p>
          <Accordion items={CS_Systems} />

          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Robotics & Embedded Systems
          </p>
          <Accordion items={Robotics_EmbeddedSys} />
          
          <p className="mb-2 text-center sm:mb-6 text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl font-semibold leading-10 tracking-tight">
            Major Qualifying Project
          </p>
          <Accordion items={MQPAccordion} />

        </div>
      </div>
    </div>
    );
}
