import { z } from 'zod';
import { callbackSchema, callbacksArraySchema } from '../../schemas/export/job.schema';
import { callbackExportResponseSchema, cleanupDataSchema, fileNamesTemplatesSchema } from '../../zod/export/export.schema';

export type callbackTarget = z.infer<typeof callbackSchema>;
export type callbacksTargetArray = z.infer<typeof callbacksArraySchema>;
export type cleanupData = z.infer<typeof cleanupDataSchema>;
export type callbackExportResponse = z.infer<typeof callbackExportResponseSchema>;
export type linksDefinition = z.infer<typeof fileNamesTemplatesSchema>;
