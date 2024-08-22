/// <reference path="../.astro/types.d.ts" />
import type * as gsap from "gsap";
interface Window {
  gsap: typeof gsap;
}
