import { z } from 'zod';
import { IJobResponse } from '@map-colonies/mc-priority-queue';
import { exportTaskParameters } from './task.type';
import { exportJobParametersSchema } from '../../schemas/export/job.schema';

export type exportJobParameters = z.infer<typeof exportJobParametersSchema>;

export type JobExportResponse = IJobResponse<exportJobParameters, exportTaskParameters>;
