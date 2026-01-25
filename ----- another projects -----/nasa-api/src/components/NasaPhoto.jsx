import { useEffect, useState } from "react";

function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPhoto() {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`);
        if (!response.ok) throw new Error("Failed to fetch NASA data");
        const data = await response.json();
        setPhotoData(data);
        console.log(data);
        
      } catch (err) {
        setError(err.message);
      }
    }

    fetchPhoto();
  }, []);

  if (error) return <p>{error}</p>;
  if (!photoData) return <p>Loading...</p>;

  return (
    <>
      {photoData.media_type === "image" ? (
        <img src={photoData.url} alt={photoData.title} width={"100%"} />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: "500px" }}
        />
      )}

      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </>
  );
}

export default NasaPhoto;
