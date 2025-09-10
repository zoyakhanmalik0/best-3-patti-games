import React from "react";
import { motion } from "framer-motion";

const Troubleshooting = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">
              Troubleshooting
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Facing issues with installation or gameplay? Don’t worry — here are
            solutions to the most common problems players experience.
          </p>
        </div>

        {/* Troubleshooting Issues */}
        <div className="space-y-10 text-gray-300 leading-relaxed">
          {[
            {
              issue: "1. Game Not Installing",
              solution:
                "Ensure you have enough free storage space and a stable internet connection. For Android, enable 'Install from Unknown Sources' if downloading outside Google Play. Restart your device and try again.",
            },
            {
              issue: "2. Game Crashing on Launch",
              solution:
                "Clear the game’s cache and data in settings. Update your device software to the latest version. If the problem persists, reinstall the game from a trusted source.",
            },
            {
              issue: "3. Slow Performance or Lag",
              solution:
                "Close unused apps running in the background. Lower in-game graphics settings if available. Ensure your device meets the minimum system requirements.",
            },
            {
              issue: "4. Unable to Connect to Server",
              solution:
                "Check your internet connection (Wi-Fi or mobile data). Sometimes servers may be temporarily down — wait a few minutes and try again.",
            },
            {
              issue: "5. Game Freezing During Play",
              solution:
                "Restart the game and clear unnecessary background tasks. Make sure your device has enough RAM and battery power. Reboot your device if needed.",
            },
            {
              issue: "6. Installation File Corrupt",
              solution:
                "Re-download the game from a secure and official source. Avoid using third-party links. Ensure your download was not interrupted.",
            },
            {
              issue: "7. Controls Not Responding",
              solution:
                "Check your screen or input device for damage. Restart the game and calibrate controls in the settings menu if available.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {item.issue}
              </h2>
              <p>{item.solution}</p>
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
              Still Need Help?
            </h2>
            <p>
              If you continue facing issues, please reach out to our support
              team through the{" "}
              <a
                href="/contact"
                className="text-orange-400 hover:underline font-medium"
              >
                Contact Page
              </a>
              . We’ll be happy to assist you further.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshooting;
