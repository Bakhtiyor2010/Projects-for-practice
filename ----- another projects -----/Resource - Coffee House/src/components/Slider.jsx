import React, { useRef, useState, useEffect } from "react";
import left from "../assets/left-arrow.png";
import right from "../assets/right-arrow.png";
import coffe1 from "../assets/coffee-slider-1.png";
import coffe2 from "../assets/coffee-slider-2.png";
import coffe3 from "../assets/coffee-slider-3.png";

const slides = [
  {
    img: coffe1,
    title: "S’mores Frappuccino",
    text: "This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.",
    price: "$5.50",
  },
  {
    img: coffe3,
    title: "Caramel Macchiato",
    text: "Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.",
    price: "$5.00",
  },
  {
    img: coffe2,
    title: "Ice Coffee",
    text: "A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.",
    price: "$4.50",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const touchStartRef = useRef(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => setCardWidth(cardRef.current?.offsetWidth || 0);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const handleWheel = (e) => (e.deltaY > 0 ? nextSlide() : prevSlide());
  const handleTouchStart = (e) => (touchStartRef.current = e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = touchStartRef.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
  };

  return (
    <section
      className="slider"
      id="favorite-coffee"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className="slider-h1">
        Choose your <span>favorite</span> coffee
      </h1>

      <button className="left" onClick={prevSlide}>
        <img src={left} alt="left" />
      </button>

      <div className="card-wrapper">
        <div
          className="cards"
          style={{ transform: `translateX(-${index * cardWidth}px)` }}
        >
          {slides.map((slide, i) => (
            <div className="card" key={i} ref={i === 0 ? cardRef : null}>
              <img src={slide.img} alt={slide.title} />
              <h1 className="coffe-title">{slide.title}</h1>
              <p className="coffee-p">{slide.text}</p>
              <h2 className="price">{slide.price}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="slide-pagination">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`pagination ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>

      <button className="right" onClick={nextSlide}>
        <img src={right} alt="right" />
      </button>
    </section>
  );
}

export default Slider;