import { Paper, List, ListItem } from "@mui/material";

interface SearchDropdownProps<T> {
  items: T[];
  onSelect: (item: T) => void;
  renderItem: (item: T) => React.ReactNode;
}

const SearchDropdown = <T,>({
  items,
  onSelect,
  renderItem,
}: SearchDropdownProps<T>) => {
  return (
    <Paper
      sx={{
        position: "absolute",
        top: "100%",
        mt: "5px",
        width: "100%",
        zIndex: 9999,
        background: "#fff",
        borderRadius: 1,
        boxShadow: 4,
        maxHeight: 300,
        overflowY: "auto",
      }}
    >
      <List>
        {items.map((item, index) => (
          <ListItem key={index} onClick={() => onSelect(item)}>
            {renderItem(item)}
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default SearchDropdown;
