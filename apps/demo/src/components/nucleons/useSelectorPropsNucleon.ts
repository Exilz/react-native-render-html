import { useMemo } from 'react';
import { SelectorItem } from './types';

export default function useSelectorItemsNucleon<V extends string | number>(
  items: ReadonlyArray<SelectorItem<V>> | ReadonlyArray<V>
) {
  return useMemo<Array<Required<SelectorItem<V>>>>(
    () =>
      (items || []).map((item: SelectorItem<V> | V) =>
        typeof item !== 'string' && typeof item !== 'number'
          ? { value: item.value, label: String(item.label || item.value) }
          : { value: item as V, label: String(item) }
      ),
    [items]
  );
}
