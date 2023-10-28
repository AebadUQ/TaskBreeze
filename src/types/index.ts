export type  SocialMediaLink= {
    icon: React.ReactNode;
    url: string;
    variant: "primary" | "secondary";
  }
  
  export   type FieldType = {
    taskname?: string;
    description?: string;
    assignto?: string;
    status?: string;
    priority?: number;
  };
  export type Task ={
    taskName: string;
    description: string;
    assignTo: string;
    status: string;
    priority: number;
  }
  
  export type TaskCardProps ={
    task: Task;
  }
  export type  CustomAvatarProps ={
    variant: "primary" | "secondary" | any;
    onClick?: () => void;
    icon?: React.ReactNode;
  }
  