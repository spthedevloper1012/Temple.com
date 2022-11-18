import React from 'react';

const Card = () => {
    return(
        <>
          <div className="col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://assets.seniority.in/media/amasty/webp/wysiwyg/Somnath_Temple_Saurashtra_1.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Somnath Temple </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  Dedicated to Lord Shiva, the Somnath Temple is one of the most
                  important spiritual sites in the Hindu circuit. Believed to be
                  the first of the 12 jyotirlingas (devotional shrines of Lord
                  Shiva) in the country, the temple sees a large footfall every
                  year
                </p>
                <a href="https://en.wikipedia.org/wiki/Somnath_temple" target="_black" className="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://assets.seniority.in/media/amasty/webp/wysiwyg/golden_temple.webp"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Golden Temple </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  The Golden temple is famous for its full golden dome. The
                  Mandir is built on a 67-ft square of marble and is a two
                  storied structure. Maharaja Ranjit Singh had the upper half of
                  the building built with approximately 400 kg of gold leaf.
                </p>
                <a href="https://en.wikipedia.org/wiki/Golden_Temple" target="_black" className="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://devdhamyatra.com/files/732243809.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Kedarnath Temple </h5>
                <p className="card-text" style={{ fontSize: "15px" }}>
                  According to Hindu legends, the temple was initially built by
                  the Pandavas, and is one of the twelve Jyotirlingas, the
                  holiest Hindu shrines of Shiva. The Pandavas were supposed to
                  have pleased Shiva by doing penance in Kedarnath.
                </p>
                <a href="https://en.wikipedia.org/wiki/Kedarnath_Temple" target="_black" className="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/46/95/1d/shri-mahakaleshwar-temple.jpg?w=1200&h=-1&s=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Ujjain Temple</h5>
                <p className="card-text" style={{ fontSize: "16px" }}>
                  {/* Shri Mahakaleshwar Temple is a prominent Hindu temple dedicated to Lord Shiva and is one of the most important holy places to visit in Ujjain.it is one of the 12 Jyotirlingas which are considered to be the holiest abodes of Shiva */}
                  Ujjain has been a center of religion for Hindu,
                  Jain and Buddha religion.Ujjain is described at length in
                  SkandPurana and is considered the place of origination of
                  Mangal Griha.Ujjain is salvation giving city. It is a city of gods.
                </p>
                <a href="https://en.wikipedia.org/wiki/Mahakaleshwar_Jyotirlinga" target="_black" className="btn btn-primary">
                  Know more
                </a>
              </div>
            </div>
          </div>
       
        </>
    )
}

export default Card;