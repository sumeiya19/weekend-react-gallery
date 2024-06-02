import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";

const GalleryList = () => {
  const [galleryList, setGalleryList] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = () => {
    axios
      .get("/api/gallery")
      .then((response) => {
        setGalleryList(response.data);
      })
      .catch((error) => {
        console.log("Error fetching gallery:", error);
      });
  };

  return (
    <div>
      <div>
        {galleryList.map((item) => ( 
          <div key={item.id}>
            <h3>{item.title}</h3> 
       
            <GalleryItem galleryItem={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;

