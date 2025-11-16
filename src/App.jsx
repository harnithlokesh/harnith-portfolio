import "./App.css";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWifi,
  FaShieldAlt,
  FaBug,
  FaNetworkWired,
  FaKey,
  FaSkullCrossbones,
  FaUserSecret,
  FaFlask,
  FaDocker,
  FaGitAlt,
  FaLaptopCode,
  FaLinux,
  FaPython,
  FaJsSquare,
  FaTerminal,
  FaCode,
  FaJava,
  FaEthereum,
  FaCuttlefish,
  FaNodeJs,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiPostman,
  SiMongodb,
  SiKubernetes,
  SiGithubactions,
  SiFirebase,
} from "react-icons/si";

export default function App() {
  const fullName = "HARNITH LOKESH";
  const [displayName, setDisplayName] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState("none");
  const [hoverIndex, setHoverIndex] = useState(null);

  const buzzwords = [
    "Cybersecurity",
    "Blockchain Security",
    "Web3 Infrastructure",
    "Growth & Leadership",
    "Sales & Marketing Strategy",
  ];
  const [buzzIndex, setBuzzIndex] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
    AOS.refresh();
  }, []);

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayName(fullName.slice(0, i + 1));
      i++;
      if (i === fullName.length) clearInterval(typingInterval);
    }, 120);
    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Rotating buzzwords
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setBuzzIndex((prev) => (prev + 1) % buzzwords.length);
    }, 1800);
    return () => clearInterval(wordInterval);
  }, []);

  const skillsData = {
    cybersecurity: [
      { icon: <FaWifi />, label: "Wireshark" },
      { icon: <FaBug />, label: "Burp Suite" },
      { icon: <FaShieldAlt />, label: "Metasploit" },
      { icon: <FaNetworkWired />, label: "Nmap" },
      { icon: <FaShieldAlt />, label: "Nessus" },
      { icon: <FaKey />, label: "Hydra" },
      { icon: <FaSkullCrossbones />, label: "Aircrack-ng" },
      { icon: <FaWifi />, label: "Bully WPS" },
      { icon: <FaUserSecret />, label: "Autopsy Forensics" },
      { icon: <FaFlask />, label: "Volatility Forensics" },
    ],

    devtools: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <FaDocker />, label: "Docker" },
      { icon: <FaLaptopCode />, label: "VS Code" },
      { icon: <SiMongodb />, label: "MongoDB" },
      { icon: <SiPostman />, label: "Postman API" },
      { icon: <FaLinux />, label: "Linux" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiGithubactions />, label: "GitHub Actions" },
      { icon: <SiKubernetes />, label: "Kubernetes" },
      { icon: <SiFirebase />, label: "Firebase" },
    ],

    languages: [
      { icon: <FaJava />, label: "Java" },
      { icon: <FaCode />, label: "C" },
      { icon: <FaPython />, label: "Python" },
      { icon: <FaJsSquare />, label: "JavaScript" },
      { icon: <FaTerminal />, label: "Bash" },
      { icon: <FaCuttlefish />, label: "C#" },
      { icon: <FaEthereum />, label: "Solidity" },
    ],
  };

  const experience = [
    { date: "Mar 2023 – Dec 2023", role: "Web Developer", company: "Stellar Tours", details: "Full-stack development experience" },
    { date: "Jun 2023 – Mar 2024", role: "Sales & Marketing Intern", company: "Stellar Tours", details: "On-site | Team Leadership, Sales & Marketing" },
    { date: "Jun 2024 – Aug 2024", role: "Cyber Security Analyst Intern", company: "RV University", details: "On-site | Bengaluru, Karnataka" },
    { date: "Dec 2024 – May 2025", role: "Recruiting Consultant", company: "Knowledge Plant Academy LLP", details: "Hybrid role" },
    { date: "May 2025 – Jul 2025", role: "Founder’s Office Intern", company: "Knowledge Plant Academy LLP", details: "Part-time — On-site | Business Strategy, Cold Calling" },
    { date: "May 2025 – Aug 2025", role: "Cyber Security Research", company: "RV University", details: "Internship — Hybrid | Bengaluru, Karnataka" },
    { date: "Aug 2024 – Present", role: "Technical Team Member", company: "CyberSec RVU", details: "On-site | Bengaluru, Karnataka" },
    { date: "Jul 2025 – Present", role: "Founder", company: "secureTitan", details: "Full-time — On-site | Bangalore Urban, Karnataka" },
  ];

  const navItems = [
    { id: "github", label: "GitHub" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* NAVBAR */}
      <nav data-aos="fade-down" className="flex justify-end items-center gap-8 max-w-6xl mx-auto px-4 py-6 sticky top-0 bg-[#f7f8fc]/80 dark:bg-[#0b0f19]/80 backdrop-blur-md z-50 border-b border-transparent dark:border-white/5">
        <div className="flex gap-4 font-semibold">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <ThemeToggle />
      </nav>

      {/* HERO */}
      <section className="section flex flex-col justify-center items-center text-center" data-aos="fade-up">
        <h1 className="text-6xl md:text-7xl font-extrabold gradient-text glitch" data-text={displayName}>
          {displayName}
          <span style={{ opacity: cursorVisible ? 1 : 0 }} className="ml-1 gradient-text">|</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 buzzword">
          {buzzwords[buzzIndex]}
        </p>

        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-text">
          Blockchain & Cybersecurity Enthusiast • Aspiring CISO • React + Node.js Developer • Sales, Marketing & Business Administration Evangelist
        </p>

        <div className="about-grid" data-aos="fade-up">
          <div className="about-item"><FaCheckCircle className="about-icon" /><p>Ethical hacking, digital forensics & intrusion detection.</p></div>
          <div className="about-item"><FaCheckCircle className="about-icon" /><p>Building secure blockchain-powered systems & Web3 infra.</p></div>
          <div className="about-item"><FaCheckCircle className="about-icon" /><p>Sales, marketing & strategy for security-first products.</p></div>
        </div>
      </section>

      {/* GITHUB */}
      <section id="github" className="section" data-aos="fade-up">
        <h2 className="gradient-text text-4xl font-bold mb-8">GitHub Contributions</h2>
        <div className="card github-card">
          <GitHubCalendar username="harnithlokesh" blockSize={14} blockMargin={4} fontSize={14}/>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section" data-aos="fade-up">
        <h2 className="gradient-text text-4xl font-bold mb-12">Experience</h2>

        <div className="timeline-h">
          {experience.map((item, i) => (
            <div key={i} className={`t-node ${i % 2 === 0 ? "top" : "bottom"}`}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}>
              <div className="t-dot"></div>
              <span className="t-date">{item.date}</span>

              {hoverIndex === i && (
                <div className={`t-card ${i % 2 === 0 ? "card-top" : "card-bottom"}`}>
                  <h3 className="gradient-text text-lg font-bold">{item.role}</h3>
                  <p className="font-semibold">{item.company}</p>
                  <p className="opacity-80 text-sm">{item.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section" data-aos="fade-up">
        <h2 className="gradient-text text-4xl font-bold mb-10">Skills & Tech</h2>

        <div className="flex gap-4 flex-wrap justify-center">
          {[
            { key: "cybersecurity", label: "Cybersecurity" },
            { key: "devtools", label: "Dev Tools" },
            { key: "languages", label: "Programming Languages" },
          ].map((item) => (
            <button key={item.key} className="skill-btn"
              onClick={() => setActiveCategory(activeCategory === item.key ? "none" : item.key)}
              onMouseEnter={() => setActiveCategory(item.key + "_preview")}
              onMouseLeave={() => setActiveCategory((prev) => prev.endsWith("_preview") ? "none" : prev)}
            >
              {item.label}
              {activeCategory === item.key + "_preview" && (
                <div className="preview-box">
                  {skillsData[item.key].slice(0, 2).map((tool, i) =>
                    <div key={i} className="text-xl opacity-90">{tool.icon}</div>
                  )}
                </div>
              )}
            </button>
          ))}
        </div>

        {["cybersecurity", "devtools", "languages"].includes(activeCategory) && (
          <div className="skill-drop">
            {skillsData[activeCategory].map((tool, i) => (
              <div key={i} className="skill-item">
                <div className="text-4xl mb-2">{tool.icon}</div>
                <p className="text-sm opacity-80">{tool.label}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CONTACT */}
      <section id="contact" className="section" data-aos="fade-up">
        <h2 className="gradient-text text-4xl font-bold mb-12">Contact</h2>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://github.com/harnithlokesh" target="_blank" className="hover:opacity-80"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/harnithlokesh/" target="_blank" className="hover:opacity-80"><FaLinkedin /></a>
          <a href="mailto:harnithmarshmello@gmail.com" className="hover:opacity-80"><FaEnvelope /></a>
        </div>
      </section>

      <footer className="text-center py-6 opacity-60 text-sm mt-auto">
        © {new Date().getFullYear()} Harnith Lokesh • All Rights Reserved
      </footer>

    </div>
  );
}
