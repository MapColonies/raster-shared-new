import z from 'zod';
import { inputFilesSchema } from '../../zod/ingestion/inputFiles.schema';
import { partSchema } from '../../zod/ingestion/polygonParts.schema';
import { aggregationMetadataSchema, newMetadataSchema, updateMetadataSchema } from '../../zod/ingestion/metadata.schema';
import { newLayerSchema, updateLayerSchema } from '../../zod/ingestion/ingestion.schema';

type InputFiles = z.infer<typeof inputFilesSchema>;
type Part = z.infer<typeof partSchema>;
export type NewMetadata = z.infer<typeof newMetadataSchema>;
export type UpdateMetadata = z.infer<typeof updateMetadataSchema>;
export type AggregationLayerMetadata = z.infer<typeof aggregationMetadataSchema>;
export type NewLayerData = z.infer<typeof newLayerSchema>;
export type UpdateLayerData = z.infer<typeof updateLayerSchema>;
