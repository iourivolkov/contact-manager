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

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Ethereum from "../assets/images/Ethereum.png";
import Solana from "../assets/images/Solana.png";

const ContactCard = () => {
  return (
    <Card sx={{ maxWidth: 400, marginTop: "5em" }}>
      <CardMedia
        component="img"
        height="120"
        image={Solana}
        alt="chain banner"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Wallet 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          0xF6C01b47B5FF69D58C320031BB3727d70E6E7CcD
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
    </Card>
  );
};

export default ContactCard;
