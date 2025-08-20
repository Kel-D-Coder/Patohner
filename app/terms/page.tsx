// components/TermsOfUse.tsx
import PageNavBar from "@/components/PageNavBar";
import React from "react";

const TermsOfUse: React.FC = () => {
  return (
    <>
      <PageNavBar />
      {/* The main container is modified to have a smaller horizontal padding on mobile.
        The max-w-4xl and mx-auto ensure it stays centered on desktop.
      */}
      <div className="max-w-4xl mx-auto px-12 sm:px-6 py-12 text-black font-syne mb-20">
        {/*
          The heading has a smaller top margin on mobile,
          and the mb-24 is kept for desktop screens.
        */}
        <h1 className="text-lg font-bold mb-12 sm:mb-24 tracking-wide uppercase">
          TERMS OF USE
        </h1>

        {/* The body text font size is adjusted for mobile, making it easier to read.
          The space-y-6 is a good choice for consistent spacing.
        */}
        <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
          <p>Patohner.com</p>

          <p>
            By accessing or using PatOhner.com (the “Site”), you agree to the following Terms and Conditions.
            These govern your use of the Site and any services, content, or products offered through it.
            Please read carefully.
          </p>

          {/* 1. Personal Data & Privacy Policy */}
          <div>
            <p className="font-semibold">
              1. PERSONAL DATA &amp; PRIVACY POLICY
            </p>
            <p>
              We are committed to protecting your privacy. Please review our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>{" "}
              to understand how we collect, use, and protect your personal information. By using the Site,
              you consent to the practices described therein.
            </p>
          </div>

          {/* 2. Intellectual Property */}
          <div>
            <p className="font-semibold">2. INTELLECTUAL PROPERTY</p>
            <p>
              All content on this Site, including but not limited to text, images, graphics, logos, and designs,
              is the property of Pat Ohner or its licensors and is protected by applicable copyright, trademark,
              and intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited.
            </p>
          </div>

          {/* 3. Third-Party Links */}
          <div>
            <p className="font-semibold">3. THIRD-PARTY LINKS</p>
            <p>
              The Site may contain links to external websites. These are provided for your convenience.
              Pat Ohner does not control and is not responsible for the content, privacy policies, or practices
              of any third-party websites. Use of third-party links is at your own risk.
            </p>
          </div>

          {/* 4. Acceptable Use */}
          <div>
            <p className="font-semibold">4. ACCEPTABLE USE</p>
            <p>
              You agree not to use the Site in any way that may interfere with its operation, security, or
              accessibility. This includes, but is not limited to, transmitting malicious code, attempting
              unauthorized access, or submitting unlawful, offensive, or misleading content.
            </p>
          </div>

          {/* 5. Limitation of Liability */}
          <div>
            <p className="font-semibold">5. LIMITATION OF LIABILITY</p>
            <p>
              Pat Ohner shall not be held liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Site or its services. This includes but is not limited to loss of data, revenue, or profits
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">6. Disclaimer of Warranty</p>
            <p>
              All content and services on the Site are provided “as is” and “as available.” Pat Ohner makes no warranties, express or implied, regarding the accuracy, reliability, or availability of the Site or its content
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">7. Governing Law & Jurisdiction</p>
            <p>
              These Terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">8. WAIVER</p>
            <p>
              Failure to enforce any part of these Terms does not constitute a waiver of that provision or any other provision.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">9. Severability</p>
            <p>
              If any part of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">Terms and Conditions of Sale</p>
          </div>

          <div>
            <p>Patohner.com</p>
          </div>

          <p>
            These Terms of Sale apply to all purchases made through PatOhner.com and form a legally binding agreement between the customer (“you”) and Pat Ohner (“we,” “us,” or “our”).
          </p>

          <div>
            <p className="font-semibold uppercase">1. Order Acceptance</p>
            <p>
              All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. A confirmation email does not constitute final acceptance until your payment is processed and your items are prepared for shipment.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">2. Pricing and Payment</p>
            <p>
              Prices are listed in USD (or local currency where specified) and may change without notice. Payment must be made in full at the time of purchase. Accepted payment methods are listed at checkout.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">3. Shipping and Delivery</p>
            <p>
              Estimated delivery times are provided for convenience but are not guaranteed. We are not responsible for delays caused by carriers, customs, or other external factors. For further details, please refer to our Shipping Policy.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">4. Returns and Refunds</p>
            <p>
              You may return eligible items within the return window stated in our Return Policy. Items must be unused, in original packaging, and accompanied by proof of purchase. Refunds will be issued to the original payment method, subject to our review and approval.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">5. Risk of Loss</p>
            <p>
              All items are shipped under a shipment contract. Risk of loss and title transfer to you upon delivery to the shipping carrier.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">6. Product Information</p>
            <p>
              We make reasonable efforts to ensure that product descriptions, images, and specifications are accurate. However, we do not guarantee the completeness or accuracy of any product information on the Site
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">7. Limitation of Liability</p>
            <p>
              Our total liability in connection with any product purchase is limited to the purchase price of the product. We shall not be liable for any indirect, incidental, or consequential damages.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">8. Disclaimer of Warranty</p>
            <p>
              Products are provided “as is,” without any warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">9. Governing Law & Jurisdiction</p>
            <p>
              These Terms of Sale are governed by Nigerian law. Disputes shall be resolved exclusively in the courts of Nigeria
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase">10. Changes to Terms</p>
            <p>
              We may update these Terms of Use and Terms of Sale at any time without prior notice. Continued use of the Site following changes constitutes acceptance of the updated terms
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsOfUse;