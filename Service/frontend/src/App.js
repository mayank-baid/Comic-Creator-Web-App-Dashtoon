import React, { useState } from 'react';
import ComicPanelForm from './components/ComicPanelForm';
import ComicDisplay from './components/ComicDisplay';
import { generateComicImage } from './services/apiService';
import './App.css'

const App = () => {
  const [comicImages, setComicImages] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleComicGeneration = async (text) => {
    setError('');
    setIsLoading(true);
    try {
      const imageSrc = await generateComicImage(text);
      setComicImages([imageSrc]);
    } catch (err) {
      setError('Failed to generate comic image.');
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <div>
      <ComicPanelForm onSubmit={handleComicGeneration} />
      {isLoading ? <p>Loading...</p> : <ComicDisplay images={comicImages} />}
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
