import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" gap="1rem">

        {/* MENU BUTTON */}

        <IconButton fontSize="large">
          <MenuOutlinedIcon />
        </IconButton>

        {/* SEARCH BAR*/}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="5px"
        >
          <InputBase
            sx={{ ml: 2, flex: 1, width: 500 }}
            placeholder="Find..."
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>

      {/* ICONS */}

      <Box display="flex" gap="1rem">
        <IconButton>
          <AppsOutlinedIcon />
        </IconButton>

        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
