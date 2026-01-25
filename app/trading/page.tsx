"use client";

import { ReactNode } from "react";

// Helper component for sections
function ProjectSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-4">
      <h3 className="text-center text-slate-400 sm:break-normal max-w-full text-lg sm:text-3xl pb-4 font-semibold leading-10 tracking-tight">
        {title}
      </h3>
      <div className="flex flex-wrap justify-center gap-x-16">
        {children}
      </div>
    </section>
  );
}

export default function Trading() {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-12 text-slate-400 font-semibold">
          Quantitative Research and Development
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p className="mb-6">
            I am a Robotics Engineer with strong foundations in systems design,
            applied mathematics, control theory, and software engineering. In parallel,
            I have over eight years of independent experience designing and evaluating
            systematic trading strategies.
          </p>
          <p className="mb-6">
            This page illustrates my research-to-production workflow: constructing
            quantitative hypotheses from real data, translating them into executable
            strategy logic, and evaluating performance through disciplined numerical
            analysis and out-of-sample testing.
          </p>
        </div>
        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Data Selection and Exploratory Analysis">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Data.png"
                alt="Data Selection and Exploratory Analysis"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl text-slate-400 pt-4">
                The process begins by identifying relevant fundamental drivers and analyzing their relationship to price behavior.
              </p>

              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This example uses data readily available on the internet, and it is displayed here using Excel for visualization purposes.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Model Construction and Parameter Estimation">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Strategy.png"
                alt="Model Construction and Parameter Estimation"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl mb-2 text-slate-400 pt-4">
                Using the data, a quantitative model is constructed to estimate a conditional price expectation,
                which is then evaluated and refined through numerical analysis.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This formula is shown solely as an example of the process and does not necessarily correspond to the
                data shown in the images on this page. The underlying analysis is performed programmatically; Excel is used here solely for visualization
                and parameter inspection.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Strategy Implementation and Execution Logic">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Code.png"
                alt="Strategy Implementation and Execution Logic"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl mb-2 text-slate-400 pt-4">
                The model is then implemented as executable strategy logic, integrating signal generation, state management, and execution constraints.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                The underlying platform provides market data and visualization. All strategy logic,
                signal generation, and trade state handling were designed and implemented by me.
                These examples are provided solely to illustrate system design and research workflow,
                not to disclose proprietary methods or claim statistical edge.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Out-of-Sample Testing and Performance Attribution">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Results_1.png"
                alt="Out-of-Sample Testing and Performance Attribution"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl mb-2 text-slate-400 pt-4">
                Models are evaluated using out-of-sample testing to assess robustness under changing market conditions.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This report is generated by the underlying trading platform using executed orders
                produced by my strategy logic. It is included to demonstrate end-to-end system
                integration—from signal generation through execution and reporting—rather than
                to emphasize profitability.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Robustness Analysis and Model Refinement">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Results_2.png"
                alt="Robustness Analysis and Model Refinement"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl mb-2 text-slate-400 pt-4">
                Evaluation emphasizes risk-adjusted performance via quantitative numerical output.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Positioning and Role Alignment">
            <div className="w-full max-w-7xl mx-auto px-4">
              <p className="text-base sm:text-xl text-slate-400 pt-4 mb-6">
                These screenshots represent my real, original work in quantitative research and systematic strategy development,
                demonstrating the actual processes I use rather than generalized examples. I am considering quant developer or research
                roles where rigorous modeling, disciplined evaluation, and production-quality implementation are valued.
              </p>
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
}
