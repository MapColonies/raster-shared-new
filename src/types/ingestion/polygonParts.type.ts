import z from 'zod';
import { inputFilesSchema } from '../../schemas/ingestion/inputFiles.schema';
import { partSchema } from '../../schemas/ingestion/polygonParts.schema';
import { aggregationMetadataSchema, newMetadataSchema, updateMetadataSchema } from '../../schemas/ingestion/metadata.schema';
import { newLayerSchema, swapUpdateLayerSchema, updateLayerSchema } from '../../schemas/ingestion/ingestion.schema';

export type InputFiles = z.infer<typeof inputFilesSchema>;
export type Part = z.infer<typeof partSchema>;
export type NewMetadata = z.infer<typeof newMetadataSchema>;
export type UpdateMetadata = z.infer<typeof updateMetadataSchema>;
export type AggregationLayerMetadata = z.infer<typeof aggregationMetadataSchema>;
export type IngestionNewParams = z.infer<typeof newLayerSchema>;
export type IngestionUpdateParams = z.infer<typeof updateLayerSchema>;
export type IngestionSwapUpdateParams = z.infer<typeof swapUpdateLayerSchema>;
