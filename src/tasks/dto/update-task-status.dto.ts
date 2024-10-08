import { IsEnum } from 'class-validator';
import { TaskStatus } from 'src/tasks/tasks.types';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
