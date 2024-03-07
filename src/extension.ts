import * as vscode from "vscode";

import {
  defaultRegions,
  ensureCustomRegionsConfiguration,
  strings,
} from "./config/index";
import { Regions } from "./types";

export function activate(context: vscode.ExtensionContext) {
  // Automatically set user configuration if not already present
  ensureCustomRegionsConfiguration();

  let disposable = vscode.commands.registerCommand(
    "react-code-regions.insertRegionComment",
    () => {
      // Get custom comments array from configuration
      const customRegions: Regions | void = vscode.workspace
        .getConfiguration()
        .get("react-code-regions.customRegions");

      // Use custom array if defined, otherwise use default array
      const regions = customRegions?.length ? customRegions : defaultRegions;

      // Show the menu to select a region
      vscode.window
        .showQuickPick(regions, {
          title: strings.picker.title,
          placeHolder: strings.picker.placeholder,
        })
        .then((selectedRegion) => {
          if (selectedRegion) {
            // Get the active editor
            let editor = vscode.window.activeTextEditor;
            if (editor) {
              // Get the current selection
              let selection = editor.selection;
              let range = new vscode.Range(selection.start, selection.end);
              // Insert the selected comment at the current position
              editor.edit((editBuilder) => {
                const comment = `// ${selectedRegion}`;
                editBuilder.replace(range, comment);
              });
            }
          }
        });
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
