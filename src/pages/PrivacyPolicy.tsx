import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your privacy is important to us. Please read this policy carefully
            to understand how we collect, use, and protect your information.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              We do not require users to create accounts to download or play
              games. However, when you visit our website, we may collect basic
              non-personal information such as device type, browser version, and
              general usage statistics to improve user experience. Some games
              may request optional data like nickname or profile picture for
              in-game features.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              2. Use of Information
            </h2>
            <p>
              Information collected is used to enhance gameplay, improve website
              performance, provide customer support, and ensure safe downloads.
              We do not sell or trade your personal information to third
              parties. Some in-game purchases and transactions are handled
              securely through official app stores.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              3. Cookies & Tracking
            </h2>
            <p>
              Our website may use cookies or similar technologies to store user
              preferences and improve navigation. You can disable cookies in
              your browser settings, but certain features may not function as
              intended without them.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              4. Third-Party Links
            </h2>
            <p>
              Our platform lists multiple games, and clicking a game link may
              redirect you to external websites or app stores. We are not
              responsible for the privacy practices of third-party platforms.
              Please review their privacy policies before sharing personal
              information.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We implement strict measures to safeguard your data and ensure all
              downloads are safe and virus-free. While we strive to protect user
              information, please note that no method of transmission over the
              internet is 100% secure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              6. Children’s Privacy
            </h2>
            <p>
              Our games are designed for entertainment purposes only. We do not
              knowingly collect personal data from children under 13. If you
              believe your child has provided personal information, please
              contact us for assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              7. Updates to Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with a revised "last updated" date.
              Continued use of our services means you accept the updated policy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              8. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please reach out to our support team through the{" "}
              <a
                href="/contact"
                className="text-cyan-400 hover:underline font-medium"
              >
                Contact Page
              </a>
              .
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
