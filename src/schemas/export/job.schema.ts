import { z } from 'zod';
import { callbackExportResponseSchema, cleanupDataSchema, featureCollectionSchema, fileNamesTemplatesSchema } from './export.schema';

export const callbackSchema = z.object({
  url: z.string().url(),
  roi: featureCollectionSchema,
});

export const callbacksArraySchema = z.array(callbackSchema);

export const exportInputParamsSchema = z.object({
  crs: z.literal('EPSG:4326'),
  roi: featureCollectionSchema,
  callbacks: callbacksArraySchema.optional(),
});

export const exportAdditionalParamsSchema = z.object({
  fileNamesTemplates: fileNamesTemplatesSchema,
  relativeDirectoryPath: z.string(),
});

export const exportJobParametersSchema = z
  .object({
    exportInputParams: exportInputParamsSchema,
    additionalParams: exportAdditionalParamsSchema,
    cleanupDataParams: cleanupDataSchema.optional(),
    callbackParams: callbackExportResponseSchema.optional(),
  })
  .describe('exportJobParametersSchema');
