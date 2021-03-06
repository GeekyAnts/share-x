import React from 'react';
import { ListGroup, Form, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLink,
  faGlobe,
  faUserFriends,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import IBlock from '../../types/IBlock';
import IDropdownOptions from '../../types/IDropdownOptions';
import IAction from 'types/IAction';

interface IProps {
  block: IBlock;
  onAction: (action: IAction) => void;
  noUpBorder?: boolean;
  noDownBorder?: boolean;
}

const IndividualListItem: React.FC<IProps> = ({
  block,
  onAction,
  noUpBorder = false,
  noDownBorder = false,
}) => {
  let className = 'border-left-0 border-right-0 px-0 ';
  if (noUpBorder) {
    className += 'border-top-0 pt-2 pb-0';
  } else if (noDownBorder) {
    className += 'border-bottom-0 pt-3';
  } else {
    className += ' py-3';
  }

  const dispatchDropdownAction = (value: string) => {
    onAction({
      type: 'DROPDOWN_CHANGE',
      payload: {
        blockId: block.id,
        value: value,
      },
    });
  };

  const dispatchCopyLinkAction = () => {
    onAction({
      type: 'COPY_LINK',
      payload: {
        blockId: block.id,
      },
    });
  };

  const getIcon = () => {
    switch (block.icon) {
      case 'globe':
        return <FontAwesomeIcon icon={faGlobe} />;
      case 'userFriends':
        return <FontAwesomeIcon icon={faUserFriends} />;
      case 'user':
        return <FontAwesomeIcon icon={faUser} />;
      default:
        return <FontAwesomeIcon icon={faLink} />;
    }
  };

  return (
    <ListGroup.Item className={className}>
      <Form.Group as={Row} className="mb-0">
        <Form.Label column md="1" sm="1" className="mr-1">
          {getIcon()}
        </Form.Label>
        <Col md="8" sm="8" className="d-flex align-items-center pl-0">
          {block.caption}
          <Dropdown className="ml-2">
            <Dropdown.Toggle
              variant="link"
              id="link-access-dropdown dropdown-toggle-button"
            >
              {block.value.access}
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="border-0"
              style={{
                boxShadow: '0 8px 16px 0 rgba(5, 0, 56, 0.12)',
              }}
            >
              {block.accessTypes.map((accessType: IDropdownOptions) => {
                return (
                  <Dropdown.Item
                    key={accessType.key}
                    onClick={() => dispatchDropdownAction(accessType.value)}
                    style={accessType.style ? { ...accessType.style } : {}}
                  >
                    {accessType.value}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md="3" sm="3" className="d-flex justify-content-end">
          {block.inviteLink ? (
            <Button
              variant="primary"
              size="lg"
              onClick={() => dispatchCopyLinkAction()}
              className="p-2"
            >
              Copy invite link
            </Button>
          ) : null}
        </Col>
      </Form.Group>
    </ListGroup.Item>
  );
};

export default IndividualListItem;
