declare module 'Filter' {
  export namespace FilterTypes {
    export type FilterProps = {
      checkItemsLabel: string;
      checkItems: string[];
      onCheckChange(i: number): void;
      onReset(): void;
    }
    export type FilterCheckBoxProps = {
      label: string;
      checked: boolean;
      onClick(): void;
    }
    export type FilterResetBtnProps = {
      onClick(): void;
    }
  }
}