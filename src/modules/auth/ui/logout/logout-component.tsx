'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { $api } from '@/lib/api-client';
import { cn } from '@/lib/utils';
import { useAuthStore } from '../../stores/auth-store';

export function LogoutComponent({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const router = useRouter();
  const { clearUser } = useAuthStore();

  const logoutMutation = $api.useMutation('post', '/api/v1/auth/logout', {
    onSuccess: (data) => {
      toast.success(data.message);

      clearUser();

      // Redirect to Home
      router.push('/');
    },
    onError: (error) => {
      const errorMessage =
        error.message === 'Failed to fetch'
          ? 'Unable to connect to the server. Please try again.'
          : error.message;
      toast.error(errorMessage);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate({});
  };

  return (
    <div className={cn('flex w-32 flex-col gap-6', className)} {...props}>
      <Button loading={logoutMutation.isPending} onClick={handleLogout}>
        {logoutMutation.isPending ? 'Logging out...' : 'Logout'}
      </Button>
    </div>
  );
}
