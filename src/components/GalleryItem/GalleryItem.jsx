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
        <div>
            {showImage ? (
                <img src={galleryItem.url} alt={galleryItem.title} onClick={toggleView} />
            ) : (
                <p onClick={toggleView}>{galleryItem.description}</p>
            )}
            <br />
            <button onClick={handleLikes}>Like ❤️</button>
            <div>Likes: {likes}</div>
        </div>
    );
};

export default GalleryItem;









