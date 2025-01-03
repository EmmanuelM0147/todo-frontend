import { useState } from "react";
import { AuthForm } from "@/components/auth/AuthForm";
import { TaskList } from "@/components/todo/TaskList";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authType, setAuthType] = useState<"login" | "signup">("login");
  const { toast } = useToast();

  const handleAuth = (username: string, password: string) => {
    // In a real app, this would make an API call
    setIsAuthenticated(true);
    toast({
      title: "Success",
      description: `Successfully ${authType}ed!`,
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Todo App</h1>
          <p className="text-slate-600 text-center">Stay organized, get more done.</p>
        </div>
        <AuthForm onSubmit={handleAuth} type={authType} />
        <button
          onClick={() => setAuthType(authType === "login" ? "signup" : "login")}
          className="mt-4 text-sm text-slate-600 hover:text-slate-900"
        >
          {authType === "login"
            ? "Don't have an account? Sign up"
            : "Already have an account? Login"}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">My Tasks</h1>
          <p className="text-slate-600">Manage your tasks efficiently</p>
        </div>
        <TaskList />
      </div>
    </div>
  );
};

export default Index;