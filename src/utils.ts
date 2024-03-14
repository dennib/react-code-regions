import { extensionId } from "./config/index";
import { CommandKeys, ConfigKeys } from "./types";

/**
 * Returns the full command key for a given command.
 * @param {CommandKeys} key - The command key.
 * @returns {string} The full command key.
 */
export const getFullCommandKey = (key: CommandKeys) => extensionId + "." + key;
/**
 * Returns the full configuration key for a given configuration.
 * @param {ConfigKeys} key - The configuration key.
 * @returns {string} The full configuration key.
 */
export const getFullConifgKey = (key: ConfigKeys) => extensionId + "." + key;
