
export default function Productlinks() {
    return (
        <>
        <section className="shop">
         <div className="shop__wrapper">
        <div className="shop__grid">
        {[
          "Shop by Brand",
          "Amplifiers",
          "Speakers",
          "Turntables",
          "CD Players",
          "Streamers",
          "Cables",
          "Furniture",
          "Headphones",
          "Home Cinema",
          "Outlet - Save up to 50% Off",
          "Ebay Shop",
          "Ceiling Speakers",
          "TVs",
          "Vinyl LPs"
        ].map((item, index) => (
          <div key={index} className="shop__grid-item">
            <span className="shop__grid-text">{item}</span>
          </div>
        ))}
      </div>
      </div>
      </section>
        </>
    )
}