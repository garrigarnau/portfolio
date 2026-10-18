const CV_HREF = '/Arnau_Garriga_Torne_CV.pdf'

export default function Hero() {
  return (
    <section className="hero wrap" id="home" aria-labelledby="hero-title">
      <div className="hero__grid">
        <div className="hero__head">
          <h1 className="hero__title" id="hero-title">
            <span className="mask"><span className="mask__line">Arnau Garriga</span></span>
            <span className="mask"><span className="mask__line hero__sub">Data Engineer &amp; Founding Sales Engineer, Barcelona</span></span>
          </h1>
        </div>

        <div className="hero__body">
          <p className="hero__lede">I turn complex AI into demos people get, and build what it takes to ship it.</p>
          <div className="hero__actions">
            <a className="hero__cta" href="#contact">
              Get a demo
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a className="hero__cv" href={CV_HREF} download>Download CV</a>
          </div>
        </div>

        <figure className="hero__fig" aria-label="Portrait of Arnau">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/media/wave.jpg" alt="Figurine of Arnau waving hello" width={491} height={1100} />
        </figure>
      </div>
    </section>
  )
}
