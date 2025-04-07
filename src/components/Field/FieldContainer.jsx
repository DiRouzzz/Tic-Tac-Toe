import { FieldLayout } from './FieldLayout';
import { useDispatch } from 'react-redux';

export function FieldContainer({ field }) {
  const dispatch = useDispatch();
  return (
    <FieldLayout
      field={field}
      onClickCell={(index) => dispatch({ type: 'MOVE', payload: index })}
    />
  );
}
