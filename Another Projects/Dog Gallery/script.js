async function showDogImgs() {
  try {
    const response = await fetch("https://dog.ceo/api/breed/hound/images");
    const data = await response.json();

    const gallery = document.getElementById("gallery");

    data.message.forEach((url, index) => {
      const figure = document.createElement("figure");

      const img = document.createElement("img");
      img.src = url;
      img.alt = `Hound dog ${index + 1}`;
      img.title = `Hound dog image number ${index + 1}`;
      img.loading = "lazy";

      const caption = document.createElement("figcaption");
      caption.textContent = `Hound Dog #${index + 1}`;

      figure.appendChild(img);
      figure.appendChild(caption);

      figure.addEventListener("click", async () => {
        try {
          const res = await fetch(url);
          const blob = await res.blob();
          const blobUrl = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = `dog-${index + 1}-hound.jpg`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        } catch (err) {
          console.error("Download failed:", err);
        }
      });

      gallery.appendChild(figure);
    });
  } catch (err) {
    console.error("Failed to load dogs:", err);
  }
}

showDogImgs();