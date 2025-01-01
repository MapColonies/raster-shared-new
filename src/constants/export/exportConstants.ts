export const ArtifactType = {
  METADATA: 'METADATA',
  GPKG: 'GPKG',
};

export const TileFormatStrategy = {
  FIXED: 'fixed',
  MIXED: 'mixed',
};

export const MergerSourceType = ['S3', 'GPKG', 'FS'] as const;

export type MergerSourceType = (typeof MergerSourceType)[keyof typeof MergerSourceType];
