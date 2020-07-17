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
          value: 'Read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
          style: { color: 'red' },
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
      buttonText: 'Invite',
    },
    {
      id: '123123',
      type: 'group',
      icon: 'globe',
      caption: 'Invite link to Board and Team',
      description: '',

      accessTypes: [
        {
          key: 'Read',
          value: 'Read',
        },
        {
          key: 'can_edit',
          value: 'Can edit',
        },
        {
          key: 'no_access',
          value: 'No access',
          style: { color: 'red' },
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
      icon: 'userFriends',
      caption: 'Random name 2',
      description: '',

      accessTypes: [
        {
          key: 'Read',
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
        {
          key: 'remove',
          value: 'Remove',
          style: { color: 'red' },
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
      icon: 'userFriends',
      caption: 'Aditya Jamuar',
      description: '',
      accessTypes: [
        {
          key: 'Read',
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
        {
          key: 'remove',
          value: 'Remove',
        },
      ],
      inviteLink: false,
      value: {
        access: 'Read',
      },
    },
  ],
};

const validateCreation = (inputValue, selectValue, selectOptions) => {
  return false;
};
const App = () => {
  const [value, setValue] = React.useState(defaultValue);
  const [show, setShow] = React.useState(false);

  const searchRenderer = (option: any) => {
    return {
      label: `${option.firstName} (${option.lastName})`,
      value: option.firstName,
    };
  };

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
        onHide={() => setShow(!show)}
        onAction={onAction}
        searchRenderer={searchRenderer}
        loading={false}
        validationCallback={validateCreation}
        noOptionsMessage="This is a custom message"
        
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
