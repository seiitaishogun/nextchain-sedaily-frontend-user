interface ListProps {
  data: any; // TODO: react query useInfiniteQuery type 대응
  isLoading: boolean;
  fetchNextPage: () => void;
  hasNextPage?: boolean;
}

interface ListItemProps {
  data: any; // TODO:
}

export type { ListProps, ListItemProps };
