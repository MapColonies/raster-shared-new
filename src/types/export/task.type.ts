import z from 'zod';
import { exportTaskParametersSchema } from '../../schemas/export/task.schema';

export type exportTaskParameters = z.infer<typeof exportTaskParametersSchema>;
