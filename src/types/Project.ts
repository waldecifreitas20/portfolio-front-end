import type { DualLanguageField } from "./DualLanguagueField";
import type { Technology } from "./Technology";

export type Project = {
  id: number,
  category: string,
  deployUrl: string,
  name: string,
  repositoryUrl: string,
  thumbnailUrl: string,
  technologies: Array<Technology>,
  description: DualLanguageField,
}
