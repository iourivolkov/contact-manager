import {
  Box,
  Button,
  Typography,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useState, useContext } from "react";
import AppContext from "../../Context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const UpdateAddressModal = ({
  isEditModal,
  setIsEditModal,
  id,
  walletAddress,
}) => {
  const { walletAddresses, setAddresses } = useContext(AppContext);
  const [addressName, setAddressName] = useState("");
  const [updateWalletAddress, setUpdateWalletAddress] = useState("");
  const [walletChain, setWalletChain] = useState("");
  const [updateAddress, setUpdateAddress] = useState(null);

  const handleAddressName = (e) => {
    setAddressName(e.target.value);
  };

  const handleWalletAddress = (e) => {
    setUpdateWalletAddress(e.target.value);
  };

  const handleWalletChain = (e) => {
    setWalletChain(e.target.value);
  };

  // updated address requires -> id, newAddress
  // PUT request to update address in PBLK database
  const handleUpdateAddress = (e, id) => {
    e.preventDefault();

    setUpdateAddress({
      name: addressName,
    });

    console.log(updateAddress);
  };

  return (
    <div>
      <Modal
        open={isEditModal}
        onClose={() => {
          setIsEditModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textTransform: "uppercase",
              fontFamily: "Futura",
              fontWeight: "bold",
            }}
          >
            Update Label
          </Typography>
          <br />
          <form
            onSubmit={() => {
              handleUpdateAddress(id);
            }}
          >
            <Stack
              spacing={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <TextField
                label="Name"
                type="text"
                onChange={handleAddressName}
                value={addressName}
              />
              {/* <TextField
                type="text"
                label="Wallet Address"
                onChange={handleWalletAddress}
                value={updateWalletAddress}
              />
              <TextField
                type="text"
                label="Chain"
                onChange={handleWalletChain}
                value={walletChain}
              /> */}
              <Stack direction="row" spacing={2}>
                <Button
                  type="submit"
                  disableElevation
                  disableRipple
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "uppercase",
                    color: "white",
                    bgcolor: "blue",
                    borderRadius: "0",
                  }}
                >
                  Update
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdateAddressModal;
