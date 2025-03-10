import "../style/brand.scss";

function About() {
  return (
    <main className="brand">
      <section className="brand__container">
        <section className="brand__header">
          <div className="brand__header-wrapper">
            <h2 className="brand__title">Top Brands</h2>
            <img
              className="brand__logo"
              src="/images/logo.svg"
              alt="Brand Logo"
            />
          </div>
        </section>

        <section className="brand__content">
          <div className="brand__content-wrapper">
            <aside className="brand__brands">
              <p>Here are just a few of the brands we stock:</p>
              <div className="brand__brands-container">
                <img src="/images/brands.png" alt="Brand Logos" />
              </div>
            </aside>

            <article className="brand__info">
              <h4 className="brand__info-title">Brands</h4>
              <p>
                As an independent retailer of home audio and visual products, we
                are able to select the very best brands and manufacturers from
                across the world.
              </p>
              <p>
                Not only do we have the best known brands such as B&W, Devialet,
                KFF, Naim, and Linn; we also stock and are well versified with
                smaller autonomous companies like Michell Engineering, Neat
                Acoustics, Harbeth, SMF, Trichord Research, Primal una, to name
                but a few.
              </p>
              <p>
                With over a hundred brands, we can happily say that if a brand
                meets our high standards for sound reproduction, then you can be
                assured to find it at Hi-Fi Corner.
              </p>

              <a
                className="brand__link"
                href="https://hificorner.onrender.com/shop-page"
              >
                Visit Our Shop to Find More Brands
              </a>
            </article>
          </div>
        </section>
      </section>
    </main>
  );
}

export default About;
