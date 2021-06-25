import {
  Box,
  Button,
  Divider,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import { Fragment } from "react";
import * as React from "react";
import { ReactMultiEmail, isEmail } from "react-multi-email";
import "react-multi-email/style.css";

const App = () => {
  const [emails, setEmails] = React.useState<string[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Heading>Chakra-UI Modal Form with Formik</Heading>
      {!isOpen && (
        <Box mt={6}>
          <Button onClick={onOpen}>Click to open modal</Button>
        </Box>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Invite Members</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody>
            <>
              <h3>Email</h3>
              <ReactMultiEmail
                placeholder="placeholder"
                emails={emails}
                onChange={(_emails: string[]) => setEmails(_emails)}
                validateEmail={(email) => {
                  return isEmail(email); // return boolean
                }}
                getLabel={(
                  email: string,
                  index: number,
                  removeEmail: (index: number) => void
                ) => {
                  return (
                    <div data-tag key={index}>
                      {email}
                      <span data-tag-handle onClick={() => removeEmail(index)}>
                        ×
                      </span>
                    </div>
                  );
                }}
              />
              <br />
              <h4>react-multi-email value</h4>
              <p>{emails.join(", ") || "empty"}</p>
            </>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default App;
