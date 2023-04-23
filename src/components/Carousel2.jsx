import React from "react";

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
							src="/img/cr3.jpg"
							alt="Slide Image"
						/>
					</div>
					<div className="carousel-item active">
						<img
							className="w-100 d-block"
							src="/img/cr4.jpg"
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
						<span className="carousel-control-next-icon" />
						<span className="visually-hidden">Next</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default Carousel2;
