import React from 'react';
import { ListGroup, Form, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import IBlock from '../../types/IBlock';
import IDropdownOptions from '../../types/IDropdownOptions';

interface IProps {
  block: IBlock;
  noUpBorder?: boolean;
  noDownBorder?: boolean;
}

const GroupListItem: React.FC<IProps> = ({
  block,
  noUpBorder = false,
  noDownBorder = false,
}) => {
  let className = 'border-left-0 border-right-0 px-0 ';
  if (noUpBorder) {
    className += 'border-top-0 pt-2 pb-0';
  } else if (noDownBorder) {
    className += 'border-bottom-0 pt-4';
  } else {
    className += ' py-4';
  }

  return (
    <ListGroup.Item className={className}>
      <Form.Group as={Row} className="mb-0">
        <Form.Label column md="1" sm="1">
          <FontAwesomeIcon icon={faLink} />
        </Form.Label>
        <Col md="8" sm="8" className="d-flex align-items-center pl-0">
          {block.caption}
          <Dropdown>
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
                  <Dropdown.Item key={accessType.key}>
                    {accessType.value}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md="3" sm="3" className="d-flex justify-content-end">
          {block.inviteLink ? (
            <Button variant="primary" size="sm">
              Copy invite link
            </Button>
          ) : null}
        </Col>
      </Form.Group>
    </ListGroup.Item>
  );
};

export default GroupListItem;
