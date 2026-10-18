import ProjectPattern from '@/components/ProjectPatterns'

const PROJECTS = [
  {
    name: 'Chronic Disease AI Agent',
    href: 'https://github.com/garrigarnau/Chronic-Disease-AI-Agent',
    pattern: 'pulse' as const,
    desc: 'Conversational AI agent for querying U.S. Chronic Disease Indicators in natural language, combining SQL and semantic search over PostgreSQL with pgvector.',
    tech: ['Python', 'GPT-4o', 'LangGraph', 'PostgreSQL', 'pgvector'],
  },
  {
    name: 'NYC Taxi Rides Analysis',
    href: 'https://github.com/garrigarnau/NYC-TAXI-RIDES-ANALYSIS',
    pattern: 'grid' as const,
    desc: 'Big data spatial analysis of NYC taxi trips, with custom grid discretization and flow visualization in Kepler.gl.',
    tech: ['PySpark', 'Big Data', 'Kepler.gl', 'Jupyter'],
  },
  {
    name: 'MNIST Distributed Training Analysis',
    href: 'https://github.com/garrigarnau/MNIST-Distributed-Training-Analysis',
    pattern: 'pixels' as const,
    desc: 'Research and comparison of basic and distributed training of convolutional neural network models.',
    tech: ['Python', 'CNNs', 'Distributed Training'],
  },
  {
    name: 'Satellite Tracker',
    href: 'https://github.com/garrigarnau/SATELLITE-TRACKER',
    site: 'https://www.satellitetracker.org/',
    pattern: 'orbits' as const,
    desc: 'Satellite tracker built with React, a simple end-to-end walkthrough of a basic React deployment.',
    tech: ['React', 'Python', 'Deployment'],
  },
]

export default function Projects() {
  return (
    <section className="section wrap work" id="projects" aria-labelledby="projects-title">
      <div className="section__head work__head">
        <h2 className="section__title" id="projects-title">Side Projects</h2>
      </div>

      <div className="work__track">
        {PROJECTS.map((p) => (
          <article className="work__panel project__panel" key={p.href}>
            <ProjectPattern name={p.pattern} />
            <div className="work__meta">
              {'site' in p && (
                <a className="work__period project__link" href={p.site} target="_blank" rel="noopener noreferrer">
                  Visit site <span aria-hidden="true">↗</span>
                </a>
              )}
              <a className="work__period project__link" href={p.href} target="_blank" rel="noopener noreferrer">
                View on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
            <h3 className="work__role project__name">{p.name}</h3>
            <p className="work__desc">{p.desc}</p>
            <ul className="work__tech">
              {p.tech.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
