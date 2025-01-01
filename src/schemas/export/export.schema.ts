import { MultiPolygon, Polygon } from 'geojson';
import { z } from 'zod';
import { ArtifactType, MergerSourceTypeValues } from '../../constants/exportConstants';
import { OperationStatus } from '@map-colonies/mc-priority-queue';

const featureSchema = z.object({
  type: z.literal('Feature'),
  geometry: z.custom<Polygon | MultiPolygon>(),
  properties: z.object({
    maxResolutionDeg: z.number(),
    minResolutionDeg: z.number().optional(),
  }),
});
export const mapSourceSchema = z.object({
  path: z.string(),
  type: z.enum(MergerSourceTypeValues),
  extent: z
    .object({
      minX: z.number(),
      minY: z.number(),
      maxX: z.number(),
      maxY: z.number(),
    })
    .optional(),
});

export const artifactSchema = z.object({
  name: z.string(),
  type: z.nativeEnum(ArtifactType),
  url: z.string().optional(),
  size: z.number().optional(),
});

export const artifactsArraySchema = z.array(artifactSchema);

export const featureCollectionSchema = z.object({
  type: z.literal('FeatureCollection'),
  features: z.array(featureSchema),
});

export const fileNamesTemplatesSchema = z.object({
  dataURI: z.string(),
  metadataURI: z.string(),
});

export const cleanupDataSchema = z.object({
  directoryPath: z.string().optional(),
  cleanupExpirationTimeUTC: z.date().optional(),
});

export const callbackExportDataSchema = z.object({
  recordCatalogId: z.string(),
  jobId: z.string(),
  roi: featureCollectionSchema,
  links: fileNamesTemplatesSchema.optional(),
  expirationTime: z.date().optional(),
  fileSize: z.number().optional(),
  errorReason: z.string().optional(),
  description: z.string().optional(),
  artifacts: artifactsArraySchema.optional(),
});

export const callbackExportResponseSchema = callbackExportDataSchema.extend({
  status: z.union([z.literal(OperationStatus.IN_PROGRESS), z.literal(OperationStatus.COMPLETED), z.literal(OperationStatus.FAILED)]),
});
