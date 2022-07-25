import { useState } from "react";
import PropTypes from "prop-types";
import { SearchInput, Button, ContainerSearchBar } from "./SearchBar.styled.js";

const SearchBar = ({ onClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClick(searchQuery);
    setSearchQuery("");
  };

  return (
    <ContainerSearchBar onSubmit={handleClick}>
      <SearchInput
        type="text"
        name="searchQuery"
        autoComplete="off"
        autoFocus
        placeholder="Enter ID"
        value={searchQuery}
        onChange={handleInput}
      />
      <Button type="submit" aria-label="find order">
        Find
      </Button>
    </ContainerSearchBar>
  );
};
SearchBar.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default SearchBar;
