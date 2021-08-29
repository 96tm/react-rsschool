import ActionType from './action-type';

interface IAction<T> {
  type: ActionType;
  payload: T;
}
export default IAction;
