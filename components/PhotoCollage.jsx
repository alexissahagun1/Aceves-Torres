import React, { useState } from 'react';

const PhotoCollage = ({ customPhotos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto((prevSelectedPhoto) =>
      prevSelectedPhoto === photo ? null : photo
    );
  };

  const defaultPhotos = [
    '/ResidencialFotos/DJI_0792.JPG',
    '/ResidencialFotos/DJI_0793.JPG',
    '/ResidencialFotos/DJI_0801.JPG',
    '/ResidencialFotos/DJI_0804.JPG',
    '/ResidencialFotos/DJI_0806.JPG',
    '/ResidencialFotos/DJI_0818.JPG',
    '/ResidencialFotos/DJI_0851.JPG',
    '/ResidencialFotos/DJI_0820.JPG',
    '/ResidencialFotos/DJI_0795.JPG',
    '/ResidencialFotos/DJI_0858.JPG',
    '/ResidencialFotos/DJI_0843.JPG',
    '/ResidencialFotos/DJI_0868.JPG',
  ];

  const photos = customPhotos ? customPhotos : defaultPhotos;

  return (
    <div className="grid grid-cols-4 gap-4 md:mt-20 mt-6 md:mx-32">
      {photos.map((photo, index) => (
        <div
          key={index}
          className={`relative cursor-pointer transition-all duration-500 ${
            selectedPhoto === photo ? 'transform scale-150 z-10' : 'opacity-80 hover:opacity-100'
          }`}
          style={{
            justifySelf: selectedPhoto === photo ? 'center' : 'initial',
            alignSelf: selectedPhoto === photo ? 'center' : 'initial'
          }}
          onClick={() => handlePhotoClick(photo)}
        >
          <img src={photo} alt={`Photo ${index + 1}`} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default PhotoCollage;
