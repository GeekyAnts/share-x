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
      filterBy: ['firstName', 'lastName'],
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
  const [show, setShow] = React.useState(false);

  const searchRenderer = (option: any) =>
    `${option.firstName} (${option.lastName})`;

  const onAction = (action: IAction) => {
    setValue(reduce(value, action));
  };

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Show
      </button>
      <ShareDialog
        show={show}
        value={value}
        onAction={onAction}
        searchRenderer={searchRenderer}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
