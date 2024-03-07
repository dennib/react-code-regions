import * as vscode from "vscode";
import { Regions } from "../types";

export const defaultRegions: Regions = [
  "hooks",
  "state",
  "effects",
  "api",
  "functions",
  "renders",
];

// Ensure that the custom configuration is set
export const ensureCustomRegionsConfiguration = () => {
  const customRegionsKey = "react-code-regions.customRegions";
  const configuration = vscode.workspace.getConfiguration();
  const customRegions: Regions | void = configuration.get(customRegionsKey);

  // If the custom configuration is not defined, set it with the default array
  if (!customRegions?.length) {
    configuration.update(customRegionsKey, defaultRegions, true);
  }
};
