export const ArtifactType = {
  METADATA: 'METADATA',
  GPKG: 'GPKG',
} as const;

export const TileFormatStrategy = {
  FIXED: 'fixed',
  MIXED: 'mixed',
} as const;

export const MergerSourceType = {
  S3: 'S3',
  GPKG: 'GPKG',
  fs: 'FS',
} as const;

export type ArtifactType = (typeof ArtifactType)[keyof typeof ArtifactType];
export type TileFormatStrategy = (typeof TileFormatStrategy)[keyof typeof TileFormatStrategy];
export type MergerSourceType = (typeof MergerSourceType)[keyof typeof MergerSourceType];
