import type { Technology } from "../@types/Technology";


type Data = { technologies: Array<Technology> };

async function fetchData(): Promise<Data> {
  const response = await fetch('/mock/technologies.json')
  return response.json();
}

export const Api = {
  fetchData
}