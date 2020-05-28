import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ShareDialog, reduce } from '../.';
import IValue from '../dist/types/IValue';
import IAction from '../dist/types/IAction';

const defaultValue: IValue = {
  blocks: [
    {
      id: 1,
      type: 'search',
      icon: '',
      caption: 'To:',
      description: '',

      accessTypes: [
        {
          key: 'Read',
          value: 'read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
        },
      ],
      value: {
        access: 'Read',
        selected: [],
      },
      inviteLink: true,
      searchRecords: [
        { firstName: 'Art', lastName: 'Blakey' },
        { firstName: 'Jimmy', lastName: 'Cobb' },
        { firstName: 'Elvin', lastName: 'Jones' },
        { firstName: 'Max', lastName: 'Roach' },
        { firstName: 'Tony', lastName: 'Williams' },
      ],
    },
    {
      id: '123123',
      type: 'group',
      icon: '',
      caption: 'Invite link to Board and Team',
      description: '',

      accessTypes: [
        {
          key: 'read',
          value: 'Read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
        },
      ],
      inviteLink: true,
      value: {
        access: 'Read',
      },
    },
    {
      id: 2,
      type: 'sharedWith',
      icon: '',
      caption: 'Random name 2',
      description: '',

      accessTypes: [
        {
          key: 'read',
          value: 'Read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
        },
      ],
      inviteLink: false,
      value: {
        access: 'Read',
      },
    },
    {
      id: 3,
      type: 'sharedWith',
      icon: '',
      caption: 'Random name 1',
      accessTypes: [
        {
          key: 'read',
          value: 'Read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
        },
      ],
      inviteLink: false,
      value: {
        access: 'Read',
      },
    },
    {
      id: 5,
      type: 'sharedWith',
      icon: '',
      caption: 'Aditya Jamuar',
      description: '',
      accessTypes: [
        {
          key: 'read',
          value: 'Read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
        },
      ],
      inviteLink: false,
      value: {
        access: 'Read',
      },
    },
  ],
};

const App = () => {
  const [value, setValue] = React.useState(defaultValue);

  const searchRenderer = (option: any) => `${option.firstName}`;

  const onAction = (action: IAction) => {
    setValue(reduce(value, action));
  };

  return (
    <div>
      <ShareDialog
        show={true}
        value={value}
        onAction={onAction}
        searchRenderer={searchRenderer}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
