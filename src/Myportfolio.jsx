import "./Portfolio.css";
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import salmanPort from "./assets/salmanport.png";
import screenshot from './assets/screenshot.png';
import foodImage from './assets/food.png';
import Todolist from './assets/Typing.png';
import Doctor from './assets/doctor.png';
import Qatar from './assets/qatar.png';

function Myportfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hover, setHover] = useState(false);

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: true, // animate only once
        });
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar" data-aos="fade-down">
                <a href="#home" className="logo">Portfolio</a>

                {/* Hamburger Menu */}
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li className="active"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#enquiry">Enquiry</a></li>
                </ul>
            </nav>

            {/* Home Section */}
            <section className="home" id="home" data-aos="fade-up">
                <div className="home-info">
                    <h1>Salmanul Faris P C O</h1>
                    <h2>I'm a Web Developer</h2>
                    <p>
                        I am a passionate Web Developer with a strong focus on creating responsive,
                        user-friendly, and modern websites. I enjoy turning ideas into real digital
                        experiences using clean code and creative design. My goal is to build web
                        solutions that are not only functional but also visually appealing and easy to use.
                    </p>

                    <div className="btn-sci">
                        <a href="/MyAts.pdf" download target="_blank" rel="noopener noreferrer">
                            <button
                                style={{
                                    padding: "10px 20px",
                                    background: hover ? "#7cf03d" : "transparent",
                                    color: hover ? "#1f242d" : "#7cf03d",
                                    border: "2px solid #7cf03d",
                                    borderRadius: "50px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    transition: "all 0.5s ease",
                                    boxShadow: hover ? "0 0 10px #7cf03d" : "none",
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                Download CV
                            </button>
                        </a>

                        <div className="sci">
                            <a href="https://github.com/salmanulfarispco" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={25} />
                            </a>
                            <a href="https://www.linkedin.com/in/salmanul-faris-p-c-o-3b5459345" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={25} />
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={25} />
                            </a>
                            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={25} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Home Image */}
                <div className="home-img" data-aos="fade-left">
                    <div className="img-box">
                        <div className="img-item">
                            <img src={salmanPort} alt="Portfolio" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about" id="about" data-aos="fade-up">
                <h2>About Me </h2>
                <p>
                    I am a passionate <strong>Full Stack Web Developer and Web Designer</strong> with over a year of
                    consistent practice and project-building experience. My expertise lies in creating clean, responsive,
                    and user-friendly web applications using modern technologies like <strong>HTML, CSS, JavaScript, React.js,
                        and the MERN stack (MongoDB, Express, React, Node.js)</strong>.
                    Over the past year, I’ve worked on several projects including an <strong>online fashion store,
                        doctor appointment booking system, food recipe website, and interactive to-do list</strong>.
                    These projects helped me strengthen my skills in both <strong>UI/UX design</strong> and <strong>full-stack development</strong>.
                </p>
            </section>

            {/* Services Section */}
            <section className="services" id="services" data-aos="fade-up">
                <h2>My Services</h2>
                <div className="service-cards">
                    <div className="service-card" data-aos="fade-right">
                        <h3> <i className='bx bx-code-alt'></i>Web Development</h3>
                        <p>
                            I build functional and scalable websites using HTML, CSS, JavaScript,
                            React, and the MERN stack. From user management to database integration,
                            I ensure smooth performance and security.
                        </p>
                    </div>
                    <div className="service-card" data-aos="fade-left">
                        <h3> <i className='bx bx-paint'></i> Web Designing</h3>
                        <p>
                            I design modern, user-friendly interfaces using creative tools and
                            frameworks. My focus is on responsive layouts, clean UI, and
                            engaging digital experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="projects" id="projects">
                <h2 data-aos="fade-up">My Projects</h2>

                {/* Each project card animates individually */}
                <div className="project-item" data-aos="fade-up" data-aos-delay="50">
                    <img src={Doctor} alt="Doctor" />
                    <h3>Doctor Appointment Booking System</h3>
                    <p>
                        A full-stack web application with user management, database integration,
                        and features for booking and managing doctor appointments.
                    </p>
                    <p>
                        <strong>Tech Stack:</strong> MERN (MongoDB, Express, React, Node.js)
                    </p>
                    <div className="project-links">
                        <a
                            href="https://medicare-lilac-two.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#00fff6',
                                color: '#000',
                                borderRadius: '8px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="project-item" data-aos="fade-up" data-aos-delay="100">
                    <img src={screenshot} alt="Clothing Website" />
                    <h3>Clothing Website</h3>
                    <p>
                        Built with HTML, CSS, and React.js featuring kids, women's, and men's wear
                        collections with a responsive and modern shopping interface.
                    </p>
                    <p>
                        <strong>Tech Stack:</strong> (HTML, CSS, React js)
                    </p>
                    <div className="project-links">
                        <a
                            href="https://ecommerce-sh5z.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#00fff6',
                                color: '#000',
                                borderRadius: '8px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="project-item" data-aos="fade-up" data-aos-delay="150">
                    <img src={foodImage} alt="Food" />
                    <h3>Food Recipe Website</h3>
                    <p>
                        Created using HTML, CSS, Bootstrap, and JavaScript. Users can browse recipes,
                        view step-by-step cooking instructions, and explore cuisines easily.
                    </p>
                    <p>
                        <strong>Tech Stack:</strong> (HTML, CSS, React js)
                    </p>
                    <div className="project-links">
                        <a
                            href="https://taste-bite-beryl.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#00fff6',
                                color: '#000',
                                borderRadius: '8px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="project-item" data-aos="fade-up" data-aos-delay="200">
                    <img src={Todolist} alt="Typing Center Website" />
                    <h3>Typing Center Website</h3>
                    <p>
                        A dynamic web application for a typing center built with React. It allows users
                        to explore services, view staff details, and contact the center efficiently.
                    </p>
                    <p>
                        <strong>Tech Stack:</strong> (React, HTML, CSS, JavaScript)
                    </p>
                    <div className="project-links">
                        <a
                            href="https://alsadiq-website-kszy.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#00fff6',
                                color: '#000',
                                borderRadius: '8px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            View Project
                        </a>
                    </div>
                </div>

                <div className="project-item" data-aos="fade-up" data-aos-delay="250">
                    <img src={Qatar} alt="qatar carrier" />
                    <h3>Qatar Carrier Project</h3>
                    <p>
                        Developed a full-stack job portal where job seekers can apply through a dynamic form.
                    </p>
                    <p>
                        <strong>Tech Stack:</strong> (React, HTML, CSS, JavaScript)
                    </p>
                    <div className="project-links">
                        <a
                            href="https://medicare-lilac-two.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            style={{
                                display: 'inline-block',
                                marginTop: '10px',
                                padding: '10px 20px',
                                backgroundColor: '#00fff6',
                                color: '#000',
                                borderRadius: '8px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            View Project
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contact" id="contact" data-aos="fade-up">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                    <div><i className="bx bx-envelope"></i> salmanulfaris3377@gmail.com</div>
                    <div><i className="bx bx-map"></i> Doha, Qatar</div>
                    <div><i className="bx bx-phone"></i> +974 3030 6588</div>
                </div>
            </section>

            {/* Enquiry Section */}
            <section className="enquiry" id="enquiry" data-aos="fade-up">
                <h2>Enquiry</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <input type="text" placeholder="Subject" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">
                        <i className="bx bx-send"></i> Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="footer" data-aos="fade-up">
                <div className="footer-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="#enquiry">Enquiry</a>
                </div>
                <div className="footer-contact">
                    <p><i className="bx bx-envelope"></i> salmanulfaris3377@gmail.com</p>
                    <p><i className="bx bx-phone"></i> +974 3030 6588</p>
                    <p><i className="bx bx-map"></i> Doha, Qatar</p>
                </div>
                <p>@salmanulfaris. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Myportfolio;
