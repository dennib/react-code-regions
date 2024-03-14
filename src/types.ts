export type Region = string;

export type Regions = Region[];

export enum CommandKeys {
  INSERT_REGION_COMMENT = "insertRegionComment",
  RESET_CONFIGURATION = "resetConfiguration",
}

export enum ConfigKeys {
  CUSTOM_REGIONS = "customRegions",
}
