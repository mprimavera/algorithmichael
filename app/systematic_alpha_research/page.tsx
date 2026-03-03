"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";

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
        <h2 className="text-xl md:text-4xl mb-12 text-slate-400 font-semibold">
          Systematic Alpha Research 
          <br/>
          & Quantitative Strategy Development
        </h2>
        <div className="text-slate-500 lg:text-xl md:text-base max-w-2xl lg:max-w-4xl leading-relaxed mb-12">
          <p className="mb-6">
            This page outlines my structured research-to-production workflow for independent systematic trading: constructing
            asset-specific predictive pricing models from real data, translating them into executable strategy logic, and
            evaluating performance through structured quantitative analysis, equity curve modeling, and out-of-sample validation.
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
                The process begins by identifying relevant structural drivers, including supply dynamics and asset-specific indicators,
                and integrating them into a mathematically defined pricing projection model.
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
                Using the data, a quantitative predictive pricing model is constructed to generate asset-specific
                price projections, which are then evaluated and refined through structured numerical analysis.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                The model architecture and parameter structure shown here illustrate the research framework used
                to construct asset-specific predictive signals.
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
                The model is then implemented as executable strategy logic, integrating signal generation, trade state
                management, and rule-based entry and exit conditions.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                Strategy logic, signal generation, and trade state management were designed and implemented within an asset-specific
                systematic framework.
              </p>
            </div>
          </ProjectSection>
        </div>

        <div className="border rounded-3xl text-slate-400/50 mb-16 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Out-of-Sample Validation and Performance Evaluation">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Results_1.png"
                alt="Out-of-Sample Validation and Performance Evaluation"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl mb-2 text-slate-400 pt-4">
                Models are evaluated using out-of-sample validation to assess predictive consistency on unseen data.
              </p>
              <p className="text-sm text-slate-500 mt-3 pt-3 border-t border-slate-700/50">
                This report reflects executed orders generated by the strategy logic and is shown to illustrate end-to-end workflow
                from signal generation through performance evaluation.
              </p>
            </div>
          </ProjectSection>
        </div>
        <div className="border rounded-3xl text-slate-400/50 pt-4 bg-black/70 min-w-[410px] text-center">
          <ProjectSection title="Model Evaluation and Refinement">
            <div className="w-full max-w-7xl mx-auto px-4">
              <img
                src="/trading/Results_2.png"
                alt="Model Evaluation and Refinement"
                className="w-full object-contain rounded-lg"
              />
              <p className="text-base text-center sm:text-xl mb-2 text-slate-400 pt-4">
                Evaluation emphasizes quantitative performance analysis, including trade distribution and equity curve stability.
              </p>
            </div>
          </ProjectSection>
        </div>
      </div>
    </div>
  );
}
