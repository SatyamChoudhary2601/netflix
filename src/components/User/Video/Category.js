import React, { Component } from "react";

import Slider from "../../SliderView/MainSlider";

const movies = [
  {
    id: 1,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "1983",
    admin_video_id: "436",
    category_id: "78",
    sub_category_id: "57",
    genre_id: "40",
    description: "Sunset Time Lapse can be viewed in the video.",
    default_image:
      "http://adminview.streamhash.com/uploads/images/video_436_001.png",
    mobile_image:
      "http://adminview.streamhash.com/uploads/images/video_mobile_436_001.png",
    duration: "00: 0: 0",
    age: "16",
    publish_time: "12 Apr 19"
  },
  {
    id: 2,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "Russian doll",
    admin_video_id: "436",
    default_image: "/assets/img/thumb2.jpg"
  },
  {
    id: 3,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "The rain",
    admin_video_id: "436",
    category_id: "78",
    sub_category_id: "57",
    genre_id: "40",
    description: "Sunset Time Lapse can be viewed in the video.",
    default_image:
      "http://adminview.streamhash.com/uploads/images/video_436_001.png",
    mobile_image:
      "http://adminview.streamhash.com/uploads/images/video_mobile_436_001.png",
    duration: "00: 0: 0",
    age: "16",
    publish_time: "12 Apr 19"
  },
  {
    id: 4,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "Sex education",
    admin_video_id: "436",
    category_id: "78",
    sub_category_id: "57",
    genre_id: "40",
    description: "Sunset Time Lapse can be viewed in the video.",
    default_image:
      "http://adminview.streamhash.com/uploads/images/video_436_001.png",
    mobile_image:
      "http://adminview.streamhash.com/uploads/images/video_mobile_436_001.png",
    duration: "00: 0: 0",
    age: "16",
    publish_time: "12 Apr 19"
  },
  {
    id: 5,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "Elite",
    admin_video_id: "436",
    category_id: "78",
    sub_category_id: "57",
    genre_id: "40",
    description: "Sunset Time Lapse can be viewed in the video.",
    default_image:
      "http://adminview.streamhash.com/uploads/images/video_436_001.png",
    mobile_image:
      "http://adminview.streamhash.com/uploads/images/video_mobile_436_001.png",
    duration: "00: 0: 0",
    age: "16",
    publish_time: "12 Apr 19"
  },
  {
    id: 5,
    image: "/images/slide6.jpg",
    imageBg: "/images/slide6b.webp",
    title: "Black mirror"
  },
  {
    id: 5,
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
        {movies.map(movie => (
          <Slider.Item movie={movie} key={movie.id}>
            item1
          </Slider.Item>
        ))}
      </div>
    );
  }
}

export default Category;
