import { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import SearchAddresses from "./SearchAddresses";
import AddContactModal from "./Modals/AddAddressModal";
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
                borderRadius: "10",
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
          <SearchAddresses
            walletAddresses={walletAddresses}
            setAddresses={setAddresses}
          />
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
        {Array.isArray(walletAddresses)
          ? walletAddresses.map((address) => {
              return (
                <AddressCard
                  setAddresses={setAddresses}
                  walletAddresses={walletAddresses}
                  id={address.id}
                  key={address.id}
                  name={address.name}
                  walletAddress={address.walletAddress}
                  chain={address.chain}
                />
              );
            })
          : null}
      </Stack>
    </>
  );
};

export default AddressesList;
