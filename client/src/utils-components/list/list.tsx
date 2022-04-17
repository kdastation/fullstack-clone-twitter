interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>): JSX.Element {
  const { items, renderItem } = props;
  return <>{items.map(renderItem)}</>;
}

export { List };
