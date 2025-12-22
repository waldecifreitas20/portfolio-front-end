import type { Project } from '@/types/Project';
import { type Technology } from '@/types/Technology';

type ApiResponse<T> = (data: Array<T>) => void;

function getBaseUrl() {
  const {
    DEV,
    VITE_API_URL_DEV: devMode,
    VITE_API_URL_PROD: prodMode
  } = import.meta.env;

  return DEV ? devMode : prodMode;
}

const ENDPOINTS = {
  techs: '/technologies/all',
  projects: '/projects/all'
}


async function api(path: string) {
  return await fetch(`${getBaseUrl()}${path}`)
    .then(res => res.json());
}

async function fetchTechnologies(callback: ApiResponse<Technology>) {
  const data = await api(ENDPOINTS.techs);
  callback(data.technologies);
}

async function fetchProjects(callback: ApiResponse<Project>) {
  const data = await api(ENDPOINTS.projects);
  callback(data.projects);
}


export const Api = {
  fetchTechnologies,
  fetchProjects,
}