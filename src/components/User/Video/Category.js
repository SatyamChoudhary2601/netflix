import React, { Component } from "react";

import Slider from "../../SliderView/MainSlider";

const movies = [
  {
    id: 1,
    image: "assets/img/thumb2.jpg",
    imageBg: "assets/img/thumb7.jpg",
    title: "1983"
  },
  {
    id: 2,
    image: "assets/img/thumb2.jpg",
    imageBg: "assets/img/thumb7.jpg",
    title: "Russian doll"
  },
  {
    id: 3,
    image: "assets/img/thumb2.jpg",
    imageBg: "assets/img/thumb7.jpg",
    title: "The rain"
  },
  {
    id: 4,
    image: "assets/img/thumb2.jpg",
    imageBg: "assets/img/thumb7.jpg",
    title: "Sex education"
  },
  {
    id: 5,
    image: "assets/img/thumb2.jpg",
    imageBg: "assets/img/thumb7.jpg",
    title: "Elite"
  },
  {
    id: 6,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror"
  },
  {
    id: 7,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror"
  },
  {
    id: 8,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror"
  },
  {
    id: 9,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror"
  }
];

class Category extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="main-slidersec">
        <h3 className="">
          countinue watching
          <i className="fas fa-angle-right ml-2" />
        </h3>
        <Slider>
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default Category;
