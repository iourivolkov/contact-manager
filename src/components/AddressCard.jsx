import Ethereum from "../assets/images/Ethereum.png";
import Solana from "../assets/images/Solana.png";
import { useState } from "react";
import DeleteAddressModal from "./Modals/DeleteAddressModal";
import UpdateAddressModal from "./Modals/UpdateAddressModal";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <Card
      sx={{
        maxWidth: 400,
        marginTop: "5em",
        borderRadius: "0",
      }}
    >
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
            onClick={() => {
              setIsEditModal(true);
            }}
            disableElevation
            disableRipple
            size="medium"
            variant="contained"
            sx={{ bgcolor: "#536DFE", borderRadius: "0" }}
          >
            <EditIcon />
          </Button>
          <Button
            onClick={() => {
              setIsDeleteModal(true);
            }}
            disableElevation
            disableRipple
            size="medium"
            variant="contained"
            sx={{ bgcolor: "#D32F2F", borderRadius: "0" }}
          >
            <DeleteIcon />
          </Button>
        </CardActions>
        {isEditModal && (
          <UpdateAddressModal
            isEditModal={isEditModal}
            setIsEditModal={setIsEditModal}
          />
        )}
        {isDeleteModal && (
          <DeleteAddressModal
            isDeleteModal={isDeleteModal}
            setIsDeleteModal={setIsDeleteModal}
          />
        )}
      </Stack>
    </Card>
  );
};

export default AddressCard;
