import * as React from 'react';
import { Modal, ListGroup, Form, Row, Col } from 'react-bootstrap';

const ShareDialog = () => {
  return (
    <>
      <Modal.Dialog>
        <Modal.Body className="p-4">
          <ListGroup>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 px-0 pb-2 pt-0">
              <Form.Group as={Row}>
                <Form.Label column md="1">
                  <strong>To:</strong>
                </Form.Label>
                <Col md="11">
                  <Form.Control
                    plaintext
                    placeholder="Enter emails or invite from Slack or Gmail"
                  />
                </Col>
              </Form.Group>
            </ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 px-0 py-4">
              test
            </ListGroup.Item>
            <ListGroup.Item className="border-top-0 border-left-0 border-right-0 border-bottom-0 px-0 py-4">
              test
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
    </>
  );
};

export default ShareDialog;
