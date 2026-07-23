import "./App.css";
import { useEffect, useState } from "react";
import {
  FaArrowDown, FaArrowUpRightFromSquare, FaBriefcase, FaCalendarCheck,
  FaCertificate, FaCode, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin,
  FaLocationDot, FaMoon, FaShieldHalved, FaSun, FaTerminal,
} from "react-icons/fa6";

const experience = [
  { period: "Dec 2025 — Mar 2026", role: "Cybersecurity Sales Associate", company: "Ducara Info Solutions", copy: "Supported business development and client outreach for consulting services; coordinated project scoping and handovers for security assessments, penetration testing, and ISO/SOC readiness." },
  { period: "Dec 2025 — Feb 2026", role: "Freelance Web Developer", company: "Amar Seva Sangam (NGO)", copy: "Built and deployed a donation-focused website with Zeffy payment processing and security-minded implementation to protect donor data and platform reliability." },
  { period: "Aug 2024 — Present", role: "Technical Team Member", company: "CyberSec RVU", copy: "Contributing to the university cybersecurity community through technical initiatives, security learning, and event work." },
  { period: "Jul 2025 — Present", role: "Founder", company: "secureTitan", copy: "Building a security-first venture with a focus on practical cybersecurity and technology solutions." },
  { period: "May 2025 — Aug 2025", role: "Cyber Security Research Intern", company: "RV University", copy: "Hybrid research internship in Bengaluru, exploring applied cybersecurity problems and security tooling." },
  { period: "May 2025 — Jul 2025", role: "Founder’s Office Intern", company: "Knowledge Plant Academy LLP", copy: "Supported business strategy and outreach in a part-time, on-site role." },
  { period: "Dec 2024 — May 2025", role: "Recruiting Consultant", company: "Knowledge Plant Academy LLP", copy: "Worked in a hybrid consulting role, supporting talent and business operations." },
  { period: "Jun 2024 — Aug 2024", role: "Cyber Security Analyst Intern", company: "RV University", copy: "On-site internship in Bengaluru focused on cybersecurity analysis and hands-on security exposure." },
  { period: "Jun 2023 — Mar 2024", role: "Sales & Marketing Intern", company: "Stellar Tours", copy: "Led B2B outreach and partnerships with schools and organisations, developing negotiation, lead generation, and relationship-building skills." },
  { period: "Mar 2023 — Dec 2023", role: "Web Developer Intern", company: "Stellar Tours", copy: "Implemented front-end and back-end features for the company website under the guidance of its internal technical team." },
];

const projects = [
  { title: "VaniRekha", type: "AI Buildathon", copy: "The AI project that took my team to HCL GUVI’s AI Buildathon at the India AI Impact Summit in New Delhi.", tags: ["Artificial intelligence", "HCL GUVI", "Buildathon finalist"] },
  { title: "PetConnect", type: "Web3 / Full stack", copy: "Decentralized pet-adoption platform using React, Node, Express, MongoDB and Solidity to automate transparent ETN rewards for verified pet-care milestones.", tags: ["Solidity", "Hardhat", "Web3"] },
  { title: "Phishing Simulator", type: "Security awareness", copy: "Ethical security-awareness platform for simulated phishing campaigns, role-based administration, and campaign analytics.", tags: ["React", "Node.js", "MongoDB"] },
  { title: "IoT Security Dashboard", type: "Network security", copy: "Rogue-device detection and quarantine system with real-time packet analysis using Python and Scapy.", tags: ["Python", "Scapy", "Network security"] },
  { title: "VisionGuard AI", type: "AI forensics", copy: "Image-forensics tool that localizes tampered regions and generates an authenticity similarity score with deep learning and computer vision.", tags: ["AI", "Computer vision", "Forensics"] },
];

