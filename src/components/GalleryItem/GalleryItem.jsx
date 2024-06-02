import React, { useState } from "react";
import axios from "axios";

const GalleryItem = ({ galleryItem }) => {
    const [likes, setLikes] = useState(galleryItem.likes);
    const [showImage, setShowImage] = useState(true);

    const handleLikes = () => {
        axios.put(`/api/gallery/like/${galleryItem.id}`)
            .then(() => {
                setLikes(likes + 1);
            })
            .catch((error) => {
                console.error("Error liking gallery item:", error);
            });
    };

    const toggleView = () => {
        setShowImage(!showImage);
    };

    return (
        <div data-testid="galleryItem">
            {showImage ? (
                <img src={galleryItem.url} alt={galleryItem.title} onClick={toggleView} data-testid="toggle" />
            ) : (
                <p onClick={toggleView}>{galleryItem.description}</p>
            )}
            <br />
            <button onClick={handleLikes} data-testid="like">Like ❤️</button>
            <div>Likes: {likes}</div>
        </div>
    );
};

export default GalleryItem;









