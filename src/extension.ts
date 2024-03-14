import * as vscode from "vscode";

import { ensureCustomRegionsConfiguration } from "./config/index";
import { registerInsertRegionCommentCommand } from "./commands/insertRegionComment";

export function activate(context: vscode.ExtensionContext) {
  // Automatically set user configuration if not already present
  ensureCustomRegionsConfiguration();
  // Commands
  registerInsertRegionCommentCommand(context);
}

// This method is called when your extension is deactivated
export function deactivate() {}
