interface ICards {
  id?: number;
  name?: string;
  year?: string;
  plot?: string;
  image?: string;
}

export interface IProps {
  map(arg0: (card: ICards) => JSX.Element): unknown;
  callback: (e: { target: { value: string } }) => void;
  dataArr: ICards[];
}

export interface ICallback {
  callback: (obj: object) => void;
  changeDisabled: (num: number) => void;
  changeShowState: () => void;
  dis: boolean;
}

export default ICards;
