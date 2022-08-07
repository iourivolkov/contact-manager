import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchAddresses = ({ walletAddresses, setAddresses }) => {
  const handleSearchAddress = (walletType) => {
    const searchResults = walletAddresses?.filter((address) => {
      return address.name === walletType;
    });
    setAddresses(searchResults);
  };
  return (
    <Paper
      component="form"
      elevation={0}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 300,
        bgcolor: "#f0f0f0",
        borderRadius: "0",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontFamily: "Futura" }}
        placeholder="Search addresses.."
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onSubmit={() => {
          handleSearchAddress(walletAddresses.name);
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchAddresses;
