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

// async function convertAndResize(imagePath, sizes) {
//   const dir = path.dirname(imagePath);
//   const ext = path.extname(imagePath);
//   const name = path.basename(imagePath, ext);

//   const webpImage = sharp(imagePath).webp({ quality: 100 });

//   for (let size of sizes) {
//     const outputPath = path.join(dir, `${name}_${size}w.webp`);
//     await webpImage.clone().resize(size).toFile(outputPath);
//     console.log(`L'image a été redimensionnée et sauvegardée en: ${outputPath}`);
//   }
// }

// let imageToConvertAndResize = await getImages("./images/slider/");

// for (let i = 0; i < imageToConvertAndResize.length; i++) {
//   const element = imageToConvertAndResize[i];
//   const imagePath = element;
//   const sizes = [1920];
//   convertAndResize(imagePath, sizes)
//     .then(() => console.log("Conversion et redimensionnement terminés."))
//     .catch((error) => console.error("Une erreur est survenue:", error));
// }
