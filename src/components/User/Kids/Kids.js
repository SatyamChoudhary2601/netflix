import React, {Component} from 'react';

import Slider from 'react-slick';

import {Link} from 'react-router-dom';

const $ = window.$;

class Kids extends Component{

    componentDidMount() {

        var scaling = 1.5;

        var videoWidth = $('.sliderthumb').outerWidth();
        
        var videoHeight = Math.round(videoWidth / (16/9));

        var videoSecHeight = (videoHeight * scaling);

        var videoHeightDiff = videoSecHeight - videoHeight;

        $('.mylist-slider').height(videoSecHeight);

        $('.home-slider .slick-slide .sliderthumb-img').height(videoHeight);

        $('.home-slider .slick-slide').css("margin-top", (videoHeightDiff / 2));

        // kids slider

        var kidsSliderWidth =  $('.kids-category-slider img').outerWidth();

        $('.kids-category-slider img').height(kidsSliderWidth);
        
    }

    mouseOver() {

    }

    mouseOut() {
        
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

        var categories = {
            dots: false,
            arrow: true,
            infinite: false,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 5,
                    }
                }, 
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4,
                    }
                }, 
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                }, 
            ]
        };

        return(
            <div>
                <div className="main p-40">
                    <div>
                        <Slider {...categories} className="kids-category-slider slider">
                            <div>
                                <Link to="" data-toggle="modal" data-target="#kids-char">
                                    <img src="assets/img/thumb1.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb2.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb3.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb4.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb5.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb6.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb7.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb8.jpg" alt="category-img" />
                                </Link>
                            </div>
                            <div>
                                <Link to="">
                                    <img src="assets/img/thumb9.jpg" alt="category-img" />
                                </Link>
                            </div>
                        </Slider>
                    </div>

                    <div className="main-slidersec">
                        <h3 className="dark-grey-clr">new releases<i className="fas fa-angle-right ml-2"></i></h3>
                       
                        <Slider {...mylistsSlider}  className="mylist-slider kids-sec-slider home-slider slider">
                            <div className="sliderthumb" onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()}>
                                <img className="sliderthumb-img hoverout-img" src="assets/img/thumb1.jpg"
                                srcSet="assets/img/thumb1.jpg 1x,
                                        assets/img/thumb1.jpg 1.5x,
                                        assets/img/thumb1.jpg 2x" alt="slider-img" />	
                                <img className="sliderthumb-img hoverin-img" src="assets/img/thumb8.jpg"
                                srcSet="assets/img/thumb8.jpg 1x,
                                        assets/img/thumb8.jpg 1.5x,
                                        assets/img/thumb8.jpg 2x" alt="slider-img" />
                                <Link to="" data-toggle="modal" data-target="#kids-episode">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
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
                                <Link to="">
                                    <div className="kids-sliderthumb-img">
                                        <div className="width-100">
                                            <img src="assets/img/play-button.png" className="kids-play-btn" alt="play_btn" />
                                        </div>
                                    </div>
                                    <div className="kids-sliderthumb-text">
                                        <div className="width-100">
                                            <div className="display-inline">
                                                <div className="kids-left">frozen</div>
                                                <div className="kids-right">7+</div>
                                            </div>
                                            <div className="white-outline-btn btn">episodes</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </Slider>
                       
                    </div>

                    <div className="height-100"></div>
                </div>

                <div class="modal fade kids" id="kids-char">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div className="kids-char-bg width-100">
                                    <div>
                                        <h3 className="txt-overflow capz mb-5">the boss baby</h3>
                                        <div className="relative width-70">
                                            <img src='assets/img/thumb1.jpg' className="kids-char-img" alt="banner_image" />
                                            <div className="kids-banner-details">
                                                <div>
                                                    <h5>
                                                        <span className="white-outline">7&nbsp;+</span>&nbsp;&nbsp;
                                                        <span className="capitalize">the boss baby: back in business</span>
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="kids-banner-playbtn">
                                                <img src="assets/img/play-button.png" alt="play-button" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <div class="modal-body">
                                <h5 className="black-clr bold capz mb-3">season1</h5>
                               <div className="row">
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb2.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb3.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb4.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb5.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb6.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb7.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                </div>

                                
                                
                            </div>
            
                        </div>
                    </div>
                </div>

                <div class="modal fade kids" id="kids-episode">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div className="relative width-100">
                                    <img src='assets/img/thumb1.jpg' className="kids-episode-img" alt="banner_image" />
                                    <div className="kids-banner-details">
                                        <div>
                                            <h5>
                                                <span className="white-outline">7&nbsp;+</span>&nbsp;&nbsp;
                                                <span className="capitalize">the boss baby: back in business</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="kids-banner-playbtn">
                                        <img src="assets/img/play-button.png" alt="play-button" />
                                    </div>
                                </div>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            
                            <div class="modal-body">
                               <div className="row">
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb2.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb3.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb4.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png txt-overflow" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb5.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png txt-overflow" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb6.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png txt-overflow" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                        <Link to="/">
                                            <div className="relative">
                                                <img src="assets/img/thumb7.jpg" className="kids-episodesec-img" alt="episode_img" />
                                                <div className="kidssec-play-icon">
                                                    <img src="assets/img/play-button.png" alt="play_icon" />
                                                </div>
                                            </div>
                                            <h5 className="capz dark-grey-clr mt-2 mb-3 txt-overflow">as the diaper changes</h5>
                                        </Link>
                                   </div>
                                </div>

                                <h5 className="black-clr bold capz mt-3 mb-3">more like boss baby</h5>
                                <div className="row">
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                                        <Link to="/">
                                            <img src="assets/img/thumb2.jpg" className="kids-episodesec-img" alt="episode_img" />
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                                        <Link to="/">
                                            <img src="assets/img/thumb3.jpg" className="kids-episodesec-img" alt="episode_img" />
                                        </Link>
                                   </div>
                                   <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                                        <Link to="/">
                                            <img src="assets/img/thumb4.jpg" className="kids-episodesec-img" alt="episode_img" />
                                        </Link>
                                   </div>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Kids;