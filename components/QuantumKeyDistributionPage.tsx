import React from 'react';

const QuantumKeyDistributionPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Quantum Key Distribution (QKD)</h1>
      <p className="text-center text-gray-400 mb-8">Securing Communications with the Laws of Physics</p>
      
      <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
        <p>
          Quantum Key Distribution (QKD) is a secure communication method that uses the principles of quantum mechanics to exchange cryptographic keys between two parties. The unique property of QKD is that it allows the two parties to detect the presence of any third party trying to eavesdrop on the key exchange.
        </p>
        <p>
          This detection is possible because the act of measuring a quantum system, such as a photon, inherently disturbs it. Any attempt by an eavesdropper to observe the key being transmitted will introduce anomalies that the legitimate users can detect. If eavesdropping is detected, the key is discarded, and a new one is sent. This guarantees that the exchanged key is known only to the intended recipients.
        </p>
        <div className="bg-gray-800/50 p-4 rounded-lg border-2 border-gray-700">
            <h3 className="text-lg font-bold text-blue-400">How It Works (Simplified):</h3>
             <p>
                Imagine sending a key bit-by-bit using photons with different polarizations. The sender (Alice) sends photons, and the receiver (Bob) measures them. They later compare a subset of their polarization choices over a public channel. If there are too many discrepancies, they know an eavesdropper (Eve) was present. If not, the remaining bits form a secure, secret key.
            </p>
        </div>
        <p>
          While QKD is a powerful tool for secure key exchange, it is often used in conjunction with PQC to create a multi-layered, quantum-resilient security architecture for protecting high-value data in transit.
        </p>
      </div>
    </div>
  );
};

export default QuantumKeyDistributionPage;
