import React from "react";

function PlayerDetails(props) {
    return (
        <div className="music-player--details">
            <div className="details-img">
                <img
                    className="details-img--image"
                    src={props.song.img_src}
                    alt={props.song.title}
                />
            </div>
            <div className="range"/>
            <div className="artist-info">
                <h3 className="details-title">{props.song.title}</h3>
                <h4 className="details-artist">{props.song.artist}</h4>
                <div className="line"/>
            </div>
        </div>
    );
}

export default PlayerDetails;
