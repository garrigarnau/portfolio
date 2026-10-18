const CV_HREF = '/Arnau_Garriga_Torne_CV.pdf'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <span className="footer__copy">© <span data-year>2026</span> Arnau Garriga Torné</span>
          <div className="footer__links">
            <a href={CV_HREF} download>Download CV</a>
            <button type="button" data-top>Back to top</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
