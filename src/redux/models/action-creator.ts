import IAction from './action';

interface IActionCreator<T> {
  (value: T): IAction<T>;
}
export default IActionCreator;
