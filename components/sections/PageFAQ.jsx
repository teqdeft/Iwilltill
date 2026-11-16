import FAQTabs from "./FAQTabs";
import { buildFaqSchema, getFaqCategories } from "./faqData";

// FAQ section for a service page: same tabbed design as /faq, limited to the
// categories that belong to that page, with matching FAQPage JSON-LD.
export default function PageFAQ({ categoryIds, description }) {
  const categories = getFaqCategories(categoryIds);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqSchema(categories)),
        }}
      />
      <FAQTabs
        id="faq"
        categories={categories}
        title="Frequently Asked"
        titleAccent="Questions"
        description={description}
      />
    </>
  );
}
