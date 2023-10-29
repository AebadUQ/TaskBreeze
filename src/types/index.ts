export type  SocialMediaLink= {
    icon: React.ReactNode;
    url: string;
    variant: "primary" | "secondary";
  }
  
  export   type FieldType = {
    id?:string,
    taskname?: string;
    description?: string;
    assignto?: string;
    status?: string;
    priority?: string;
  };
  export type Task ={
    id?:string,
    taskname: string;
    description: string;
    assignto: string;
    status: string;
    priority: string;
  }
  
  export type TaskCardProps ={
    task: Task;
  }
  export type  CustomAvatarProps ={
    variant: "primary" | "secondary" | any;
    onClick?: () => void;
    icon?: React.ReactNode;
    handleDeleteClick?:any
  }

  
  export type  Todo= {
    id: string | undefined;
  }
  export type  ToDoState ={
    todoId: string;
    todoList: Todo[]; 
  }