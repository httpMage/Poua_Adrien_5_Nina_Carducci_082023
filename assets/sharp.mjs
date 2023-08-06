// import sharp from "sharp";
// import recursive from "recursive-readdir-async";
// import path from "path";

// async function getImages(dossier) {
//   try {
//     let allImages = await recursive.list(dossier);
//     return allImages.map((image) => image.fullname);
//   } catch (err) {
//     console.error("Une erreur est survenue lors de la récupération des images:", err);
//   }
// }
// function resize(image) {
//   return sharp(image).resize({
//     width: 1920,
//   });
// }
// function formatToWebp(sharpedImage) {
//   return sharpedImage.webp({ quality: 100 });
// }

// async function format(dossier) {
//   let images = await getImages(dossier);
//   let numberOfImages = images.length;
//   for (let i = 0; i < numberOfImages; i++) {
//     const fileExtension = path.extname(images[i]);
//     const output = images[i].replace(fileExtension, ".webp");
//     try {
//       const resizedImage = await resize(images[i]);
//       const webpImage = await formatToWebp(resizedImage);
//       await webpImage.toFile(output);
//       console.log(`L'image ${images[i]} a été convertie en ${output}`);
//     } catch (error) {
//       console.error(`Erreur lors de la conversion de l'image ${images[i]}:`, error);
//     }
//   }
// }
// let all = "./images/slider/"

// format(all)

