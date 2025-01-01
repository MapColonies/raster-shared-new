import z from 'zod';
import { exportTaskParametersSchema } from '../../zod/export/task.schema';

export type exportTaskParameters = z.infer<typeof exportTaskParametersSchema>;
