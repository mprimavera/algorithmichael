"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export default function Projects() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-full">
          My Projects (More coming over the next few days)
        </h2>
        <p className="text-slate-500 lg:text-xl md:text-base max-w-3xl">
          I’ve included videos showing some of the projects I’ve worked on to demonstrate the technical skills I’ve developed. This is not a comprehensive list. At Milara, I was not permitted to take photos or videos of the sorters I worked on. During my time there, I performed field service engineering as part of their software team at cleanroom semiconductor fabrication facilities.
        </p>
      </div>

      <div className="min-h-screen flex flex-wrap justify-center gap-x-16 gap-y-20 mt-10 px-25 lg:px-50">

        {/* Industrial Robotics */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/YAJ9Wzltu34?si=KOFma-CiZnBBG-z9"
                title="Industrial Robotics"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Automation line featuring a Fanuc M-1iA and UR5e, integrated with conveyors and sensors.
            </p>

            <p className="text-sm text-neutral-400">
              My primary responsibility was programming the central UR5e, after selecting it to control the system via the PLC. I also handled the video editing.
            </p>
          </BackgroundGradient>
        </div>

        {/* RBE3001 Vision */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/EnIhbuE6zA0?si=p2Yk1_7nzTG5uk_B"
                title="Robot Vision"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Using MATLAB and vision sensors to locate, grasp, and sort balls by color.
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                On a team of three, we programmed the robot using MATLAB. We used the MATLAB Computer Vision Toolbox, and libraries for powering the servo motors. All trajectory planning was written from scratch using both forward and inverse kinematics. (The video was not intended for a presentation, just for personal reflection.)
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* Embedded systems PD control*/}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/JtrBYZ2HA0A?si=AOZyXL8qBJvhRXvJ"
                title="Embedded Programming"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Embedded programming of proportional-derivative (PD) control in C
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                Using Linux OS and the Pico SDK library, all code was written from scratch. This included the display code, as well as encoder-based
                proportional and derivative control. Integral control was used in other projects.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/Cx7HpJapaZQ?si=XWw0iW-Nd3knbpQy"
                title="Major Qualifying Project"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Major Qualifying Project (MQP): mini CNC mill
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This is the final presentation video for our eleven-student major qualifying project (MQP) at WPI. I narrated the video and demonstrated
                my CAD (SOLIDWORKS), MATLAB work, and KiCad schematic creation.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill: presentation of finalized R&D phase */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/4MgPYenIZXw?si=HAi-hV11wRllbVWy"
                title="MQP mini CNC mill: presentation of finalized R&D phase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: presentation of finalized R&D phase
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video is a presentation of the finalized R&D phase for the mechanical bed leveling I designed for the MQP (major qualifying
                project) as a senior at WPI. This video illustrates the real-world application of engineering pricipals and proceedures I was
                responsible for. A few of the following videos on this page show the successful implementation of the engineering.
              </p>
              <p className="text-sm text-neutral-400">
                This was created as an update for my MQP advisor, while he was away at a conference.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill bed leveling torque test */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dUWLDC4rL10?si=-Ljyafnw-oXDsngT"
                title="MQP mini CNC mill bed leveling torque test"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: successful bed leveling torque test
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video shows successful testing of the helicoil’s ability to withstand the torque needed to fasten the mini CNC mill’s
                work plate to the linear rails and ball screw (200 inch-lbs). The test was performed on scrap materials before machining the
                actual work plate, keeping the project within budget.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill bed leveling implementation */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/TDziKYPmKuU?si=am7WkGicJQjHP1yd"
                title="MQP mini CNC mill bed leveling helicoil torque testing"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: successful bed leveling implementation
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video shows the mechanical bed leveling I engineered, successfully integrated into a mini CNC mill. The bed could be
                leveled within ±0.127 µm across the length and width of the work plate that held the vice for machining parts.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill: presentation of FEMA analysis for a tool probing concept */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/-mwcSxoPo5E?si=tWpsAsEATLx_ic8H"
                title="MQP mini CNC mill: presentation of finalized R&D phase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: presentation of FEMA analysis for a tool probing concept
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video is a presentation of the FEMA analysis I did for a tool probing device I proposed to the MQP team. The idea was
                to implement tool probing with a laser instead of a conductive plate, for the reasons I explain in the video.
              </p>
              <p className="text-sm text-neutral-400">
                This was created as an update for my MQP advisor, while he was away at a conference.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill: presentation of space restrictions for add-ons */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/gQxDrpg8AZk?si=MbQkz4IWz_AYlgvJ"
                title="MQP mini CNC mill: presentation of finalized R&D phase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: presentation of space restrictions for add-ons
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video is a presentation of the issues with space for the add-ons our team were attempting to include in the mini CNC mill.
                I created a box in SOLIDWORKS that represented the reachable work area, and used acrylic as the material so the box was visible
                while transparent. I then placed the add-ons into the assembly—the tool-changer magazine and vise—and using the assembly I
                showed that the conductive tool probe would not have anywhere to go.
              </p>
              <p className="text-sm text-neutral-400">
                This was the determining factor that resulted in our team
                changing the design from a conductive tool probe to a laser probe.
              </p>
              <p className="text-sm text-neutral-400">
                This was created as an update for the other students on my MQP team.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill stepper motor and driver calibration */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/_zweEVm8UzY?si=8ROtlGtbpqZbNMk3"
                title="MQP mini CNC mill emergency stop"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: stepper motor and driver calibration
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video shows the successful calibration of the stepper motor's driver. The movement is smooth and controlled.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* MQP mini CNC mill emergency stop */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/QSF5KapfTn4?si=a8W2FWM4IfbEctrs"
                title="MQP mini CNC mill emergency stop"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              MQP mini CNC mill: successful e-stop testing
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video shows the successful testing of the emergency-stop system developed for the mini CNC mill. Our team designed the e-stop to be normally closed, cutting power to the motor drivers while preserving CNC computer status and control. (The rattling sound in the background is the room heater.)
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* Adjustable Duty Cycle */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/4sNkf1GcZYo?si=Q8oHnvzp2FLXDE7U"
                title="Adjustable Duty Cycle"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Embedded programming in C: adjustable duty cycle
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                I used a potentiometer with an ADC module to adjust the duty cycle output of a PWM pin on a Raspberry Pi Pico 2 W microcontroller. The code was written in C using a Linux environment. An oscilloscope verified correct operation within ±2.5%.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* ADC Voltmeter */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/NoOMwVs4Xgc?si=h2jmUgXBTvQxhXA_"
                title="ADC Voltmeter"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Embedded programming in C: ADC voltmeter
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                I created a voltmeter using a Raspberry Pi Pico 2 W microcontroller, potentiometer, and 7-segment 4-digit LED display. Besides the SDK library, all code was written from scratch. The display runs on a timer interrupt, and output is based on the ADC reading of the potentiometer's wiper pin.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* Ethereum mining rig */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/iZbmoNKK79Q?si=ySQ3apqZFEGSVdLW"
                title="AlphaOmega LLC First Prototype: Cryptocurrency Mining Rig"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              AlphaOmega LLC's first prototype: cryptocurrency mining rig
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                After the Bitcoin price spike in late 2017, I built an Ethereum mining rig. At the time, rigs sold for $10,000–$20,000 online. I built mine for ~$1,200, realizing a large potential profit.
              </p>
              <p className="text-sm text-neutral-400">
                After a few months of establishing a legal entity and e-commerce store, the price crashed and the product was no longer feasible. This marked the beginning of AlphaOmega LLC.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* Additive manufacturing prototyping */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/wOfjqY_zv5k?si=st4e9MHhEL03FJ1Z"
                title="Additive Manufacturing Prototyping"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Additive manufacturing prototyping of a new ergonomic thumb screw design
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                This video demonstrates my experience prototyping with additive manufacturing. It is more cost-effective to develop ideas in
                CAD, then produce parts on a 3D printer, before final manufacturing.
              </p>
            </div>
          </BackgroundGradient>
        </div>

        {/* Dynamic Price Modeling */}
        <div className="w-full max-w-[400px] min-w-[400px] mx-auto">
          <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900 flex flex-col items-center h-[500px]">    
            <div className="w-full aspect-video mb-4">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ImnPgaXRYiE?si=qbOXJHOjimXK0Olx"
                title="Dynamic Price Modeling"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
              Dynamic price modeling using MATLAB and multivariable calculus
            </p>

            <div className="mb-2 max-h-40 sm:max-h-40 overflow-y-auto pr-2">
              <p className="text-sm text-neutral-400">
                I created dynmaic price modeling, which was based on the fixed and variable costs of the products I was selling.
              </p>

              <p className="text-sm text-neutral-400">
                After creating expense spreadsheets in Excel, I used the fixed and variable costs to create a formula where the
                intersection of a level plane with a 3D curve yeilded the price at which to sell the variable quantity to achieve the desired
                constant profit rate.
              </p>

              <p className="text-sm text-neutral-400">
                This modeling resulted in significant cost savings for larger quantities, driving sales
                further than pricing without taking variable costs into consideration.
              </p>
            </div>
          </BackgroundGradient>
        </div>

      </div>
    </div>
  );
}
