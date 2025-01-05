import React, { useEffect } from "react";
import "./landingpage.css"; 
import "tailwindcss/tailwind.css";
import "animate.css";
import Header from "./Header";
import Signup from "./Signup";
import { SameValue } from './../../node_modules/@formatjs/ecma402-abstract/lib/262';
import dashboardImg from "../assets/dashboard.png";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup'); // Navigates to the signup page
  };

  const features = [
    {
      title: "Intelligent Scanning",
      description: "AI-powered receipt processing that works like magic",
      icon: "🔍",
    },
    {
      title: "Real-Time Analytics",
      description: "Beautiful, insightful reports at your command",
      icon: "📊",
    },
    {
      title: "Global Currencies",
      description: "Seamless handling of international transactions",
      icon: "🌍",
    },
    {
      title: "Smart Categories",
      description: "Automatic organization that learns your preferences",
      icon: "🏷️",
    },
    {
      title: "Bank Sync",
      description: "Secure, automated account synchronization",
      icon: "🏦",
    },
    {
      title: "Team Access",
      description: "Effortless collaboration with role-based controls",
      icon: "👥",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 font-['Inter']">
      <Header />
      {/* Hero Section */}
      <header className="hero-gradient text-white py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-on-scroll">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
                Financial clarity{" "}
                <span className="gradient-text">at your fingertips</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Experience seamless expense tracking with intelligent automation
                and crystal-clear insights. Built for modern professionals.
              </p>
              <div className="flex gap-6">
             
              <button className="btn-primary px-10 py-4 rounded-full font-medium text-sm"
               onClick={handleClick}
               >
              Get Started
            </button>
       
      
                
              </div>
            </div>
            <div className="relative animate-on-scroll">
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-white/5 rounded-3xl blur-3xl animate-pulse"></div>
              <img
                src={dashboardImg}
                alt="Dashboard Preview"
                className="relative rounded-3xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </header>
















      {/* Features Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-24 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
              Thoughtfully crafted features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Every detail refined for a seamless experience
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-10 bg-white rounded-3xl card-hover animate-on-scroll"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      {/* <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 animate-on-scroll">
            Trusted by industry leaders
          </h2>
          <div className="grid lg:grid-cols-4 gap-16 items-center">
            {[1, 2, 3, 4].map((_, index) => (
              <img
                key={index}
                src={`https://placehold.co/200x80?text=LOGO`}
                alt="Company Logo"
                className="opacity-30 hover:opacity-60 transition-all duration-500 animate-on-scroll"
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className=" text-white text-4xl font-bold text-center mb-10">
            Ready to take control?
          </h2>
          <div className="flex justify-center gap-6">
          <a href="/signup">
        <button className="btn-primary px-10 py-4 rounded-full font-medium text-sm">
          Get Started
        </button>
      </a>
            <button className="glass-effect px-10 py-4 rounded-full font-medium text-sm hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </section> */}

      
    </div>
  );
};  

export default LandingPage;
