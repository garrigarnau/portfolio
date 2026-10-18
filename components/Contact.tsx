export default function Contact() {
  return (
    <section className="section wrap" id="contact" aria-labelledby="contact-title">
      <div className="section__head">
        <h2 className="section__title" id="contact-title">Get a demo</h2>
        <p className="contact__lede">Open to sales engineering, AI work and interesting problems. The fastest way to reach me is LinkedIn.</p>
      </div>
      <ul className="contact__list">
        <li>
          <a className="contact__row" href="mailto:arnaugarrigatorne@gmail.com">
            <span className="contact__net">Email</span>
            <span className="contact__val">arnaugarrigatorne@gmail.com</span>
            <span className="contact__arrow" aria-hidden="true">&#8599;</span>
          </a>
        </li>
        <li>
          <a className="contact__row" href="https://www.linkedin.com/in/arnau-garriga-696991163" target="_blank" rel="noopener noreferrer">
            <span className="contact__net">LinkedIn</span>
            <span className="contact__val">/in/arnau-garriga</span>
            <span className="contact__arrow" aria-hidden="true">&#8599;</span>
          </a>
        </li>
        <li>
          <a className="contact__row" href="https://github.com/garrigarnau" target="_blank" rel="noopener noreferrer">
            <span className="contact__net">GitHub</span>
            <span className="contact__val">/garrigarnau</span>
            <span className="contact__arrow" aria-hidden="true">&#8599;</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
