import { useEffect } from "react"
import { Api } from "../api/api"

export function useApi() {
  
  useEffect(() => {
    Api
      .fetchData()
      .then(data => {
        setTechs(data.technologies as Array<Technology>);
      });
  }, []);

  return {
    data: (async() => await Api.fetchData()),
  }
}