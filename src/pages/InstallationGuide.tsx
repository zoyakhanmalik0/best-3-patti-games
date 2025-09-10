import React from "react";
import { motion } from "framer-motion";

const InstallationGuide = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Installation Guide
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow these simple steps to install and enjoy your favorite games
            without any issues. This guide ensures a smooth and safe
            installation process.
          </p>
        </div>

        {/* Installation Steps */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          {[
            {
              step: "1. Download the Game",
              desc: "Click the download button on the game page. This will redirect you to a secure source (Google Play, App Store, or direct link). Ensure you only download from trusted sources.",
            },
            {
              step: "2. Enable Permissions (if required)",
              desc: "For Android devices, you may need to allow installation from unknown sources. Go to Settings > Security > Allow Unknown Sources. For iOS, simply follow App Store prompts.",
            },
            {
              step: "3. Run the Installer",
              desc: "Locate the downloaded file in your device’s Downloads folder and tap on it. For PC/Mac, double-click the installer file.",
            },
            {
              step: "4. Follow On-Screen Instructions",
              desc: "The installer will guide you through the process. Accept terms and conditions, and select storage location if asked.",
            },
            {
              step: "5. Wait for Installation",
              desc: "The process may take a few minutes depending on your device speed and internet connection. Do not exit the installer until it is completed.",
            },
            {
              step: "6. Launch the Game",
              desc: "Once installed, you will find the game icon on your home screen or app drawer. Tap it to start playing!",
            },
            {
              step: "7. Troubleshooting",
              desc: "If installation fails, clear your device cache, restart, and try again. Ensure you have enough storage space and a stable internet connection.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {item.step}
              </h2>
              <p>{item.desc}</p>
            </motion.div>
          ))}

          {/* Extra Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              Need More Help?
            </h2>
            <p>
              If you face any problems during installation, feel free to reach
              out via our{" "}
              <a
                href="/contact"
                className="text-green-400 hover:underline font-medium"
              >
                Contact Page
              </a>
              . Our support team is available to assist you.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InstallationGuide;
