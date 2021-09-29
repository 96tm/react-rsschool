import ActionType from './action-type';

interface IAction<T> {
  (value: T): { type: ActionType; payload: T };
}
export default IAction;
