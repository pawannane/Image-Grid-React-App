import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error("Error while calling api", error))
  }, [])

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div className="image-card" key={image.id}>
          <img
            src={image.thumbnailUrl}
            alt={image.id}
            onClick={() => handleImageClick(image)}
          />
          <div className="image-details">
            <h3>{image.title}</h3>
          </div>
        </div>
      ))}
      {selectedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <img src={selectedImage.url} alt={selectedImage.id} />
        </div>
      )}
    </div>
  );
}

export default App;
