/// <reference path="../.astro/types.d.ts" />
import type * as gsap from "gsap";

interface Window {
  gsap: typeof gsap;
}

interface Window {
  Alpine: import('alpinejs').Alpine;
}

interface ImportMetaEnv {
  readonly OPENWEATHERMAP_API_KEY: string;
  readonly GOOGLE_MAPS_API_KEY: string;
  readonly IPINFO_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}