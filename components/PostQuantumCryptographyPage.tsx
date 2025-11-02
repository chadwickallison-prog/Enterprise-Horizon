import React from 'react';

const PostQuantumCryptographyPage: React.FC = () => {
  return (
    <div className="w-full bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 animate-fade-in">
      <h1 className="text-3xl font-black text-white text-center mb-2">Post-Quantum Cryptography (PQC)</h1>
      <p className="text-center text-gray-400 mb-8">Building the Next Generation of Digital Security</p>
      
      <div className="max-w-4xl mx-auto text-gray-300 space-y-6">
        <p>
          Post-Quantum Cryptography (PQC), also called quantum-resistant cryptography, refers to cryptographic algorithms that are thought to be secure against attacks by both classical and quantum computers. The need for PQC arises from the fact that a sufficiently powerful quantum computer, if built, could break many of the public-key cryptosystems currently in use, such as RSA and Elliptic Curve Cryptography (ECC).
        </p>
        <p>
          At Enterprise Horizon, our approach to PQC involves a strategy of cryptographic agility. We are actively inventorying cryptographic assets and implementing hybrid systems that combine pre-quantum and post-quantum algorithms. This ensures that even if one system is compromised, the other remains secure, providing a robust defense-in-depth during the transition period.
        </p>
        <div className="bg-gray-800/50 p-4 rounded-lg border-2 border-gray-700">
            <h3 className="text-lg font-bold text-blue-400">Key PQC Algorithm Families Explored:</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Lattice-based cryptography:</strong> Relies on the difficulty of solving certain problems in point lattices.</li>
                <li><strong>Code-based cryptography:</strong> Based on the difficulty of decoding a general linear code.</li>
                <li><strong>Multivariate cryptography:</strong> Uses the difficulty of solving systems of multivariate polynomial equations.</li>
                <li><strong>Hash-based cryptography:</strong> Builds security from hash functions, offering strong security guarantees but often with larger signature sizes.</li>
            </ul>
        </div>
         <p>
          Our goal is to ensure that our clients' data and communications remain secure for decades to come, regardless of advances in computing technology.
        </p>
      </div>
    </div>
  );
};

export default PostQuantumCryptographyPage;
