import { toast } from 'sonner';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // useErrorBoundary: true,
      retry: false,
    },
  },
  queryCache: new QueryCache({
    onError: err => {
      console.log('Query error', err);
      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || 'Something went wrong', {
          description: 'An error occurred while fetching data.',
        });
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: err => {
      console.log('Mutation error', err);

      if (err instanceof AxiosError && err.code === 'ERR_CANCELED') {
        return;
      }

      if (err instanceof AxiosError) {
        toast.error(err.response?.data?.message || 'Something went wrong', {
          description: 'An error occurred while performing the action.',
        });
      }
    },
  }),
});
