import React, { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";


function App() {
    return (
      <div data-testid="app">
        <header>
          <h1>My Gallery</h1>
        </header>
     
        <GalleryList />
        
    
      </div>

      
    );
}

export default App;
