import React, { useState } from "react";
import { Mail, X } from "lucide-react";
import "./arcadeFont.css";
import config from "./config";

type EmailType = string;

const spamTypes: EmailType[] = [
  "Promotions",
  "Newsletters",
  "Social Media",
  "Shopping",
  "Updates",
];
const safeTypes: EmailType[] = [
  "Work",
  "Family",
  "Friends",
  "Important",
  "Bills",
];

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, selected, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-semibold mr-2 mb-2 transition-all font-arcade ${
      selected
        ? "bg-neon-pink text-gray-900 shadow-neon"
        : "bg-black bg-opacity-40 text-neon-blue hover:bg-opacity-60"
    }`}
  >
    {label}
    {selected && <X className="inline-block ml-2" size={16} />}
  </button>
);

const SpamFilterView: React.FC = () => {
  const [selectedSpam, setSelectedSpam] = useState<EmailType[]>([]);
  const [selectedSafe, setSelectedSafe] = useState<EmailType[]>([]);

  const toggleChip = (
    type: EmailType,
    setter: React.Dispatch<React.SetStateAction<EmailType[]>>
  ) => {
    setter((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-purple-900 to-purple-800 text-gray-100 overflow-x-hidden">
      <nav className="flex justify-between items-center px-4 py-4 w-full bg-black bg-opacity-50 shadow-xl fixed backdrop-blur-lg">
        <div className="flex items-center space-x-2">
          <Mail className="text-neon-blue" />
          <span className="text-2xl font-bold font-arcade">Minimail</span>
        </div>
        <span className="text-neon-pink font-arcade">John Doe</span>
      </nav>

      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl w-full bg-black bg-opacity-40 rounded-xl p-8 shadow-neon backdrop-filter backdrop-blur-lg">
          <h2 className="text-3xl font-bold mb-8 text-center text-neon-blue font-arcade">
            Customize Your Spam Filter
          </h2>

          <div className="mb-8">
            <h3 className="text-xl mb-4 text-neon-pink font-arcade">
              Mark as Spam:
            </h3>
            <div className="flex flex-wrap">
              {spamTypes.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  selected={selectedSpam.includes(type)}
                  onClick={() => toggleChip(type, setSelectedSpam)}
                />
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl mb-4 text-neon-pink font-arcade">
              Keep Safe:
            </h3>
            <div className="flex flex-wrap">
              {safeTypes.map((type) => (
                <Chip
                  key={type}
                  label={type}
                  selected={selectedSafe.includes(type)}
                  onClick={() => toggleChip(type, setSelectedSafe)}
                />
              ))}
            </div>
          </div>

          <button
            className="w-full bg-neon-pink hover:bg-neon-blue text-gray-900 py-3 rounded-full text-xl font-bold transition-colors font-arcade shadow-neon"
            onClick={() => {
              window.location.href = `${config.apiHostname}/auth/final`;
            }}
          >
            Confirm Selection
          </button>
        </div>
      </main>
    </div>
  );
};

export default SpamFilterView;
