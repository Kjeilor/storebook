import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./styles/MenuBtn.scss";

function MenuBtn() {
  return (
    <div>
      <div className="fxd-btn" id="toggle">
        <MenuOutlinedIcon />
      </div>
    </div>
  );
}

export default MenuBtn;
