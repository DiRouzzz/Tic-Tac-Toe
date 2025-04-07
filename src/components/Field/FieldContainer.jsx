import { FieldLayout } from './FieldLayout';
import { store } from '../../reducer';

export function FieldContainer({ field }) {
  return (
    <FieldLayout
      field={field}
      onClickCell={(index) => store.dispatch({ type: 'MOVE', payload: index })}
    />
  );
}
