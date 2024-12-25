import { z } from 'zod';
import { VALIDATIONS } from '../../constants/ingestionConstants';

export const inputFilesSchema = z
  .object({
    originDirectory: z.string().min(1, { message: 'Origin directory is required, files should be stored on specific directory' }),
    fileNames: z
      .array(z.string().regex(new RegExp(VALIDATIONS.fileNames.pattern), 'File name must end with .gpkg'))
      .length(1, { message: 'Number of files should be 1' }),
  })
  .describe('inputFilesSchema');
