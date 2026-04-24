export type ProjectItem = {
  id: number
  slug: string
  title: string
  location: string
  cover: string
  images: string[]
}

export async function getProjects(): Promise<ProjectItem[]> {
  const res = await fetch('/projects.json')
  return res.json()
}