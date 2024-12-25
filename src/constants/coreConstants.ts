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
};

export type Transparency = (typeof Transparency)[keyof typeof Transparency];

/* eslint-enable @typescript-eslint/naming-convention */
