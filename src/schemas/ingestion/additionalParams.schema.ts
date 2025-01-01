import { z } from 'zod';
import { CORE_VALIDATIONS, TileOutputFormat } from '../../constants/core/coreConstants';
import { multiPolygonSchema, polygonSchema } from '../core/geo.schema';

export const newAdditionalParamsSchema = z
  .object({
    jobTrackerServiceURL: z.string().regex(new RegExp(CORE_VALIDATIONS.url.pattern), CORE_VALIDATIONS.url.description),
  })
  .describe('newAdditionalParamsSchema');

export const updateAdditionalParamsSchema = newAdditionalParamsSchema
  .extend({
    tileOutputFormat: z.nativeEnum(TileOutputFormat),
    footprint: polygonSchema.or(multiPolygonSchema),
  })
  .describe('updateAdditionalParamsSchema');

export const swapUpdateAdditionalParamsSchema = updateAdditionalParamsSchema
  .extend({
    displayPath: z.string().uuid(),
  })
  .describe('swapUpdateAdditionalParamsSchema');
