import { ValidationRules } from '../../types/core';

/* eslint-disable @typescript-eslint/naming-convention */
export const RasterProductTypes = {
  Orthophoto: 'Orthophoto',
  OrthophotoHistory: 'OrthophotoHistory',
  OrthophotoBest: 'OrthophotoBest',
  RasterMap: 'RasterMap',
  RasterMapBest: 'RasterMapBest',
  RasterAid: 'RasterAid',
  RasterAidBest: 'RasterAidBest',
  RasterVector: 'RasterVector',
  RasterVectorBest: 'RasterVectorBest',
} as const;

export const RASTER_PRODUCT_TYPE_LIST = Object.values(RasterProductTypes);

export const Transparency = {
  Opaque: 'OPAQUE',
  Transparent: 'TRANSPARENT',
} as const;

export type Transparency = (typeof Transparency)[keyof typeof Transparency];

export const TileOutputFormat = {
  PNG: 'PNG',
  JPEG: 'JPEG',
} as const;

export type TileOutputFormat = (typeof TileOutputFormat)[keyof typeof TileOutputFormat];

export const TileOutputFormatList = Object.values(TileOutputFormat);

export const CORE_VALIDATIONS = {
  url: {
    pattern: '^https?://[^\\s/$.?#].[^\\s]*$',
    description: 'URL must start with http:// or https://',
  },
} satisfies ValidationRules;

/* eslint-enable @typescript-eslint/naming-convention */
