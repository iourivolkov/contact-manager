import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import ContactCard from "./ContactCard";
import SearchContacts from "./SearchContacts";
import AddContactModal from "../components/Modals/AddContactModal";

const ContactList = () => {
  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddContact = () => {
    console.log("Contact added!");
    setIsAddModal(true);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "4em 3.5em 0 3.5em",
        }}
      >
        <Stack direction="row" spacing={4}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Futura",
              fontWeight: "bold",
              fontSize: "2em",
            }}
          >
            Contact Directory
          </Typography>
          <Button
            onClick={handleAddContact}
            disableRipple
            disableElevation
            variant="contained"
            size="medium"
            sx={{
              bgcolor: "green",
              fontFamily: "futura",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add Contact +
          </Button>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <SearchContacts />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          flexDirection: "row",
          margin: "2em 0 0 4.5em",
        }}
      >
        <ContactCard />
        {isAddModal && (
          <AddContactModal
            isAddModal={isAddModal}
            setIsAddModal={setIsAddModal}
          />
        )}
      </Box>
    </>
  );
};

export default ContactList;
