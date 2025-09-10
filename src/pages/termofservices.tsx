import React from "react";
import { motion } from "framer-motion";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Terms of Service
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these Terms of Service carefully before using our
            website or downloading games. By accessing or using our platform,
            you agree to follow these terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          {[
            {
              title: "1. Acceptance of Terms",
              desc: "By accessing or using our services, you confirm that you accept these Terms of Service and agree to comply with them. If you do not agree, you must not use our website or games.",
            },
            {
              title: "2. Eligibility",
              desc: "You must be at least 13 years old to use our services. If you are under 18, you should review these terms with a parent or guardian.",
            },
            {
              title: "3. Use of Services",
              desc: "Our games and content are provided for entertainment purposes only. You agree not to misuse our services, attempt unauthorized access, or engage in activities that may harm the platform or other users.",
            },
            {
              title: "4. Intellectual Property",
              desc: "All content on this website, including text, graphics, logos, and designs, is owned or licensed by us. You may not copy, distribute, or reproduce our content without permission.",
            },
            {
              title: "5. Third-Party Links",
              desc: "Our site may include links to third-party websites or app stores. We are not responsible for the content, privacy policies, or practices of these external platforms.",
            },
            {
              title: "6. Limitation of Liability",
              desc: "We do our best to provide accurate and safe content, but we are not responsible for damages, data loss, or issues arising from the use of our services or third-party downloads.",
            },
            {
              title: "7. Changes to Terms",
              desc: "We may update these Terms of Service from time to time. Any changes will be posted here, and continued use of our services means you accept the updated terms.",
            },
            {
              title: "8. Termination",
              desc: "We reserve the right to suspend or terminate access to our services at any time if you violate these terms or misuse the platform.",
            },
            {
              title: "9. Contact Us",
              desc: "If you have any questions regarding these Terms of Service, please contact us via the Contact Page on our website.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h2>
              <p>{item.desc}</p>
            </motion.div>
          ))}

          {/* Final Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Important Notice
            </h2>
            <p>
              By using our services, you acknowledge that you have read,
              understood, and agreed to these Terms of Service. If you disagree
              with any part of these terms, please discontinue use of our
              website and games immediately.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
