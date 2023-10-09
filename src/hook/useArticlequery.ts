import { queryKeys } from '@/react-query/queryKey';
import { useQuery } from '@tanstack/react-query';

/* export const useCurationQuery = (
  queryStrings: any = {
    limit: '20',
  },
  headers: HeadersInit = {},
  options: RequestInit = {},
) => {
  const { data, isLoading, isSuccess, isError, isFetching, isFetched, error } = useQuery(
    [queryKeys.GetArticles, queryStrings],
    () => getGlobalFeeds(queryStrings, headers, options),
  );

  return { data, isLoading, isSuccess, isError, isFetching, isFetched, error };
}; */
