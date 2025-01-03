import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Task {
  id: string;
  title: string;
  status: "pending" | "completed" | "deleted";
}

interface TaskItemProps {
  task: Task;
  onStatusChange: (id: string, status: Task["status"]) => void;
}

export const TaskItem = ({ task, onStatusChange }: TaskItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "task-item flex items-center justify-between p-4 rounded-lg border mb-2 bg-white",
        task.status === "completed" && "completed",
        task.status === "deleted" && "deleted"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-3">
        <Checkbox
          checked={task.status === "completed"}
          onCheckedChange={(checked) =>
            onStatusChange(task.id, checked ? "completed" : "pending")
          }
        />
        <span className="text-sm">{task.title}</span>
      </div>
      {isHovered && task.status !== "deleted" && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onStatusChange(task.id, "deleted")}
        >
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
      )}
    </div>
  );
};