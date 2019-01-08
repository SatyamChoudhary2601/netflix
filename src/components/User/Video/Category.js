import React, {Component} from 'react';

import Slider from 'react-slick';

import {Link} from 'react-router-dom';

const $ = window.$;

class Category extends Component{

    componentDidMount() {

        var scaling = 1.5;

        var videoWidth = $('.sliderthumb').outerWidth();
        
        var videoHeight = Math.round(videoWidth / (16/9));

        var videoSecHeight = (videoHeight * scaling);

        var videoHeightDiff = videoSecHeight - videoHeight;

        $('.mylist-slider').height(videoSecHeight);

        $('.home-slider .slick-slide .sliderthumb').height(videoHeight);

        $('.home-slider .slick-slide').css("margin-top", (videoHeightDiff / 2));

        $(".home-slider .slick-slide").mouseover(function() {

            $(this).css("width", videoWidth * scaling);
            
            $(this).css("height", videoHeight * scaling);

            $('.home-slider .slick-slide').css("margin-top", 0);

        })

        $(".home-slider .slick-slide .sliderthumb").mouseover(function() {

            $(this).css("height", videoHeight * scaling);

        })

        $(".home-slider .slick-slide").mouseout(function() {

		    $(this).css("width", videoWidth * 1);

            $(this).css("height", videoHeight * 1);
            
            $('.home-slider .slick-slide').css("margin-top", (videoHeightDiff / 2));

        });
        
        $(".home-slider .slick-slide .sliderthumb").mouseout(function() {

            $(this).css("height", videoHeight * 1);

        })

    }


    render(){
        var mylistsSlider = {
            dots: false,
            arrow: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                }, 
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }, 
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, 
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                }, 
            ]
        }
        return(
            <div>
                <div className="main p-40">
                    <div className="main-slidersec">
                        <h3 className="">Category<i className="fas fa-angle-right ml-2"></i></h3>
                       
                        <Slider {...mylistsSlider}  className="mylist-slider home-slider slider">
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="/">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-play-sec">
                                    <div>
                                        <Link to="#">
                                            <div className="slider-play-sec-outline">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb2.jpg"
                                srcSet="assets/img/thumb2.jpg 1x,
                                        assets/img/thumb2.jpg 1.5x,
                                        assets/img/thumb2.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb7.jpg"
                                srcSet="assets/img/thumb7.jpg 1x,
                                        assets/img/thumb7.jpg 1.5x,
                                        assets/img/thumb7.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="slider-play-sec">
                                    <div>
                                        <Link to="#">
                                            <div className="slider-play-sec-outline">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb3.jpg"
                                srcSet="assets/img/thumb3.jpg 1x,
                                        assets/img/thumb3.jpg 1.5x,
                                        assets/img/thumb3.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb6.jpg"
                                srcSet="assets/img/thumb6.jpg 1x,
                                        assets/img/thumb6.jpg 1.5x,
                                        assets/img/thumb6.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb4.jpg"
                                srcSet="assets/img/thumb4.jpg 1x,
                                        assets/img/thumb4.jpg 1.5x,
                                        assets/img/thumb4.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb5.jpg"
                                srcSet="assets/img/thumb5.jpg 1x,
                                        assets/img/thumb5.jpg 1.5x,
                                        assets/img/thumb5.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb5.jpg"
                                srcSet="assets/img/thumb5.jpg 1x,
                                        assets/img/thumb5.jpg 1.5x,
                                        assets/img/thumb5.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb4.jpg"
                                srcSet="assets/img/thumb4.jpg 1x,
                                        assets/img/thumb4.jpg 1.5x,
                                        assets/img/thumb4.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb6.jpg"
                                srcSet="assets/img/thumb6.jpg 1x,
                                        assets/img/thumb6.jpg 1.5x,
                                        assets/img/thumb6.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb3.jpg"
                                srcSet="assets/img/thumb3.jpg 1x,
                                        assets/img/thumb3.jpg 1.5x,
                                        assets/img/thumb3.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb7.jpg"
                                srcSet="assets/img/thumb7.jpg 1x,
                                        assets/img/thumb7.jpg 1.5x,
                                        assets/img/thumb7.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb2.jpg"
                                srcSet="assets/img/thumb2.jpg 1x,
                                        assets/img/thumb2.jpg 1.5x,
                                        assets/img/thumb2.jpg 2x" alt="slider-img" />
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="sliderthumb">
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <div className="sliderthumb-text">
                                    <div className="width-100">
                                        <Link to="#">
                                            <div className="thumb-playicon">
                                                <i className="fas fa-play"></i>
                                            </div>
                                        </Link>
                                        <h4 className="thumb-title">frozen</h4>
                                        <h5 className="thumb-details">
                                            <span className="green-clr">Aug 2018</span>
                                            <span className="grey-box">7<i className="fas fa-plus small"></i> / 25 <span className="small">Views</span></span>
                                        </h5>
                                        <p className="thumb-desc">An ordinary teen. An ancient relic pulled from the rubble. And an underground civilization that needs a hero.An ordinary teen. An ancient relic pulled from the rubble. And an underground </p>
                                        <Link to="#">
                                            <div className="text-center thumbarrow-sec">
                                                <img src="assets/img/arrow-white.png" className="thumbarrow thumbarrow-white" alt="play_img" />
                                                <img src="assets/img/arrow-red.png" className="thumbarrow thumbarrow-red" alt="play_img" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                       
                    </div>
                </div>
            </div>
        )
    }   
}

export default Category;