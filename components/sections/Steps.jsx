import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import { ClipboardList, CreditCard, Video, HeartPulse, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Choose Your Service",
    description:
      "Select the kind of care you need — medical, behavioral health, or veterinary services. It's that simple.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Pick Your Plan",
    description:
      "Choose the plan that fits your needs and budget. Individual, family, or employer-sponsored options available.",
  },
  {
    number: "03",
    icon: Video,
    title: "Connect with a Provider",
    description:
      "Meet with board-certified and licensed providers via secure video or phone, at a time convenient for you.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Start Feeling In-Sync!",
    description:
      "Get diagnoses, prescriptions, counseling, or referrals right away. Follow-up care is always included.",
  },
];

export default function Steps() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="Your Care Journey in"
        titleAccent="4 Simple Steps"
        description="Getting started is simple. Choose the care you need, connect with a licensed professional, and get the support you deserve — all from the comfort of home."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+30px)] w-[calc(100%-30px)] h-px border-t-2 border-dashed border-primary-200" />
              )}

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-primary-50 group-hover:bg-primary-100 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center">
        <Button variant="primary" size="lg" href="/get-started">
          Start Your Journey
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </SectionWrapper>
  );
}
