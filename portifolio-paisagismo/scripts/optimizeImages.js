import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";
import fs from "fs";
import path from "path";

const inputDir = "src/assets/Background";
const outputDir = "src/assets/Background/optimized";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

(async () => {
  const files = await imagemin([`${inputDir}/*.{jpg,png,webp}`], {
    destination: outputDir,
    plugins: [imageminWebp({ quality: 80 })],
  });

  console.log(
    "Images optimized:",
    files.map((file) => file.destinationPath),
  );
})();
