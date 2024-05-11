"use client";
import { signIn } from "next-auth/react";
import * as React from "react";
import { FC } from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isGitHubLoading, setIsGitHubLoading] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsGoogleLoading(true);

    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("ERRORE_GOOGLE", error);
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const loginWithGithub = async () => {
    setIsGitHubLoading(true);

    try {
      await signIn("github", { callbackUrl: "/" });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "There was an error logging in with Github",
        variant: "destructive",
      });
    } finally {
      setIsGitHubLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col justify-center", className)} {...props}>
      <Button
        isLoading={isGoogleLoading}
        type="button"
        size="sm"
        className="w-full my-2"
        onClick={loginWithGoogle}
        disabled={isGoogleLoading}
      >
        {isGoogleLoading ? null : <Icons.google className="h-4 w-4 mr-2" />}
        Google
      </Button>

      <Button
        isLoading={isGitHubLoading}
        type="button"
        size="sm"
        className="w-full my-2"
        onClick={loginWithGithub}
        disabled={isGitHubLoading}
      >
        {isGitHubLoading ? null : <Icons.gitHub className="h-4 w-4 mr-2" />}
        Github
      </Button>
    </div>
  );
};

export default UserAuthForm;
