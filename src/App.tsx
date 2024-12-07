import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import Features from './components/Home/Features';
import HowItWorks from './components/Home/HowItWorks';
import UseCases from './components/Home/UseCases';
import ChatWindow from './components/Chat/ChatWindow';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <Features />
            <HowItWorks />
            <UseCases />
            <div className="container mx-auto px-4 py-8">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Chatbase Clone</h1>
                <div className="bg-white rounded-lg shadow-lg h-[600px]">
                  <ChatWindow />
                </div>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
