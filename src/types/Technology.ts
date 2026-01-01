import type { DualLanguageField } from "./DualLanguagueField"

export type Technology = {
  id: string,
  name: string,
  desc: string,
  desc_en: string,
  hexColor: string,
  officialWebsite: string,
  logoUrl: string,
  isBackend: boolean,
  isFrontend: boolean,
  skills: Array<DualLanguageField>
}









