import { useMediaQuery } from "react-responsive";

export function useBreakpoint(maxWidth?: number) {
  const breakpoint = `(max-width: ${maxWidth ?? '998'}px)`;
  const isMobile = useMediaQuery({ query: breakpoint });

  return { isMobile };
}