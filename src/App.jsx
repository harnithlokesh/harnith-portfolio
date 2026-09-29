import "./App.css";
import { useEffect, useState } from "react";
import {
  FaArrowDown, FaArrowUpRightFromSquare, FaBriefcase, FaCalendarCheck,
  FaCertificate, FaCode, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedin,
  FaLocationDot, FaMoon, FaShieldHalved, FaSun,
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
  { title: "TryHackMe Documentation", type: "Security documentation", copy: "Practical TryHackMe notes and documentation covering hands-on cybersecurity learning, techniques, and workflows.", tags: ["TryHackMe", "Cybersecurity", "Documentation"], link: "https://github.com/harnithlokesh/tryhackme_documentation" },
  { title: "Enterprise Security Documentation", type: "Security documentation", copy: "Cybersecurity and enterprise-security documentation focused on clear, reusable security knowledge and professional practice.", tags: ["Enterprise security", "Cybersecurity", "Documentation"], link: "https://github.com/harnithlokesh/cybersecurity_documentation" },
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const shownCertificates = showAllCertificates ? certifications : certifications.slice(0, 6);
  const nav = [["about", "About"], ["experience", "Experience"], ["work", "Work"], ["credentials", "Credentials"]];

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      entry.target.classList.toggle("is-visible", entry.isIntersecting);
    }), { threshold: 0.12, rootMargin: "-8% 0px -12% 0px" });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = document.getElementById("scroll-canvas");
    const context = canvas?.getContext("2d");
    if (!canvas || !context || matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let animationFrame, width, height, progress = 0, target = 0;
    const resize = () => {
      const ratio = Math.min(devicePixelRatio || 1, 2);
      width = innerWidth; height = innerHeight;
      canvas.width = width * ratio; canvas.height = height * ratio;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const onScroll = () => { target = scrollY / Math.max(document.documentElement.scrollHeight - innerHeight, 1); };
    const render = () => {
      progress += (target - progress) * .055;
      context.clearRect(0, 0, width, height);
      const horizon = height * .72;
      const offset = (progress * 1100) % 86;
      for (let y = horizon; y < height + 90; y += 34) {
        const depth = (y - horizon) / (height - horizon);
        const wave = Math.sin(progress * 10 + y * .025) * 9;
        context.strokeStyle = `rgba(57,255,20,${.018 + depth * .07})`;
        context.beginPath(); context.moveTo(0, y + wave + offset * depth); context.lineTo(width, y - wave + offset * depth); context.stroke();
      }
      const center = width * (.5 + Math.sin(progress * 6) * .06);
      for (let x = -width; x < width * 2; x += 74) {
        context.strokeStyle = "rgba(255,255,255,.035)";
        context.beginPath(); context.moveTo(center + (x - center) * .05, horizon); context.lineTo(x, height); context.stroke();
      }
      const glow = context.createRadialGradient(center, horizon, 0, center, horizon, Math.max(width, height) * .46);
      glow.addColorStop(0, "rgba(57,255,20,.10)"); glow.addColorStop(1, "rgba(57,255,20,0)");
      context.fillStyle = glow; context.fillRect(0, 0, width, height);
      animationFrame = requestAnimationFrame(render);
    };
    resize(); onScroll(); render(); addEventListener("resize", resize); addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(animationFrame); removeEventListener("resize", resize); removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const card = document.getElementById("glass-card"); const ring = document.getElementById("cursor-ring");
    if (!card || !ring || matchMedia("(pointer: coarse)").matches) return undefined;
    let x = innerWidth / 2, y = innerHeight / 2, cx = x, cy = y, active = false, frameId;
    const move = (event) => { x = event.clientX; y = event.clientY; if (!active) { cx = x; cy = y; active = true; card.classList.add("active"); ring.classList.add("active"); } };
    const frame = () => { cx += (x - cx) * .08; cy += (y - cy) * .08; card.style.transform = `translate3d(${cx}px,${cy}px,0) translate(-50%,-50%)`; ring.style.transform = `translate3d(${x}px,${y}px,0) translate(-50%,-50%)`; frameId = requestAnimationFrame(frame); };
    addEventListener("pointermove", move, { passive: true }); frame(); return () => { removeEventListener("pointermove", move); cancelAnimationFrame(frameId); };
  }, []);

  return <main className={lightMode ? "light-mode" : ""}>
    <div className="video-container" aria-hidden="true"><video autoPlay muted loop playsInline><source src="https://api.getlayers.ai/storage/v1/object/public/public/assets/loopstack-f8c64439bf/flower.mp4" type="video/mp4" /></video></div>
    <canvas id="scroll-canvas" className="scroll-canvas" aria-hidden="true" />
    <img className="top-gradient" src="https://api.getlayers.ai/storage/v1/object/public/public/assets/loopstack-f8c64439bf/black_gradient.svg" alt="" aria-hidden="true" />
    <nav className="site-nav"><a className="wordmark" href="#about">HL<span>.</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">Menu</button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>{nav.map(([id, label]) => <a onClick={() => setMenuOpen(false)} href={`#${id}`} key={id}>{label}</a>)}<a className="nav-contact" href="#contact">Let’s talk <FaArrowUpRightFromSquare /></a></div>
      <button className="theme-button" onClick={() => setLightMode((current) => !current)} aria-label={`Switch to ${lightMode ? "dark" : "light"} mode`} title={`Switch to ${lightMode ? "dark" : "light"} mode`}>{lightMode ? <FaMoon /> : <FaSun />}</button>
    </nav>

    <section id="about" className="hero shell">
      <div className="eyebrow"><span /> Technology · security · business · product thinking</div>
      <h1>Building where<br /><em>technology</em> meets business.</h1>
      <p className="hero-copy">I’m Harnith Lokesh. I work across technology and business, using a foundation in cybersecurity to understand technical problems, stakeholder needs, and the solutions people and organizations can actually use.</p>
      <div className="hero-actions"><a className="primary-button" href="#work">Explore my work <FaArrowDown /></a><a className="quiet-link" href="mailto:harnithmarshmello@gmail.com">Get in touch <FaArrowUpRightFromSquare /></a></div>
      <div className="hero-thesis"><span>My working thesis</span><strong>I like understanding both sides of the problem.</strong><p>The technology, how systems work and fail, and the business, why the problem matters and who experiences it.</p></div>
      <div className="communication-note"><span>Communication is part of the work</span><p>I’ve always been interested in bridging the gap between technical teams and business teams, stakeholders, and clients — translating requirements clearly so the right problem is understood before the solution is built.</p></div>
      <div className="intersection-map" aria-label="Technology, security and business intersect at product thinking"><div><span>Technology</span><small>Building systems</small></div><div><span>Security</span><small>Making systems trustworthy</small></div><div><span>Business</span><small>Making systems useful</small></div><strong>PRODUCT<br /><small>Problem · people · technology · outcome</small></strong></div>
      <div className="hero-metrics"><div><strong>AI Security Evangelist</strong><span>Finding smart ways to turn enterprise security<br />into an automated defense wall</span></div><div><strong>Outstanding</strong><span>O grades across cybersecurity,<br />Computer Networks, Operating Systems,<br />Fintech &amp; business electives</span></div><div><strong>Top 2%</strong><span>AI builders in India<br />Impact Summit 2026</span></div></div>
    </section>

    <section className="shell intro-grid reveal"><div><p className="section-kicker">01 / Profile</p><h2>Security that earns trust.</h2></div><div className="intro-copy"><p>From vulnerability assessment and penetration testing to security awareness and secure application development, I like working at the intersection of technical depth, clear communication, and practical outcomes.</p><div className="skill-pills">{["Cybersecurity", "Web development", "Business development", "Client communication", "Stakeholder communication", "Requirements understanding", "Product thinking", "Business operations", "Fintech concepts", "Google Workspace", "CRM fundamentals", "Project coordination", "VAPT", "OSINT", "React & Node", "Python", "Solidity", "Network security"].map(s => <span key={s}>{s}</span>)}</div></div></section>

    <section id="experience" className="shell section-block reveal"><div className="section-heading"><div><p className="section-kicker">02 / Experience</p><h2>A path shaped by action.</h2></div><p>Technical learning, client-facing work, and entrepreneurial curiosity — all feeding a security-first perspective.</p></div><div className="timeline">{experience.map((job, index) => <article className="timeline-item" key={`${job.role}-${job.period}`}><div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div><div className="timeline-period">{job.period}</div><div className="timeline-card"><h3>{job.role}</h3><p className="company">{job.company}</p><p>{job.copy}</p></div></article>)}</div></section>

    <section id="work" className="shell section-block reveal"><div className="section-heading"><div><p className="section-kicker">03 / Selected work</p><h2>Built with intent.</h2></div><p>Experiments and products that put security, transparency, and usability at the center.</p></div><div className="project-grid">{projects.map((project, index) => { const Card = project.link ? "a" : "article"; return <Card className={`project-card${project.link ? " project-card-link" : ""}`} style={{ "--order": index }} key={project.title} {...(project.link ? { href: project.link, target: "_blank", rel: "noreferrer", "aria-label": `Open ${project.title} on GitHub` } : {})}><div className="project-top"><span>{String(index + 1).padStart(2, "0")}</span><FaCode /></div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.copy}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></Card>; })}</div></section>

    <section id="credentials" className="shell section-block reveal"><div className="section-heading"><div><p className="section-kicker">04 / Learning</p><h2>Credentials &amp; certifications.</h2></div><p>Continuous study across security operations, risk, machine learning, cryptography, and responsible AI.</p></div><div className="credential-grid">{shownCertificates.map(([name, issuer, date, id]) => <article className="credential" key={name}><FaCertificate /><div><h3>{name}</h3><p>{issuer} <span>·</span> Issued {date}</p>{id && <small>Credential ID {id}</small>}</div></article>)}</div><button className="show-more" onClick={() => setShowAllCertificates(!showAllCertificates)}>{showAllCertificates ? "Show fewer credentials" : `View all ${certifications.length} credentials`} <FaArrowDown className={showAllCertificates ? "rotate" : ""} /></button></section>

    <section className="shell achievement-band reveal"><div><FaShieldHalved /><p>Designed and tested multi-level CTF challenges for an RV University cybersecurity event, including scoring and flag verification.</p></div><div><FaGraduationCap /><p>Grand Finalist, India AI Impact Buildathon — top 850 of 38,000+ participating teams.</p></div></section>

    <footer id="contact" className="shell footer reveal"><p className="section-kicker">05 / Contact</p><h2>Let’s build something<br /><em>worth protecting.</em></h2><a className="email-link" href="mailto:harnithmarshmello@gmail.com">harnithmarshmello@gmail.com <FaArrowUpRightFromSquare /></a><div className="footer-bottom"><p><FaLocationDot /> Bengaluru, India</p><div><a href="https://github.com/harnithlokesh" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a href="https://www.linkedin.com/in/harnithlokesh/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a><a href="https://tryhackme.com/p/titan44" target="_blank" rel="noreferrer"><FaCode /> TryHackMe</a><a href="https://leetcode.com/u/harnithmarshmello/" target="_blank" rel="noreferrer"><FaCode /> LeetCode</a><a href="mailto:harnithmarshmello@gmail.com"><FaEnvelope /> Email</a></div><small>© {new Date().getFullYear()} Harnith Lokesh</small></div></footer>
    <div id="cursor-ring" className="cursor-ring" aria-hidden="true" />
    <div id="glass-card" className="glass-card" aria-hidden="true"><span>Say</span> Hello!</div>
    {lightMode && <div className="light-mode-overlay" aria-hidden="true" />}
  </main>;
}
