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
    admin_video_id: "437",
    default_image: "/assets/img/thumb2.jpg"
  },
  {
    id: 3,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "The rain",
    admin_video_id: "438",
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
    admin_video_id: "439",
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
    admin_video_id: "440",
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
    id: 6,
    image: "/assets/img/thumb2.jpg",
    imageBg: "/assets/img/thumb7.jpg",
    title: "Elite",
    admin_video_id: "441",
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
    admin_video_id: "442",
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
    admin_video_id: "443",
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
  }
];

const movies1 = [
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
  }
];

class Wishlist extends Component {
  componentDidMount() {}

  chunkArray(myArray, chunk_size) {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  }

  render() {
    // Usage

    // Split in group of 3 items
    let result = this.chunkArray(movies, 5);

    // Outputs : [ [1,2,3] , [4,5,6] ,[7,8] ]

    console.log(result);

    return (
      <div className="main p-40">
        <div className="main-slidersec">
          <h3 className="">
            countinue watching
            <i className="fas fa-angle-right ml-2" />
          </h3>
          {result.map(res => (
            <Slider>
              {res.map(movie => (
                <Slider.Item movie={movie} key={movie.id}>
                  item1
                </Slider.Item>
              ))}
            </Slider>
          ))}
        </div>
        <div className="height-100" />
      </div>
    );
  }
}

export default Wishlist;