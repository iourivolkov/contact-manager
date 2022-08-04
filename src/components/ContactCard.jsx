// import {
//   Box,
//   Card,
//   CardContent,
//   CardMedia,
//   TextField,
//   Stack,
//   Button,
//   InputBase,
// } from "@mui/material";

// import VisibilityIcon from "@mui/icons-material/Visibility";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import UpdateContactModal from "./Modals/UpdateContactModal";
// import DeleteContactModal from "./Modals/DeleteContactModal";

// const ContactCard = ({ name, walletAddress, chain, image }) => {
//   const handleViewContact = () => {
//     console.log("Contact hidden!");
//   };

//   const handleEditContact = () => {
//     console.log("Editing contact!!");
//   };

//   const handleDeleteContact = () => {
//     console.log("Deleting contact!!");
//   };

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "row-reverse",
//         width: "500px",
//         borderRadius: "0",
//         marginTop: "4em",
//       }}
//     >
//       <CardContent
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <Stack spacing={2}>
//           <Stack
//             sx={{
//               display: "flex",
//               flexDirection: "row",
//             }}
//           >
//             <InputBase
//               label="Name"
//               placeholder={name}
//               sx={{ bgcolor: "#f2f2f2" }}
//             />
//             <Button
//               type="button"
//               onClick={handleViewContact}
//               disableElevation
//               disableRipple
//               variant="contained"
//               sx={{
//                 bgcolor: "#E1CF2C",
//                 color: "white",
//               }}
//             >
//               <VisibilityIcon />
//             </Button>
//           </Stack>
//           <Stack sx={{ display: "flex", flexDirection: "row" }}>
//             <InputBase
//               label="Mobile"
//               placeholder={walletAddress}
//               sx={{ bgcolor: "#f2f2f2" }}
//             />
//             <Button
//               onClick={handleEditContact}
//               disableElevation
//               disableRipple
//               variant="contained"
//               sx={{
//                 bgcolor: "#3A8EDC",
//                 color: "white",
//               }}
//             >
//               <EditIcon />
//             </Button>
//           </Stack>
//           <Stack sx={{ display: "flex", flexDirection: "row" }}>
//             <InputBase
//               label="Email"
//               placeholder={chain}
//               sx={{ bgcolor: "#f2f2f2" }}
//             />
//             <Button
//               onClick={handleDeleteContact}
//               disableElevation
//               disableRipple
//               sx={{
//                 bgcolor: "#E27C5B",
//                 color: "white",
//               }}
//             >
//               <DeleteIcon />
//             </Button>
//           </Stack>
//         </Stack>
//       </CardContent>
//       <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}></Box>

//       <CardMedia
//         component="img"
//         sx={{ width: 125, height: 125 }}
//         image={image}
//         alt="Contact photo"
//       />
//     </Card>
//   );
// };

// export default ContactCard;

import Ethereum from "../assets/images/Ethereum.png";
import Solana from "../assets/images/Solana.png";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";

const ContactCard = ({ name, walletAddress, chain }) => {
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

export default ContactCard;
