import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import SearchContacts from "./SearchAddresses";
import AddContactModal from "./Modals/AddContactModal";
import AddressCard from "./AddressCard";

const AddressesList = ({ walletAddresses, setAddresses }) => {
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
        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Futura",
                fontWeight: "bold",
                fontSize: "2em",
              }}
            >
              Address Directory
            </Typography>
            <Button
              onClick={handleAddContact}
              disableRipple
              disableElevation
              variant="contained"
              size="large"
              sx={{
                bgcolor: "green",
                fontFamily: "futura",
                fontWeight: "bold",
                cursor: "pointer",
                height: "3em",
                borderRadius: "0",
              }}
            >
              Add New +
            </Button>
          </Stack>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Futura", fontSize: "1em" }}
          >
            Displaying {walletAddresses.length} results
          </Typography>
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

      {isAddModal && (
        <AddContactModal
          isAddModal={isAddModal}
          setIsAddModal={setIsAddModal}
          walletAddresses={walletAddresses}
          setAddresses={setAddresses}
        />
      )}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {walletAddresses.map((address) => {
          return (
            <AddressCard
              key={address.id}
              name={address.name}
              walletAddress={address.walletAddress}
              chain={address.chain}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default AddressesList;
