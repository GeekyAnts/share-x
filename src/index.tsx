import * as React from 'react';
import { Modal } from 'react-bootstrap';
import OptionList from './components/OptionList';

const ShareDialog = () => {
  const [selected, setSelected] = React.useState([]);

  const options = [
    { email: 'adityaj@geekyants.com' },
    { email: 'adityasharanjamuar@gmail.com' },
    { email: 'adityajamuar@yahoo.com' },
  ];

  return (
    <>
      <Modal.Dialog style={{ minWidth: '620px' }}>
        <Modal.Body className="px-4 py-3">
          <OptionList
            options={options}
            selected={selected}
            setSelected={setSelected}
          />
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
};

export default ShareDialog;
