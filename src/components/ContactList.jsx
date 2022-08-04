import { Box, Typography, Button } from "@mui/material";
import ContactCard from "./ContactCard";
import SearchContacts from "./SearchContacts";

const ContactList = () => {
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
          justifyContent: "space-evenly",
          flexDirection: "row",
          margin: "2em 0 0 4.5em",
        }}
      >
        <ContactCard />
      </Box>
    </>
  );
};

export default ContactList;
