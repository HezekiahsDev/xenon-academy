import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Xenon Academy" },
      { name: "description", content: "Xenon Academy terms of service." },
      { property: "og:title", content: "Terms of Service — Xenon Academy" },
      { property: "og:description", content: "Xenon Academy terms of service." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms of Service">
      <p>
        These Terms of Service govern your access to and use of the Xenon Academy website, platform,
        and any related services (collectively, "the Service"). By using the Service, you agree to
        these terms.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">1. Acceptance of Terms</h2>
      <p>
        By accessing or using the Service, you confirm that you have read, understood, and agree to
        be bound by these Terms. If you do not agree, you must not use the Service.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">2. Eligibility</h2>
      <p>
        You must be at least 18 years old to use the Service. By using the Service, you represent
        and warrant that you meet this requirement and that your use complies with all applicable
        laws and regulations.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">3. Educational Purpose</h2>
      <p>
        Xenon Academy provides educational content related to cryptocurrency, decentralised finance
        (DeFi), blockchain technology, and related fields. All content is for informational and
        educational purposes only. Nothing on the Service constitutes financial, investment, or
        legal advice.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">4. No Financial Advice</h2>
      <p>
        Xenon Academy does not provide personalised investment recommendations, trading advice, or
        portfolio management. Any strategies, analyses, or examples presented are for illustrative
        and educational purposes only. You are solely responsible for your own financial decisions
        and due diligence.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">5. User Conduct</h2>
      <p>
        You agree not to use the Service for any unlawful purpose or in violation of these Terms.
        Prohibited activities include, but are not limited to: unauthorised access to systems,
        harassment of other users, impersonation, and any form of market manipulation or fraud.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">6. Intellectual Property</h2>
      <p>
        All content, materials, and trademarks available through the Service are the property of
        Xenon Academy or its licensors and are protected by applicable intellectual property laws.
        You may not reproduce, distribute, modify, or create derivative works without prior written
        consent.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Xenon Academy shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages arising from your use of the
        Service. This includes, but is not limited to, financial losses, trading losses, or loss of
        data.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">8. Changes to Terms</h2>
      <p>
        We reserve the right to modify these Terms at any time. Changes will be effective
        immediately upon posting. Your continued use of the Service after changes constitutes
        acceptance of the updated Terms.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">9. Contact</h2>
      <p>
        If you have questions about these Terms, please reach out through the contact channels
        available on our website.
      </p>

      <div className="border-t border-white/[0.06] pt-6 text-xs text-white/40">
        Last updated: May 22, 2026
      </div>
    </LegalPage>
  );
}
