import { Mail } from "lucide-react";
import FAQComponent from "./FAQComponent";
import config from "./config";

// Pixelated font (optional) - link to Google Fonts or include a custom one in your styles
import "./arcadeFont.css"; // Ensure this includes any pixelated font you like

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-purple-800 text-gray-100 overflow-x-hidden">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 py-4 w-full bg-black bg-opacity-50 shadow-xl fixed backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <Mail className="text-neon-blue" />
          <span className="text-2xl font-bold font-arcade">Minimail</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-neon-pink hover:text-neon-blue transition-all"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-neon-pink hover:text-neon-blue transition-all"
          >
            Community
          </a>
          <button
            className="bg-neon-pink hover:bg-neon-blue py-2 px-4 rounded-full transition-all font-arcade"
            onClick={() =>
              (window.location.href = `${config.apiHostname}/auth/google`)
            }
          >
            Sign up
          </button>
        </div>
      </nav>

      {/* Main content - Full page height to push FAQ below fold */}
      <main className="flex-grow min-h-screen flex flex-col justify-center items-center px-4 py-16 text-center w-full">
        <h1 className="text-5xl font-bold mb-8 leading-tight text-neon-blue font-arcade">
          Achieve Inbox Zero
          <br />
          Effortlessly
        </h1>
        <p className="text-l mb-8 max-w-2xl mx-auto text-gray-300 font-arcade">
          Minimail uses AI to help you manage your emails, automatically delete
          spam, and reach inbox zero with ease.
        </p>

        {/* Feature section */}
        <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-filter shadow-neon">
            <h2 className="text-xl font-semibold mb-2 text-neon-blue font-arcade">
              Smart Spam Detection
            </h2>
            <p className="text-gray-300">
              Our AI identifies and removes spam messages from your inbox.
            </p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-filter shadow-neon">
            <h2 className="text-xl font-semibold mb-2 text-neon-blue font-arcade">
              One-Click Cleanup
            </h2>
            <p className="text-gray-300">
              Clear your inbox with a single click, saving you time and effort.
            </p>
          </div>
          <div className="bg-black bg-opacity-40 p-6 rounded-lg backdrop-filter shadow-neon">
            <h2 className="text-xl font-semibold mb-2 text-neon-blue font-arcade">
              Secure and Private
            </h2>
            <p className="text-gray-300">
              Your data is always protected with advanced security measures.
            </p>
          </div>
        </div>
      </main>

      {/* FAQ Section - placed below the fold */}
      <FAQComponent />

      {/* Footer */}
      <footer className="text-center py-4 w-full text-gray-400 bg-black bg-opacity-40">
        <p>&copy; 2024 Minimail. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
