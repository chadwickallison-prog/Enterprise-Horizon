import React from 'react';

const QuantumRandomNumberGeneratorsPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Quantum Random Number Generators (QRNG)</h1>
      <p className="text-center text-gray-400 mb-8">The Foundation of Unbreakable Cryptography</p>
      
      <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
        <p>
          High-quality random numbers are a cornerstone of secure cryptography. Many cryptographic protocols, from generating keys to creating nonces, rely on the unpredictability of random numbers. However, traditional computers can only generate pseudo-random numbers using mathematical algorithms. While these are often sufficient, they are not truly random and could potentially be predicted if the algorithm and seed are known.
        </p>
        <p>
          Quantum Random Number Generators (QRNGs) solve this problem by harnessing the inherent randomness of quantum mechanics. Physical processes at the quantum level, such as the timing of a photon hitting a semi-transparent mirror or radioactive decay, are fundamentally probabilistic and unpredictable.
        </p>
        <div className="bg-gray-800/50 p-4 rounded-lg border-2 border-gray-700">
            <h3 className="text-lg font-bold text-blue-400">Why True Randomness Matters:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Stronger Keys:</strong> Keys generated with true randomness are impossible to predict, significantly strengthening encryption.</li>
                <li><strong>Secure Protocols:</strong> Many security protocols require a random "challenge" to prevent replay attacks. QRNGs ensure these challenges are never repeated or guessed.</li>
                <li><strong>Simulation & Modeling:</strong> Beyond security, true random numbers are critical for accurate scientific simulations, such as financial modeling and complex system analysis.</li>
            </ul>
        </div>
        <p>
          By incorporating QRNGs into our security architecture, Enterprise Horizon ensures that our cryptographic foundations are as strong and unpredictable as the laws of physics allow.
        </p>
      </div>
    </div>
  );
};

export default QuantumRandomNumberGeneratorsPage;
