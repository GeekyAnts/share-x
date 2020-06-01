import IDropdownOptions from './IDropdownOptions';

export default interface IBlock {
  id: number | string;
  type: 'search' | 'sharedWith' | 'group';
  icon: any;
  caption: string;
  description: string;
  accessTypes: Array<IDropdownOptions>;
  value: {
    access: string;
    selected?: Array<any>;
  };
  inviteLink: boolean;
  searchRecords?: Array<any>;
  filterBy?: Array<string>;
  buttonText?: string;
}
