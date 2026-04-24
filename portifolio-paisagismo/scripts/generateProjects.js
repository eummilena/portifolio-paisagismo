import fs from "fs";
import path from "path";

const folder = path.resolve(process.cwd(), "content", "galeria");
const output = "./public/projects.json";

let projects = [];

if (fs.existsSync(folder)) {
  const files = fs.readdirSync(folder).filter((file) => file.endsWith(".json"));

  projects = files.map((file, index) => {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(content);

    return {
      id: index + 1,
      title: data.title,
      location: data.location || "",
      cover: data.cover,
      images: data.images || [],
    };
  });
} else {
  console.warn(`Warning: gallery directory not found at ${folder}. Generating empty projects.json.`);
}

fs.writeFileSync(output, JSON.stringify(projects, null, 2));

console.log("projects.json gerado");
