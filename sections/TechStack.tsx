import Reveal from "@/components/ui/Reveal";
import { stackGroups } from "@/constants/stack";

export default function TechStack() {
  return (
    <section id="stack">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow-label">02 · Tech Stack</span>
          <h2 className="section-title">Tools I reach for daily</h2>
          <p className="section-sub">
            A pragmatic toolkit built around React Native, Node.js, and modern cloud
            infrastructure — chosen for developer experience and long-term maintainability.
          </p>
        </Reveal>

        {stackGroups.map((group) => (
          <Reveal key={group.label} className="stack-group">
            <div className="stack-group-label">{group.label}</div>
            <div className="stack-grid">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="stack-card" key={item.name}>
                    {Icon ? (
                      <Icon className="stack-icon" />
                    ) : (
                      <i className={`devicon-${item.devicon} stack-icon`} aria-hidden="true" />
                    )}
                    <span>{item.name}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
