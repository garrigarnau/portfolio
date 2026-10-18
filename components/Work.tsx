export default function Work() {
  return (
    <section className="section wrap work" id="work" aria-labelledby="work-title">
      <div className="section__head work__head">
        <h2 className="section__title" id="work-title">Work Experience</h2>
      </div>

      <div className="work__viewport">
        <div className="work__track">

          <article className="work__panel">
            <div className="work__meta">
              <span className="work__period">Sep 2026 - Present</span>
            </div>
            <div className="work__header">
              <div className="work__heading">
                <h3 className="work__role">Founding Sales Engineer</h3>
                <p className="work__org">Prosper AI <span className="work__about">Backed by $35M from a16z, Emergence and Y Combinator, Prosper AI builds voice AI agents that handle patient and payer calls for healthcare.</span></p>
              </div>
              <div className="work__brand">
                <a className="work__linkedin" href="https://www.linkedin.com/company/prospertechnologies/" target="_blank" rel="noopener noreferrer" aria-label="Prosper AI on LinkedIn">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="work__logo" src="/logos/prosper.svg" alt="Prosper AI logo" width={120} height={38} loading="lazy" />
              </div>
            </div>
            <p className="work__desc">Founded and built the Sales Engineering function, with a repeatable demo process supporting 10 AEs at about four demos a day. Supported $1.5M in deal value through product demos, with $500K sold and progressing, and delivered 60+ custom demos tailored to specific customer requirements. Opened a median of two new product capabilities per week to close platform gaps, and originated two product paths that are now fully productized, generating over $300K in sales to date.</p>
            <ul className="work__tech">
              <li>Sales Engineering</li><li>Custom Demos</li><li>Product Engineering</li><li>AI</li>
            </ul>
          </article>

          <article className="work__panel">
            <div className="work__meta">
              <span className="work__period">Jan 2025 - Present</span>
            </div>
            <div className="work__header">
              <div className="work__heading">
                <h3 className="work__role">Technical Sales Engineer &amp; AI Engineer</h3>
                <p className="work__org">Aizon AI <span className="work__about">Backed by a $20M Series C led by NewVale Capital, Aizon builds AI software that optimizes pharmaceutical manufacturing.</span></p>
              </div>
              <div className="work__brand">
                <a className="work__linkedin" href="https://www.linkedin.com/company/aizon/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="Aizon on LinkedIn">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="work__logo" src="/logos/aizon.svg" alt="Aizon logo" width={94} height={26} loading="lazy" />
              </div>
            </div>
            <p className="work__desc">Supported technical sales, product demos and demo-enabling tools for pharmaceutical clients. Contributed to AI-driven production optimization, automation tools and RAG systems.</p>
            <ul className="work__tech">
              <li>RAG</li><li>Data Science</li><li>Automation</li><li>Pharma</li><li>Demos</li>
            </ul>
          </article>

          <article className="work__panel">
            <div className="work__meta">
              <span className="work__period">Feb 2025 - Jan 2026</span>
            </div>
            <h3 className="work__role">AI Consulting for SMEs</h3>
            <p className="work__org">Freelance</p>
            <p className="work__desc">Consulting for small and medium companies to integrate AI into their workflows. Built an HR chatbot on Microsoft Teams with RAG. Developed an email management platform with AI decision making. Created a document extraction pipeline cutting manual entry by 70%.</p>
            <ul className="work__tech">
              <li>Python</li><li>RAG</li><li>Knowledge Graphs</li><li>Microsoft</li><li>LLMs</li><li>SLMs</li>
            </ul>
          </article>

          <article className="work__panel">
            <div className="work__meta">
              <span className="work__period">Dec 2025 - Jan 2026</span>
            </div>
            <h3 className="work__role">Livea - AI Ticketing System</h3>
            <p className="work__org">Side Project</p>
            <p className="work__desc">Built an AI-powered ticketing system for real estate managers with WhatsApp integration, automating customer service and making property management more efficient.</p>
            <ul className="work__tech">
              <li>Python</li><li>LangChain</li><li>WhatsApp API</li><li>AI Agents</li><li>React</li><li>Nest.js</li><li>FastAPI</li>
            </ul>
          </article>

          <article className="work__panel">
            <div className="work__meta">
              <span className="work__period">Sep 2024 - Dec 2024</span>
            </div>
            <h3 className="work__role">Data Scientist &amp; Product Automation Intern</h3>
            <p className="work__org">Lawwing</p>
            <p className="work__desc">Developed Python and SQL systems for lead generation and market analysis, including web scraping, PDF parsing and automated cron jobs on VMs.</p>
            <ul className="work__tech">
              <li>Python</li><li>SQL</li><li>Web Scraping</li><li>PDF Parsing</li><li>Cron Jobs</li><li>VMs</li>
            </ul>
          </article>

        </div>
      </div>
    </section>
  )
}
