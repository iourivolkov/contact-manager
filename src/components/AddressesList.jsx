import { useState, useContext } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import SearchAddresses from "./SearchAddresses";
import AddContactModal from "./Modals/AddAddressModal";
import AddressCard from "./AddressCard";
import AppContext from "../Context";

const AddressesList = () => {
  const { walletAddresses, setAddresses } = useContext(AppContext);

  const [isAddModal, setIsAddModal] = useState(false);

  const handleAddContact = () => {
    console.log("Add Contact Modal Opened!");
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
                fontFamily: "Figtree",
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
                fontFamily: "Figtree",
                fontWeight: "700",
                cursor: "pointer",
                height: "3em",
                borderRadius: "10",
                "&:hover": {
                  bgcolor: "darkGreen",
                },
              }}
            >
              Add New +
            </Button>
          </Stack>
          <Typography
            variant="h6"
            sx={{ fontFamily: "Figtree", fontSize: "1em" }}
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
          {/* <SearchAddresses /> */}
        </Box>
      </Box>

      {isAddModal && (
        <AddContactModal
          isAddModal={isAddModal}
          setIsAddModal={setIsAddModal}
        />
      )}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0 2.5em 0 2.5em",
        }}
      >
        {Array.isArray(walletAddresses)
          ? walletAddresses.map((address) => {
              return (
                <AddressCard
                  key={address.id}
                  id={address.id}
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
