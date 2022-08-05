import Ethereum from "../assets/images/Ethereum.png";
import Solana from "../assets/images/Solana.png";
import { useState } from "react";
import DeleteAddressModal from "./Modals/DeleteAddressModal";
import UpdateAddressModal from "./Modals/UpdateAddressModal";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";

const AddressCard = ({ name, walletAddress, chain }) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  return (
    <Card sx={{ maxWidth: 400, marginTop: "5em" }}>
      <CardMedia
        component="img"
        height="120"
        image={chain === "Ethereum" ? Ethereum : Solana}
        alt="chain banner"
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {walletAddress}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            disableElevation
            disableRipple
            size="medium"
            variant="contained"
            sx={{ bgcolor: "#536DFE" }}
          >
            Edit
          </Button>
          <Button
            disableElevation
            disableRipple
            size="medium"
            variant="contained"
            sx={{ bgcolor: "#D32F2F" }}
          >
            Delete
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};

export default AddressCard;
