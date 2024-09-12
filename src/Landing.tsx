import { Mail } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Mail className="text-blue-400" />
          <span className="text-xl font-bold">Minimail</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Community
          </a>
          <button className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded-full transition-colors">
            Sign up
          </button>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-grow flex flex-col justify-center items-center px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4 leading-tight text-white">
          Achieve Inbox Zero
          <br />
          Effortlessly
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
          Minimail uses AI to help you manage your emails, automatically delete
          spam, and reach inbox zero with ease.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 py-3 px-8 rounded-full text-lg font-semibold transition-colors">
          Join the Waitlist →
        </button>

        {/* Feature section */}
        <div className="w-full max-w-6xl mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Smart Spam Detection
            </h3>
            <p className="text-gray-300">
              Our AI identifies and removes spam messages from your inbox.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              One-Click Cleanup
            </h3>
            <p className="text-gray-300">
              Clear your inbox with a single click, saving you time and effort.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2 text-blue-400">
              Secure and Private
            </h3>
            <p className="text-gray-300">
              Your data is always protected with advanced security measures.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-gray-400">
        <p>&copy; 2024 Minimail. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
