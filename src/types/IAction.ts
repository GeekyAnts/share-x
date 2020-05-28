export default interface IAction {
  type: string;
  payload: {
    blockId: number | string;
    value?: any;
  };
}
