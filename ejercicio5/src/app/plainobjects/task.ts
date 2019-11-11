import { TaskType } from 'src/enums/tasktype';

export class Task {
    id: number;
    title: string;
    description: string;
    type: TaskType
}