import z from 'zod';
import { JobTypes } from '../../constants/ingestion/ingestionConstants';
import { inputFilesSchema } from './inputFiles.schema';
import { partSchema } from './polygonParts.schema';
import { newMetadataSchema, updateMetadataSchema } from './metadata.schema';
import { newAdditionalParamsSchema, swapUpdateAdditionalParamsSchema, updateAdditionalParamsSchema } from './additionalParams.schema';

export const layerDataSchema = z.object({
  inputFiles: inputFilesSchema,
  partsData: z.array(partSchema),
});

export type SchemaMetadata<T extends JobTypes> = T extends 'Ingestion_New' ? typeof newMetadataSchema : typeof updateMetadataSchema;

/**
 * Generates a Zod schema based on the provided type and additional parameters schema
 * @param jobType - The type of schema to generate ('Ingestion_New' | 'Ingestion_Update' | 'Ingestion_Swap_Update')
 * @param additionalParamsSchema - The Zod schema for additional parameters
 * @returns A Zod schema combining layerData, metadata, and additional parameters
 */
export const generateLayerSchema = <T extends JobTypes, AdditionalParams extends z.ZodType>(
  jobType: T,
  additionalParamsSchema: AdditionalParams
): z.ZodObject<{
  metadata: SchemaMetadata<T>;
  additionalParams: AdditionalParams;
  inputFiles: typeof inputFilesSchema;
  partsData: z.ZodArray<typeof partSchema>;
}> => {
  const metadataSchema = jobType === JobTypes.Ingestion_New ? newMetadataSchema : updateMetadataSchema;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return z.object({
    inputFiles: inputFilesSchema,
    partsData: z.array(partSchema),
    metadata: metadataSchema,
    additionalParams: additionalParamsSchema,
  }) as never; // Type assertion needed due to Zod's type system limitations
};

export const newLayerSchema = generateLayerSchema('Ingestion_New', newAdditionalParamsSchema);

export const updateLayerSchema = generateLayerSchema('Ingestion_Update', updateAdditionalParamsSchema);

export const swapUpdateLayerSchema = generateLayerSchema('Ingestion_Swap_Update', swapUpdateAdditionalParamsSchema);