const certifications = [
  ["Cybersecurity Foundations for Risk Management", "Kennesaw State University", "Jun 2026", "8XA4EK15WHJE"],
  ["Machine Learning for Cyber Threat & Anomaly Detection", "Macquarie University", "Jun 2026", "CO5IJP3JNTL8"],
  ["Cybersecurity Fundamentals", "IBM", "Aug 2025"],
  ["ISO/IEC 27001:2022 Information Security Management Systems", "Udemy", "Jul 2025"],
  ["Ethical Hacking Advanced", "Programming Hub", "Jul 2024"],
  ["Ethical Hacking Basics", "Programming Hub", "Jul 2024"],
  ["Google AI Essentials", "Google", "Jul 2024", "34NC93Q3ZQZ2"],
  ["Google Cybersecurity Specialization", "Google", "Jul 2024", "DZ5DY29QGQE6"],
  ["Put It to Work: Prepare for Cybersecurity Jobs", "Google", "Jul 2024", "W8MZDTKENGH4"],
  ["Automate Cybersecurity Tasks with Python", "Google", "Jul 2024", "RXCQDU86H3US"],
  ["Sound the Alarm: Detection and Response", "Google", "Jul 2024", "4XLPCMBC2NSA"],
  ["Assets, Threats, and Vulnerabilities", "Google", "Jul 2024", "BYARN2PCCV98"],
  ["Fundamentals of Cryptography", "Infosys Springboard", "Jul 2024"],
  ["Fundamentals of Information Security", "Infosys Springboard", "Jul 2024"],
  ["Tools of the Trade: Linux and SQL", "Google", "Jun 2024", "2HQMCFWQBXK4"],
  ["Connect and Protect: Networks and Network Security", "Google", "Jun 2024", "BDJ7DKAFU774"],
  ["Play It Safe: Manage Security Risks", "Google", "Jun 2024", "6HJMHBJKKRN9"],
  ["Foundations of Cybersecurity", "Google", "Jun 2024"],
];

