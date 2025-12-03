import type { Project } from '../@types/Project';
import { type Technology } from './../@types/Technology';

type ApiResponse<T> = (data: Array<T>) => void;

async function api(url: string) {
  return await fetch(url)
    .then(res => res.json());
}

async function fetchTechnologies(callback: ApiResponse<Technology>) {
  const data = await api('/mock/technologies.json');
  callback(data.technologies);
}

async function fetchProjects(callback: ApiResponse<Project>) {
  const data = await api('/mock/projects.json');
  callback(data.projects);
}

export const Api = {
  fetchTechnologies,
  fetchProjects,
}