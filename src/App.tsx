import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Copy, AlertTriangle, Check, Moon, Sun, Laptop, Lock, FolderSync as Sync, Infinity, Database, Cpu, Brain } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    { icon: Infinity, title: 'Unlimited Clipboard Scans', description: 'Premium feature for continuous protection' },
    { icon: AlertTriangle, title: 'Real-time Threat Detection', description: 'Instant on-screen security alerts' },
    { icon: Lock, title: 'Encrypted Clipboard', description: 'Military-grade encryption for sensitive data' },
    { icon: Sync, title: 'Cross-device Sync', description: 'Seamless protection across all your devices' }
  ];

  const techStack = [
    { icon: Laptop, name: 'ElectronJS' },
    { icon: Brain, name: 'GROQ AI' },
    { icon: Database, name: 'Supabase' },
    { icon: Cpu, name: 'Python' }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
      >
        {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <Shield className="w-16 h-16 mx-auto mb-8 text-blue-500" />
          <h1 className="text-5xl font-bold mb-6">
            Protect Your Clipboard.<br />Defend Your Digital World.
          </h1>
          <p className="text-xl mb-8 opacity-80">
            Real-time clipboard and screen threat detection powered by AI.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Try ClipSafe Free
          </motion.button>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="flex justify-center items-center space-x-8">
            {[
              { icon: Copy, text: "Copy content" },
              { icon: Shield, text: "Instant scan" },
              { icon: Brain, text: "AI analysis" },
              { icon: AlertTriangle, text: "Threat warning" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <step.icon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <p className="text-sm opacity-80">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <feature.icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">See It In Action</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1607706189992-eae578626c86?auto=format&fit=crop&w=2000&q=80"
                alt="ClipSafe Dashboard"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80"
                alt="ClipSafe Security Analysis"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Powered By</h2>
          <div className="flex justify-center items-center space-x-12">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <tech.icon className="w-12 h-12 mx-auto mb-3 text-blue-500" />
                <p className="font-semibold">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;