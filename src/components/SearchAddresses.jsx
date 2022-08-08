import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SearchAddresses = ({ walletAddresses, setAddresses }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const filterResults = (e) => {
    e.preventDefault();

    const filteredResults = walletAddresses.filter((address) => {
      return (
        address.name === searchInput ||
        address.chain === searchInput ||
        address.walletAddress === searchInput
      );
    });
    setAddresses(filteredResults);
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
        borderRadius: "10",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontFamily: "Futura" }}
        placeholder="Search addresses.."
        onChange={handleSearchInput}
        value={searchInput}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={filterResults}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchAddresses;
