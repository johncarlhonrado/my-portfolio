import Reveal from "@/components/ui/Reveal";



export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <Reveal>
          <span className="eyebrow-label">01 · About</span>
          <h2 className="section-title">
            Engineering thoughtful products, not just shipping features.
          </h2>
          <div className="learning-badge" style={{ marginTop: 24 }}>
            <span className="pulse" /> Currently learning: Prompt Engineering &amp; Automation
          </div>
        </Reveal>

        <Reveal delay={0.1} className="about-copy">
          <p>
            I&apos;m a recent <strong>Bachelor of Science in Information Technology graduate
            </strong> with a passion for building modern web applications and continuously 
            expanding my skills as a full-stack developer. Through academic projects and my 
            internship, I gained hands-on experience developing responsive and scalable 
            applications using technologies such as React, Next.js, Express.js, PostgreSQL, 
            and React Native.
          </p>

          <p>
            During my internship, I contributed to the development and enhancement of 
            business systems by implementing new features, managing databases, testing 
            applications, and improving user experience. These experiences strengthened my 
            understanding of the complete software development lifecycle while reinforcing 
            the importance of writing clean, maintainable, and efficient code.
          </p>

          <p>
            I&apos;m eager to begin my professional career where I can collaborate with 
            experienced developers, contribute to meaningful projects, and 
            continue growing as a software engineer. I enjoy learning new technologies, 
            solving real-world problems, and creating applications that are reliable, 
            user-friendly, and built with long-term maintainability in mind.
          </p>

        </Reveal>
      </div>
    </section>
  );
}
