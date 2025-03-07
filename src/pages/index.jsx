import { Facebook2, Blogger, Twitter2 } from "../GetIcons";

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-overlay">
            <img src="/images/logo.png" alt="Website Logo" />
          </div>
        </section>

        <section className="announcement">
          <h1>
            Our Edinburgh Showroom Has Now Moved to Stunning New Premises on
            Joppa Road
          </h1>
        </section>

        <section className="featured-product">
          <h3>Primaluna Sounds</h3>
          <div className="product-carousel">
            <button className="carousel-prev">‹</button>
            <img src="primaluna-amp.jpg" alt="Primaluna Tube Amplifier" />
            <button className="carousel-next">›</button>
          </div>
        </section>

        <section className="info">
          <div className="info__socials">
            <a
              style={{
                backgroundImage: "url(/images/socials/facebook-background.jpg)",
              }}
              className="info__socials__item"
              href="https://www.facebook.com/hificorner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook2 />
            </a>
            <a
              style={{
                backgroundImage: "url(/images/socials/blogger-background.jpg)",
              }}
              className="info__socials__item"
              href="https://www.blogger.com/hificorner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Blogger />
            </a>
            <a
              style={{
                backgroundImage: "url(/images/socials/twitter-backgorund.jpg)",
              }}
              className="info__socials__item"
              href="https://www.twitter.com/hificorner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter2 />
            </a>
          </div>

          <div className="info__content">
            <article className="info-article">
              <a className="article-link" href="#history">
                History
              </a>
              <p className="article-text">
                Established in the late 1960s, our family-owned business is
                based in Edinburgh and Alnwick, servicing customers across the
                UK.
              </p>
            </article>

            <article className="info-article">
              <a className="article-link" href="#news">
                News
              </a>
              <p className="article-text">
                Check out our latest news stories for all up-to-date Hi-Fi
                Corner products and launches.
              </p>
            </article>

            <article className="info-article">
              <a className="article-link" href="#shop">
                Shop
              </a>
              <p className="article-text">
                Have a look in our online shop for great products and deals.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
