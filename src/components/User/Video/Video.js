import React, { Component } from "react";

import { Link } from "react-router-dom";

import ReactPlayer from "react-player";

import Helper from "../../Helper/helper";

import ContentLoader from "../../Static/contentLoader";

import api from "../../../Environment";

class VideoComponent extends Helper {
    state = {
        loadingFirst: true,
        videoDetailsFirst: null,
        onPlayStarted: false,
        videoList: {}
    };
    componentDidMount() {
        if (this.props.location.state) {
            this.setState({ loadingFirst: false });
        } else {
            window.location = "/home";
        }
    }

    onCompleteVideo = () => {
        this.addHistory(
            this.props.location.state.videoDetailsFirst.admin_video_id
        );
        this.setState({ onPlayStarted: false });
    };

    onVideoPlay = async () => {
        this.setState({ onPlayStarted: true });
        let inputData = {
            admin_video_id: this.props.location.state.videoDetailsFirst
                .admin_video_id
        };
        await this.onlySingleVideoFirst(inputData);

        this.redirectStatus(this.state.videoDetailsFirst);
    };

    addHistory = admin_video_id => {
        api.postMethod("addHistory", { admin_video_id: admin_video_id })
            .then(response => {
                if (response.data.success === true) {
                } else {
                }
            })
            .catch(function(error) {});
    };

    render() {
        const pageType = "videoPage";
        if (this.state.onPlayStarted) {
            const returnToVideo = this.renderRedirectPage(
                this.state.videoDetailsFirst,
                pageType
            );

            if (returnToVideo != null) {
                return returnToVideo;
            }
        }
        const { loadingFirst } = this.state;
        let mainVideo;
        let videoTitle;
        let videoLists;

        if (loadingFirst) {
            return <ContentLoader />;
        } else {
            // Check the whether we need to play the trailer or main video

            console.log(this.props.location.state.videoFrom);
            if (this.props.location.state.videoFrom != undefined) {
                mainVideo = this.props.location.state.videoDetailsFirst
                    .resolutions.original;
                videoTitle = this.props.location.state.videoDetailsFirst.name;
            } else {
                mainVideo = this.props.location.state.videoDetailsFirst
                    .main_video;

                videoTitle = this.props.location.state.videoDetailsFirst.title;
            }

            return (
                <div>
                    <div className="single-video">
                        <ReactPlayer
                            // url={[
                            //   {
                            //     src:
                            //       "http://adminview.streamhash.com:8080/426x240SV-201…8-59-443b8c7d4d68e41bb9a618a0de9a5f4003710241.mp4",
                            //     type: "video/webm"
                            //   },

                            //   {
                            //     src:
                            //       "http://adminview.streamhash.com:8080/640x360SV-2019-09-23-05-18-59-443b8c7d4d68e41bb9a618a0de9a5f4003710241.mp4",
                            //     type: "video/ogg"
                            //   }
                            // ]}
                            url={mainVideo}
                            controls={true}
                            width="100%"
                            height="100vh"
                            playing={true}
                            onPlay={this.onVideoPlay}
                            onEnded={this.onCompleteVideo}
                            config={{
                                file: {
                                    tracks: [
                                        {
                                            kind: "subtitles",
                                            src: "subs/subtitles.en.vtt",
                                            srcLang: "en",
                                            default: true
                                        },
                                        {
                                            kind: "subtitles",
                                            src: "subs/subtitles.ja.vtt",
                                            srcLang: "ja"
                                        },
                                        {
                                            kind: "subtitles",
                                            src: "subs/subtitles.de.vtt",
                                            srcLang: "de"
                                        }
                                    ],
                                    attributes: {
                                        controlsList: "nodownload"
                                    }
                                }
                            }}
                        />
                        <div className="back-arrowsec">
                            <Link to="/home">
                                <img
                                    src={
                                        window.location.origin +
                                        "/assets/img/left-arrow.png"
                                    }
                                    alt="arrow"
                                />
                                <span className="txt-overflow capitalize ml-3">
                                    {videoTitle}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default VideoComponent;
