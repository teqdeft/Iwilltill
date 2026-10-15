import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";

// Each answer is a list of paragraphs.
const faqItems = [
  {
    question: "Is virtual wellness counseling as effective as in-person therapy?",
    answer: [
      "Virtual wellness counseling can be just as effective as in-person therapy for many concerns, including stress, anxiety, depression, and life transitions. Through secure video sessions, clients receive personalized support from the comfort and privacy of a location that works for them. Research shows that strong therapeutic relationships and meaningful progress can be achieved online.",
    ],
  },
  {
    question: "Is my privacy protected during online counseling sessions?",
    answer: [
      "Yes. Online counseling sessions are held through secure, HIPAA-compliant technology designed to protect your personal health information. Your counselor follows the same confidentiality standards that apply to in-person care. For added privacy, we encourage you to join sessions from a quiet, private location and use headphones when possible.",
    ],
  },
  {
    question:
      "Can online counseling help with severe issues, or only mild to moderate ones?",
    answer: [
      "Yes. Online counseling can support people with more serious concerns, including trauma, PTSD, depression, anxiety, substance-use challenges, and serious mental illness, when it is clinically appropriate and part of a personalized care plan. Evidence-based treatments delivered by secure video can achieve outcomes comparable to in-person care.",
      "However, people experiencing an immediate crisis, severe safety concerns, or symptoms requiring intensive or in-person support may need a higher level of care. Your counselor will assess your needs, develop a safety plan when appropriate, and help connect you with the right resources.",
    ],
  },
  {
    question: "Can I keep seeing the same counselor for every session?",
    answer: [
      "Yes. Whenever possible, you will work with the same counselor for every session, allowing you to build trust, continuity, and a strong therapeutic relationship over time.",
    ],
  },
  {
    question: "What if I need help outside of scheduled sessions?",
    answer: [
      "If you need support outside of a scheduled session, we offer in-the-moment care, crisis-line support, and crisis-management services to help you navigate urgent emotional or mental-health needs. For an immediate, life-threatening emergency, you can also call 911 or 988 or go to the nearest emergency room.",
    ],
  },
  {
    question: "Does insurance cover online counseling?",
    answer: [
      "Although our program is offered through a convenient subscription model, having health insurance may still help reduce the cost of certain additional services. If you choose or need care outside your subscription plan that involves an added fee, we can provide an itemized receipt for you to submit to your insurance provider for possible out-of-network reimbursement.",
    ],
  },
  {
    question: "How long are counseling sessions?",
    answer: [
      "Session length may vary based on your needs and care plan. Your counselor will explain what to expect and help determine a schedule that works for you.",
    ],
  },
  {
    question: "How often will I meet with my counselor?",
    answer: [
      "The frequency of sessions is based on your goals, needs, availability, and level of support needed. Some clients benefit from weekly sessions, while others may meet less often or use additional in-the-moment support.",
    ],
  },
  {
    question: "What concerns can virtual counseling help with?",
    answer: [
      "Virtual counseling can provide support for stress, anxiety, depression, relationship concerns, life transitions, grief, trauma, burnout, coping skills, emotional wellness, and other behavioral-health needs.",
    ],
  },
  {
    question: "Can I include my partner or family member in a session?",
    answer: [
      "When clinically appropriate, couples, family members, or other supportive individuals may be included in sessions with your consent. Your counselor can help determine what best supports your goals and privacy.",
    ],
  },
  {
    question: "What if I do not feel like my counselor is the right fit?",
    answer: [
      "A strong connection with your counselor matters. If you feel your counselor is not the right fit, let us know—we will listen to your concerns and work with you to explore appropriate options.",
    ],
  },
  {
    question: "Will my sessions be recorded?",
    answer: [
      "Sessions are not recorded without your knowledge and written permission. Your privacy and confidentiality are central to your care.",
    ],
  },
  {
    question: "Can I participate in sessions while traveling?",
    answer: [
      "Possibly. Telehealth services are based on where you are physically located at the time of your session, not only where you live, and licensing requirements may affect whether you can meet with your regular counselor while traveling.",
      "We can provide counseling services throughout the United States; however, you may not be able to meet with your ongoing therapist while away from your permanent residence. In those circumstances, you may elect to use our In-the-Moment Care services for support until you return home.",
    ],
  },
  {
    question: "What is expected of me between sessions?",
    answer: [
      "Your counselor may suggest reflection, skills practice, worksheets, wellness activities, or other steps between sessions. These recommendations are personalized and designed to help you apply what you are learning in daily life.",
    ],
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer.join(" "),
    },
  })),
};

const accordionItems = faqItems.map((item) => ({
  question: item.question,
  answer: (
    <div className="space-y-3">
      {item.answer.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  ),
}));

export default function CounselingFAQ() {
  return (
    <SectionWrapper gray id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SectionHeader
        badge="FAQ"
        title="Frequently Asked"
        titleAccent="Questions"
        description="Answers to common questions about virtual wellness counseling, privacy, sessions, and getting support."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion items={accordionItems} />
      </div>
    </SectionWrapper>
  );
}
