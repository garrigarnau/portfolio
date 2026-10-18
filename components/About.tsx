export default function About() {
  return (
    <section className="section wrap" id="about" aria-labelledby="about-title">
      <div className="section__head">
        <h2 className="section__title" id="about-title">About</h2>
      </div>
      <div className="about__body">
        <div className="about__text">
          <p>I&apos;m a Data Engineer from Barcelona, with a BS in Data Engineering from Universitat Autònoma de Barcelona.</p>
          <p>These days I&apos;m the Founding Sales Engineer at Prosper AI, building custom demos and the capabilities that close deals.</p>
          <p>I like sitting between customers and engineering: understanding the real problem, then shipping something fast to solve it. Build fast, fail fast, learn fast.</p>
          <p>Aside from work, I&apos;ve spent three years volunteering as a basketball coach. I speak Catalan, Spanish, English and some Portuguese.</p>
        </div>
        <figure className="about__fig" data-parallax="0.12">
          <div className="about__cycle" data-cycle>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/media/coding.jpg" alt="Figurine of Arnau coding at a desk" width={900} height={900} loading="lazy" />
          </div>
        </figure>
      </div>
    </section>
  )
}
