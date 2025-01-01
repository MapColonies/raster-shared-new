import { z } from 'zod';
import { exportJobParametersSchema } from '../../zod/export/job.schema';
import { IJobResponse } from '@map-colonies/mc-priority-queue';
import { exportTaskParameters } from './task.type';

export type exportJobParameters = z.infer<typeof exportJobParametersSchema>;

export type JobExportResponse = IJobResponse<exportJobParameters, exportTaskParameters>;
