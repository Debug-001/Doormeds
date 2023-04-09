import React from 'react'

const Carousel2 = () => {
    return (
        <>
            <div
                className="carousel slide text-truncate d-lg-flex align-items-lg-center"
                data-bs-ride="carousel"
                id="carousel-1"
            >
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img
                            className="w-100 d-block"
                            src="src/assets/img/cr3.jpg"
                            alt="Slide Image"
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            className="w-100 d-block"
                            src="src/assets/img/cr4.jpg"
                            alt="Slide Image"
                        />
                    </div>
                </div>
                <div>
                    <a
                        className="carousel-control-prev"
                        href="#carousel-1"
                        role="button"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" />
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carousel-1"
                        role="button"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            style={{ background: 'url("/assets/img/cr2.jpg")' }}
                        />
                        <span className="visually-hidden">Next</span>
                    </a>
                </div>
                <ol className="carousel-indicators">
                    <li data-bs-target="#carousel-1" data-bs-slide-to={0} />
                    <li
                        data-bs-target="#carousel-1"
                        data-bs-slide-to={1}
                        className="active"
                    />
                </ol>
            </div>
        </>
    )
}

export default Carousel2
