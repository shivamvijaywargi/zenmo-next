"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { $api } from "@/lib/api-client";
import { loginSchema, type TLogin } from "../../auth-schema";
import { useAuthStore } from "../../stores/auth-store";

export function LoginForm() {
  const router = useRouter();
  const { setUser } = useAuthStore();

  const form = useForm<TLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const loginMutation = $api.useMutation("post", "/api/v1/auth/login", {
    onSuccess: (data) => {
      toast.success(data.message);

      setUser(data.data);

      // Redirect to Home?
      router.push("/");
    },
    onError: (error) => {
      const errorMessage =
        error.message === "Failed to fetch"
          ? "Unable to connect to the server. Please try again."
          : error.message;
      toast.error(errorMessage);
    },
    retry: 1,
  });

  function onSubmit(values: TLogin) {
    loginMutation.mutate({
      body: values,
    });
  }

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="m@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button loading={loginMutation.isPending} type="submit">
          Login
        </Button>
      </form>
    </Form>
  );
}
