import fs from "fs";
import path from "path";

const folder = path.resolve(
  "../portifolio-paisagismo/portifolio-paisagismo/content/galeria",
);
const output = path.resolve(
  "../portifolio-paisagismo/portifolio-paisagismo/public/projects.json",
);

const files = fs.readdirSync(folder).filter((file) => file.endsWith(".json"));

const projects = files.map((file, index) => {
  const filePath = path.join(folder, file);
  const content = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(content);

  return {
    id: index + 1,
    slug: file.replace(".json", ""),
    title: data.title,
    location: data.location || "",
    cover: data.cover,
    images: data.images || [],
  };
});

fs.writeFileSync(output, JSON.stringify(projects, null, 2));

console.log("projects.json gerado");
