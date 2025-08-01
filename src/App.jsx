import React, { useState, useEffect } from 'react';
import { MessageCircle, Share2, Twitter, Linkedin, Trophy, Zap, BookOpen, Brain, Star } from 'lucide-react';

const BoniConnect = () => {
  const [joinStreak, setJoinStreak] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Your Boni WhatsApp number
  const BoniWhatsAppNumber = "+918762192191";
  // QR Code URL - using QR Server API for dynamic generation
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/${BoniWhatsAppNumber}`;

  // Simulated join streak counter
  useEffect(() => {
    const interval = setInterval(() => {
      setJoinStreak(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
    window.open(`https://wa.me/${BoniWhatsAppNumber}?text=Hi Boni! I'd like to start learning with you.`, "_blank");
  };

  const handleShare = (platform) => {
    const shareText = "Join me on Boni Connect - Learn Smart, Learn Fast with WhatsApp! 🚀";
    const shareUrl = window.location.href;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://Boni.one/?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/company/Boni1/people/?url=${encodeURIComponent(shareUrl)}`, "_blank");
        break;
      case 'Whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`, "_blank");
        break;
      default:
        console.log('Unknown platform:', platform);
        break;
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            <div className="header-logo">
              <div className="logo-icon">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h1 className="logo-title">Boni Connect</h1>
            </div>
            <div className="streak-badge">
              <Trophy className="w-4 h-4 text-green-600" />
              <span className="streak-text">{joinStreak.toLocaleString()} learners joined</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="main-container">
        <div className="text-center mb-16">
          <div className="ai-badge">
            <Zap className="w-4 h-4" />
            <span>AI-Powered Learning Assistant</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-part1">Learn Smart.</span>
            <br />
            <span className="hero-title-part2">Learn Fast.</span>
          </h1>
          
          <p className="hero-description">
            Chat with Boni on WhatsApp and get daily insights, tips, and knowledge delivered straight to your phone. 
            Transform your learning journey with personalized AI assistance.
          </p>

          {/* Main CTA */}
          <div className="cta-container">
            <button
              onClick={handleWhatsAppClick}
              className={`cta-button ${isAnimating ? 'scale-95' : ''}`}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Start Learning with Boni</span>
            </button>
            
            <div className="qr-container">
              <div className="text-center">
                <img 
                  src={qrCodeUrl} 
                  alt="WhatsApp QR Code" 
                  className="qr-code"
                />
                <p className="qr-text">Scan to join</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon feature-icon-daily">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="feature-title">Daily Learning</h3>
            <p className="feature-description">Get curated knowledge delivered to your WhatsApp every day. From quick tips to deep insights.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon feature-icon-ai">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="feature-title">AI-Powered</h3>
            <p className="feature-description">Boni adapts to your learning style and interests, providing personalized content just for you.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon feature-icon-whatsapp">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="feature-title">WhatsApp Native</h3>
            <p className="feature-description">Learn where you already chat. No new apps to download or remember to check.</p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="social-proof">
          <div className="stars-container">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="star-icon" />
            ))}
          </div>
          <p className="testimonial">
            "Boni has transformed how I learn new things every day!" - Sarah K.
          </p>
        </div>

        {/* Share Section */}
        <div className="share-section">
          <h2 className="share-title">Share Boni Connect</h2>
          <p className="share-description">Help your friends discover smarter learning</p>
          
          <div className="share-buttons">
            <button
              onClick={() => handleShare('twitter')}
              className="share-button share-button-twitter"
            >
              <Brain className="share-icon" />
            </button>
            
            <button
              onClick={() => handleShare('linkedin')}
              className="share-button share-button-linkedin"
            >
              <Linkedin className="share-icon" />
            </button>
            
            <button
              onClick={() => handleShare('Whatsapp')}
              className="share-button share-button-whatsapp"
            >
              <MessageCircle className="share-icon" />
            </button>
            
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }}
              className="share-button share-button-copy"
            >
              <Share2 className="share-icon" />
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="text-center">
            <div className="footer-logo">
              <div className="footer-icon">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="footer-title">Boni Connect</span>
            </div>
            <p className="footer-description">Empowering learners worldwide through AI-driven WhatsApp education</p>
            <div className="footer-copyright">
              © 2025 Boni Connect. Built with ❤️ for learners everywhere.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BoniConnect;