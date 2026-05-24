import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/landing/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Xenon Academy" },
      { name: "description", content: "Xenon Academy privacy policy." },
      { property: "og:title", content: "Privacy Policy — Xenon Academy" },
      { property: "og:description", content: "Xenon Academy privacy policy." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Xenon Academy respects your privacy. This Privacy Policy explains how we collect, use,
        disclose, and safeguard your information when you use our website and services.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">1. Information We Collect</h2>
      <p>
        We may collect personal information you voluntarily provide, such as your name, email
        address, and any other details submitted through forms, applications, or communications. We
        also automatically collect certain technical data, including IP addresses, browser type,
        device information, and usage patterns.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">
        2. How We Use Your Information
      </h2>
      <p>
        Your information is used to provide, maintain, and improve the Service; communicate with you
        regarding updates, programs, and opportunities; process applications and registrations; and
        comply with legal obligations. We do not sell your personal data to third parties.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">3. Cookies and Tracking</h2>
      <p>
        We use cookies and similar tracking technologies to enhance your experience, analyse usage
        trends, and remember preferences. You can control cookie settings through your browser.
        Disabling cookies may affect certain functionality of the Service.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">4. Data Sharing</h2>
      <p>
        We may share your information with trusted third-party service providers who assist in
        operating the platform, processing payments, or delivering communications. These parties are
        contractually bound to protect your data. We may also disclose information if required by
        law or to protect our rights.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">5. Data Security</h2>
      <p>
        We implement industry-standard security measures to protect your data from unauthorised
        access, alteration, disclosure, or destruction. However, no method of transmission or
        storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">6. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the right to access, correct, delete, or port
        your personal data. You may also opt out of certain data processing activities. To exercise
        these rights, please contact us through the available channels.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">7. Third-Party Links</h2>
      <p>
        The Service may contain links to third-party websites, including external resources, tools,
        and social media platforms. We are not responsible for the privacy practices or content of
        these third parties. We encourage you to review their privacy policies.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page
        with an updated effective date. Continued use of the Service after changes constitutes
        acceptance of the updated policy.
      </p>

      <h2 className="font-display text-lg font-semibold text-white">9. Contact</h2>
      <p>
        If you have questions or concerns about this Privacy Policy or your data, please reach out
        through the contact channels on our website.
      </p>

      <div className="border-t border-white/[0.06] pt-6 text-xs text-white/40">
        Last updated: May 22, 2026
      </div>
    </LegalPage>
  );
}
