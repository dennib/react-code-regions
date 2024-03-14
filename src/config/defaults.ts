import * as vscode from "vscode";
import { Regions } from "../types";

/**
 * @type {Regions}
 * @description Default regions for React code comments.
 */
export const defaultRegions: Regions = [
  "refs",
  "hooks",
  "state",
  "effects",
  "api",
  "functions",
  "renders",
];

/**
 * Ensures that the custom configuration for regions is set.
 * If the custom configuration is not defined, it will be set with the default array.
 */
export const ensureCustomRegionsConfiguration = () => {
  const customRegionsKey = "react-code-regions.customRegions";
  const configuration = vscode.workspace.getConfiguration();
  const customRegions: Regions | void = configuration.get(customRegionsKey);

  // If the custom configuration is not defined, set it with the default array
  if (!customRegions?.length) {
    configuration.update(customRegionsKey, defaultRegions, true);
  }
};
