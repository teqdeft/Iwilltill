import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Card, { CardContent } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Stethoscope,
  Brain,
  PawPrint,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Medical Care",
    image: "/images/service-medical.jpg",
    description:
      "Talk to board-certified physicians who can diagnose, treat, and prescribe. No wait times, no crowded offices.",
    features: [
      "On-demand medical consultations",
      "Prescription management",
      "Preventive care and wellness",
    ],
    color: "primary",
    ctaLabel: "Get Started",
    learnMore: "/services/medical",
  },
  {
    icon: Brain,
    title: "Behavioral Health",
    image: "/images/service-behavioral.jpg",
    description:
      "Connect with licensed therapists and counselors who specialize in therapy, stress, anxiety, depression, and more.",
    features: [
      "Individual & couples counseling",
      "Support for stress and emotional well-being",
      "Self-help tools and coping techniques",
    ],
    color: "accent",
    ctaLabel: "Get Started",
    learnMore: "/services/behavioral",
  },
  {
    icon: PawPrint,
    title: "TeleVet Pet Care",
    image: "/images/service-televet.jpg",
    description:
      "On-demand veterinary consultations for your furry family members. Available 24/7, 365 days a year.",
    features: [
      "Virtual vet consultations",
      "Behavioral & nutrition guidance",
      "Triage help for pet emergencies",
    ],
    color: "primary",
    ctaLabel: "Get Started",
    learnMore: "/services/televet",
  },
];

const colorMap = {
  primary: {
    iconBg: "bg-primary-100",
    iconColor: "text-primary",
    headerBg: "bg-gradient-to-br from-primary-50 to-primary-100/50",
  },
  accent: {
    iconBg: "bg-accent-100",
    iconColor: "text-accent",
    headerBg: "bg-gradient-to-br from-accent-50 to-accent-100/50",
  },
};

export default function PathsToWellness() {
  return (
    <SectionWrapper id="services">
      <SectionHeader
        badge="Our Services"
        title="Our Paths to"
        titleAccent="Wellness"
        description="Accessible healthcare for your body, mind, and pets — with trusted, virtual support designed to fit everyday life."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8 ">
        {services.map((service) => {
          const colors = colorMap[service.color];
          const Icon = service.icon;

          return (
            <Card key={service.title} className="flex flex-col">
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-4 left-4 w-11 h-11 rounded-xl ${colors.iconBg} flex items-center justify-center shadow-lg backdrop-blur-sm`}
                >
                  <Icon className={`w-5 h-5 ${colors.iconColor}`} />
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="flex-1 flex flex-col ">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Button variant="accent" size="sm" href="/get-started">
                    {service.ctaLabel}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    href={service.learnMore}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
