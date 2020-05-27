import * as React from 'react';
import {
  Modal,
  ListGroup,
  Form,
  Row,
  Col,
  Dropdown,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLink,
  faUserFriends,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const ShareDialog = () => {
  return (
    <>
      <Modal.Dialog style={{ minWidth: '620px' }}>
        <Modal.Body className="px-4 py-3">
          <ListGroup>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 px-0 pb-2 pt-0">
              <Form.Group as={Row}>
                <Form.Label column md="1">
                  <strong>To:</strong>
                </Form.Label>
                <Col md="11" className="pl-0">
                  <Form.Control
                    plaintext
                    placeholder="Enter emails or invite from Slack or Gmail"
                  />
                </Col>
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 px-0 py-4">
              <Form.Group as={Row} className="mb-0">
                <Form.Label column md="1">
                  <FontAwesomeIcon icon={faLink} />
                </Form.Label>
                <Col md="8" className="d-flex align-items-center pl-0">
                  Invite link to&nbsp;<strong>Board and Team</strong>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      id="link-access-dropdown dropdown-toggle-button"
                    >
                      Can edit
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="border-0"
                      style={{
                        boxShadow: '0 8px 16px 0 rgba(5, 0, 56, 0.12)',
                      }}
                    >
                      <Dropdown.Item>Can view</Dropdown.Item>
                      <Dropdown.Item>Can comment</Dropdown.Item>
                      <Dropdown.Item>Can edit</Dropdown.Item>
                      <Dropdown.Item>No access</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col md={3} className="d-flex justify-content-end">
                  <Button variant="primary" size="sm">
                    Copy invite link
                  </Button>
                </Col>
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 px-0 py-4">
              <Form.Group as={Row} className="mb-0">
                <Form.Label column md="1">
                  <FontAwesomeIcon icon={faUserFriends} />
                </Form.Label>
                <Col md="8" className="d-flex align-items-center pl-0">
                  Team access to board&nbsp;
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      id="link-access-dropdown dropdown-toggle-button"
                    >
                      Can edit
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="border-0"
                      style={{
                        boxShadow: '0 8px 16px 0 rgba(5, 0, 56, 0.12)',
                      }}
                    >
                      <Dropdown.Item>Can view</Dropdown.Item>
                      <Dropdown.Item>Can comment</Dropdown.Item>
                      <Dropdown.Item>Can edit</Dropdown.Item>
                      <Dropdown.Item>No access</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 border-bottom-0 px-0 py-4">
              <Form.Group as={Row} className="mb-0">
                <Form.Label column md="1">
                  <FontAwesomeIcon icon={faGlobe} />
                </Form.Label>
                <Col md="8" className="d-flex align-items-center pl-0">
                  Public link to board&nbsp;
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="link"
                      id="link-access-dropdown dropdown-toggle-button disabled"
                    >
                      No access
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      className="border-0"
                      style={{
                        boxShadow: '0 8px 16px 0 rgba(5, 0, 56, 0.12)',
                      }}
                    >
                      <Dropdown.Item>Can view</Dropdown.Item>
                      <Dropdown.Item>Can comment</Dropdown.Item>
                      <Dropdown.Item>Can edit</Dropdown.Item>
                      <Dropdown.Item>No access</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Form.Group>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
};

export default ShareDialog;
