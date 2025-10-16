import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { trackClick, trackPageView, trackOutboundLink } from "./analytics";

function App() {
  const [showTOS, setShowTOS] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    if (showTOS) {
      trackPageView("Terms of Service");
    } else if (showPrivacy) {
      trackPageView("Privacy Policy");
    } else {
      trackPageView("Home");
    }
  }, [showTOS, showPrivacy]);

  if (showTOS) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <button
            onClick={() => {
              trackClick("Back from TOS", "home");
              setShowTOS(false);
            }}
            className="text-blue-600 hover:text-blue-700 mb-6 font-medium"
          >
            ← Back
          </button>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Terms of Service
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-xl font-semibold mt-6">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this service, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
            <h2 className="text-xl font-semibold mt-6">2. Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on our
              website for personal, non-commercial transitory viewing only.
            </p>
            <h2 className="text-xl font-semibold mt-6">
              3. Service Modifications
            </h2>
            <p>
              We reserve the right to modify or discontinue our service at any
              time without notice.
            </p>
            <h2 className="text-xl font-semibold mt-6">4. Contact</h2>
            <p>
              For any questions about these Terms, please contact us via
              WhatsApp.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (showPrivacy) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
          <button
            onClick={() => {
              trackClick("Back from Privacy", "home");
              setShowPrivacy(false);
            }}
            className="text-blue-600 hover:text-blue-700 mb-6 font-medium"
          >
            ← Back
          </button>
          <h1 className="text-2xl md:text-3xl font-bold mb-6">
            Privacy Policy
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <h2 className="text-xl font-semibold mt-6">
              1. Information We Collect
            </h2>
            <p>
              We collect information you provide directly to us when using our
              services.
            </p>
            <h2 className="text-xl font-semibold mt-6">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide, maintain, and
              improve our services.
            </p>
            <h2 className="text-xl font-semibold mt-6">
              3. Information Sharing
            </h2>
            <p>
              We do not share your personal information with third parties
              except as described in this policy.
            </p>
            <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access or disclosure.
            </p>
            <h2 className="text-xl font-semibold mt-6">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-md text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/82/Hostinger_logo.png"
              alt="Hostinger"
              className="h-12 md:h-16 w-auto"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-3">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Claim Best Deal
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Get started with premium hosting services at unbeatable prices
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4 pt-4">
            <a
              href="https://be6.in/hostinger-special-discount"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackOutboundLink(
                  "https://be6.in/hostinger-special-discount",
                  "Claim Best Deal"
                )
              }
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Claim Best Deal
            </a>
            <a
              href="https://wa.me/919253029002?text=hosting+offer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackOutboundLink(
                  "https://wa.me/919253029002?text=hosting+offer",
                  "Other Services"
                )
              }
              className="block w-full bg-white hover:bg-gray-50 text-gray-800 font-semibold py-4 px-8 rounded-lg border-2 border-gray-200 transition-all duration-200 hover:border-gray-300"
            >
              Other Services
            </a>
          </div>

          {/* WhatsApp Connect */}
          <div className="pt-6">
            <a
              href="https://wa.me/919253029002?text=hosting+offer"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackOutboundLink(
                  "https://wa.me/919253029002?text=hosting+offer",
                  "WhatsApp Connect"
                )
              }
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Connect with us on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4">
        <div className="max-w-4xl mx-auto space-y-2">
          <p className="text-center text-xs text-gray-500">
            This website is an affiliate partner of Hostinger and may earn a
            commission from purchases.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <button
              onClick={() => {
                trackClick("Terms of Service Link", "tos_page");
                setShowTOS(true);
              }}
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={() => {
                trackClick("Privacy Policy Link", "privacy_page");
                setShowPrivacy(true);
              }}
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
