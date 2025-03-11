import { LocationMark, Phone, Email, Clock } from "../GetIcons.jsx";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="contact">
      <header className="contact__header">
        <h1 className="contact__title">Contact Us</h1>
      </header>

      <section className="contact__container">
        {[
          {
            city: "Edinburgh",
            phone: "0131 556 7901",
            email: "sales@hificorner.co.uk",
            address: "2 Joppa Rd, Edinburgh, EH15 2EU",
            mapSrc:
              "https://maps.google.com/maps?q=HiFi%20Corner%2C%202%20Joppa%20Rd%2C%20Edinburgh%2C%20EH15%202EU&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near",
            hours: "Mon - Sat: 9:30am - 5:30pm. Sun closed.",
          },
          {
            city: "Falkirk",
            phone: "01324 629 011",
            email: "falkirk@hificorner.co.uk",
            address: "44 Cow Wynd, Falkirk, FK1 1PU",
            mapSrc:
              "https://maps.google.com/maps?q=HiFi%20Corner%2C%2044%20Cow%20Wynd%2C%20Falkirk%2C%20FK1%201PU&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near",
            hours:
              "Mon - Sat: 10am - 5:30pm. Sat appointment only. Sun closed.",
          },
        ].map((location, index) => (
          <article className="contact__article" key={index}>
            <div className="contact__info">
              <h2 className="contact__subtitle">{location.city}</h2>
              <ul className="contact__details">
                <div className="contact__content">
                  <li className="contact__detail">
                    <Phone className="contact__icon" />
                    <Link
                      to={`tel:${location.phone}`}
                      className="contact__text"
                    >
                      {location.phone}
                    </Link>
                  </li>
                  <li className="contact__detail">
                    <Email className="contact__icon" />
                    <Link
                      to={`mailto:${location.email}`}
                      className="contact__text"
                    >
                      {location.email}
                    </Link>
                  </li>
                </div>
                <li className="contact__detail">
                  <LocationMark className="contact__icon" />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      location.address
                    )}`}
                    className="contact__text"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {location.address}
                  </a>
                </li>
                <li className="contact__detail">
                  <Clock className="contact__icon" />
                  <p className="contact__hours">{location.hours}</p>
                </li>
              </ul>
            </div>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=HiFi%20Corner%2C%2044%20Cow%20Wynd%2C%20Falkirk%20%20Central%20Region%2C%20FK1%201PU&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="HiFi Corner, 44 Cow Wynd, Falkirk  Central Region, FK1 1PU"
              aria-label="HiFi Corner, 44 Cow Wynd, Falkirk  Central Region, FK1 1PU"
              data-rocket-lazyload="fitvidscompatible"
              data-lazy-src="https://maps.google.com/maps?q=HiFi%20Corner%2C%2044%20Cow%20Wynd%2C%20Falkirk%20%20Central%20Region%2C%20FK1%201PU&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              data-ll-status="loaded"
              class="entered lazyloaded contact__map"
            ></iframe>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Contact;
