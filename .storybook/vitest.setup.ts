import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/react-vite";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

// Configure React testing environment
import { beforeEach, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

beforeEach(() => {
  // Clear any previous DOM state
  document.body.innerHTML = "";
  
  // Ensure we have a clean React environment
  if (typeof window !== "undefined") {
    // Reset any global state
    window.location.hash = "";
  }
});

afterEach(() => {
  // Clean up after each test
  cleanup();
  
  // Clear any timers or async operations
  if (typeof window !== "undefined") {
    // Clear any pending timeouts/intervals
    const highestTimeoutId = Number(setTimeout(() => {}, 0));
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
      clearInterval(i);
    }
  }
});
