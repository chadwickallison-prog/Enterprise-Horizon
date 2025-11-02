import React from 'react';

const AiQuantumThreatDetectionPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">AI & Quantum Threat Detection</h1>
      <p className="text-center text-gray-400 mb-8">Intelligently Anticipating the Next Wave of Attacks</p>
      
      <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
        <p>
          The emergence of quantum computing will not only create new offensive capabilities but also new, more sophisticated types of cyberattacks. Traditional, rule-based security systems will be insufficient to detect these threats. The convergence of Artificial Intelligence and quantum awareness is essential for proactive defense.
        </p>
        <p>
          Our AI-driven threat detection systems are designed to identify the subtle precursors to quantum-related attacks. This involves:
        </p>
        <div className="bg-gray-800/50 p-4 rounded-lg border-2 border-gray-700">
            <h3 className="text-lg font-bold text-blue-400">Key AI-Powered Detection Strategies:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Behavioral Anomaly Detection:</strong> AI models learn the normal patterns of network and data access. It can flag unusual activity, such as massive data exfiltration attempts aimed at "harvest now, decrypt later" attacks, where attackers steal encrypted data today with the intent of decrypting it with a future quantum computer.</li>
                <li><strong>Cryptographic Algorithm Analysis:</strong> AI can monitor network traffic to identify the use of outdated or vulnerable cryptographic protocols, flagging them for immediate upgrade to PQC standards.</li>
                <li><strong>Adversarial AI Defense:</strong> We use AI not only to detect threats but also to anticipate how attackers might use AI themselves, developing defenses against adversarial machine learning attacks aimed at our security models.</li>
            </ul>
        </div>
        <p>
          By combining the pattern-recognition power of AI with a deep understanding of quantum threats, we can create an intelligent and adaptive security posture that evolves to meet the challenges of the next computing paradigm.
        </p>
      </div>
    </div>
  );
};

export default AiQuantumThreatDetectionPage;