function OrbBackground() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const [shifts, setShifts] = useState({});
  useEffect(() => {
    const onMove = (event) => setPoint({ x: (event.clientX / window.innerWidth - 0.5) * 18, y: (event.clientY / window.innerHeight - 0.5) * 18 });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  const moveAcross = (id, event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const side = bounds.left + bounds.width / 2 > window.innerWidth / 2 ? -1 : 1;
    setShifts((current) => ({
      ...current,
      [id]: { x: Math.round(window.innerWidth * 1.25 * side), y: Math.round((0.5 - event.clientY / window.innerHeight) * 70) },
    }));
  };
  const interactiveStyle = (id, depthX, depthY) => ({
    "--follow-x": `${point.x * depthX}px`, "--follow-y": `${point.y * depthY}px`,
    "--shift-x": `${shifts[id]?.x ?? 0}px`, "--shift-y": `${shifts[id]?.y ?? 0}px`,
  });
  return <div className="orb-field" aria-hidden="true" style={{ "--mx": `${point.x}px`, "--my": `${point.y}px` }}>
    <div className="orb orb-one interactive-orb" style={interactiveStyle("one", 0.42, 0.3)} onClick={(event) => moveAcross("one", event)} />
    <div className="orb orb-two interactive-orb" style={interactiveStyle("two", -0.8, -0.8)} onClick={(event) => moveAcross("two", event)} />
    <div className="orb orb-three interactive-orb" style={interactiveStyle("three", 1.15, 0.7)} onClick={(event) => moveAcross("three", event)} />
    <div className="orb orb-four interactive-orb" style={interactiveStyle("four", -1.35, 1.1)} onClick={(event) => moveAcross("four", event)} />
    <div className="orb orb-five interactive-orb" style={interactiveStyle("five", 1.6, -1.25)} onClick={(event) => moveAcross("five", event)} />
    <div className="orb orb-six" /><div className="orb orb-seven" /><div className="orb orb-eight" />
    <div className="orb-ring" />
    <div className="grid-plane" />
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const shownCertificates = showAllCertificates ? certifications : certifications.slice(0, 6);
  const nav = [["about", "About"], ["experience", "Experience"], ["work", "Work"], ["credentials", "Credentials"]];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <main className={lightMode ? "light-mode" : ""}>
    <OrbBackground />
    <nav className="site-nav"><a className="wordmark" href="#about">HL<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">Menu</button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>{nav.map(([id, label]) => <a onClick={() => setMenuOpen(false)} href={`#${id}`} key={id}>{label}</a>)}<a className="nav-contact" href="#contact">Let’s talk <FaArrowUpRightFromSquare /></a></div>
      <button className="theme-button" onClick={() => setLightMode(!lightMode)} aria-label="Toggle light mode">{lightMode ? <FaMoon /> : <FaSun />}<span>{lightMode ? "Dark" : "Light"}</span></button>
    </nav>

    <section id="about" className="hero shell">
      <div className="eyebrow"><span /> Cybersecurity · builder · founder</div>
      <h1>Designing a more<br /><em>resilient</em> digital world.</h1>
      <p className="hero-copy">I’m Harnith S. L., a cybersecurity-focused computer science student building secure, human-first systems across security engineering, Web3, and AI.</p>
      <div className="hero-actions"><a className="primary-button" href="#work">Explore my work <FaArrowDown /></a><a className="quiet-link" href="mailto:harnithmarshmello@gmail.com">Get in touch <FaArrowUpRightFromSquare /></a></div>
      <div className="hero-metrics"><div><strong>2023—27</strong><span>B.Tech. (Hons.) CSE<br />RV University</span></div><div><strong>7.72</strong><span>Current CGPA<br />out of 10</span></div><div><strong>Top 2%</strong><span>AI builders in India<br />Impact Summit 2026</span></div></div>
    </section>

    <section className="shell intro-grid reveal"><div><p className="section-kicker">01 / Profile</p><h2>Security that earns trust.</h2></div><div className="intro-copy"><p>From vulnerability assessment and penetration testing to security awareness and secure application development, I like working at the intersection of technical depth, clear communication, and practical outcomes.</p><div className="skill-pills">{["Cybersecurity", "Content creation", "Business development", "Team management", "VAPT", "OSINT", "Incident response", "ISO 27001", "React & Node", "Python", "Solidity", "Network security"].map(s => <span key={s}>{s}</span>)}</div></div></section>

    <section id="experience" className="shell section-block reveal"><div className="section-heading"><div><p className="section-kicker">02 / Experience</p><h2>A path shaped by action.</h2></div><p>Technical learning, client-facing work, and entrepreneurial curiosity — all feeding a security-first perspective.</p></div><div className="timeline">{experience.map((job, index) => <article className="timeline-item" key={`${job.role}-${job.period}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-period">{job.period}</div><div className="timeline-card"><h3>{job.role}</h3><p className="company">{job.company}</p><p>{job.copy}</p></div></article>)}</div></section>

    <section id="work" className="shell section-block reveal"><div className="section-heading"><div><p className="section-kicker">03 / Selected work</p><h2>Built with intent.</h2></div><p>Experiments and products that put security, transparency, and usability at the center.</p></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" style={{ "--order": index }} key={project.title}><div className="project-top"><span>{String(index + 1).padStart(2, "0")}</span><FaCode /></div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.copy}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>

    <section id="credentials" className="shell section-block reveal"><div className="section-heading"><div><p className="section-kicker">04 / Learning</p><h2>Credentials &amp; certifications.</h2></div><p>Continuous study across security operations, risk, machine learning, cryptography, and responsible AI.</p></div><div className="credential-grid">{shownCertificates.map(([name, issuer, date, id]) => <article className="credential" key={name}><FaCertificate /><div><h3>{name}</h3><p>{issuer} <span>·</span> Issued {date}</p>{id && <small>Credential ID {id}</small>}</div></article>)}</div><button className="show-more" onClick={() => setShowAllCertificates(!showAllCertificates)}>{showAllCertificates ? "Show fewer credentials" : `View all ${certifications.length} credentials`} <FaArrowDown className={showAllCertificates ? "rotate" : ""} /></button></section>

    <section className="shell achievement-band reveal"><div><FaShieldHalved /><p>Designed and tested multi-level CTF challenges for an RV University cybersecurity event, including scoring and flag verification.</p></div><div><FaGraduationCap /><p>Grand Finalist, India AI Impact Buildathon — top 850 of 38,000+ participating teams.</p></div></section>

    <footer id="contact" className="shell footer reveal"><p className="section-kicker">05 / Contact</p><h2>Let’s build something<br /><em>worth protecting.</em></h2><a className="email-link" href="mailto:harnithmarshmello@gmail.com">harnithmarshmello@gmail.com <FaArrowUpRightFromSquare /></a><div className="footer-bottom"><p><FaLocationDot /> Bengaluru, India</p><div><a href="https://github.com/harnithlokesh" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://www.linkedin.com/in/harnithlokesh/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a><a href="mailto:harnithmarshmello@gmail.com"><FaEnvelope /> Email</a></div><small>© {new Date().getFullYear()} Harnith S. L.</small></div></footer>
  </main>;
}
