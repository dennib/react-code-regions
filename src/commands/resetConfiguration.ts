import * as vscode from "vscode";
import { defaultRegions, strings } from "../config/index";
import { getFullCommandKey, getFullConifgKey } from "../utils";
import { CommandKeys, ConfigKeys } from "../types";

/**
 * Resets the custom configuration to default regions.
 * @param {vscode.ExtensionContext} [context] - The context for the extension activation.
 * @returns {vscode.Disposable} The disposable object for the registered command.
 */
export function registerResetConfigurationCommand(
  context?: vscode.ExtensionContext
): vscode.Disposable {
  // Build full keys
  const commandKey = getFullCommandKey(CommandKeys.RESET_CONFIGURATION);
  const customRegionsConfigKey = getFullConifgKey(ConfigKeys.CUSTOM_REGIONS);

  let disposable = vscode.commands.registerCommand(
    commandKey, // Utilizza la funzione getFullCommandKey invece della stringa hard-coded
    () => {
      vscode.workspace
        .getConfiguration()
        .update(
          customRegionsConfigKey,
          defaultRegions,
          vscode.ConfigurationTarget.Global
        );
      vscode.window.showInformationMessage(
        strings.infoMessages.configurationReset
      );
    }
  );

  if (context) {
    context.subscriptions.push(disposable);
  }

  return disposable;
}
