import z from 'zod';
import { inputFilesSchema } from './inputFiles.schema';
import { partSchema } from './polygonParts.schema';
import { newMetadataSchema, updateMetadataSchema } from './metadata.schema';

export const layerDataSchema = z.object({
  inputFiles: inputFilesSchema,
  partsData: z.array(partSchema),
});

export const newLayerSchema = layerDataSchema.extend({ metadata: newMetadataSchema });
export const updateLayerSchema = layerDataSchema.extend({ metadata: updateMetadataSchema });
