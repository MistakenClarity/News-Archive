import { styled } from '@mui/material/styles';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import NorthWestOutlinedIcon from '@mui/icons-material/NorthWestOutlined';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DarkModeButton from './DarkModeButton';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute', '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  }, '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <DarkModeButton sx={{ color: "white" }} />, name: 'Dark Mode' },  // FIX bg
  { icon: <img src="/origami(1).png" />, name: '/news', link: "/news" },
  { icon: <NorthWestOutlinedIcon sx={{ color: "white" }} />, name: '/articles', link: "/news/articles" },
  { icon: <KeyboardDoubleArrowUpOutlinedIcon sx={{ color: "white" }} />, name: '#top', link: "#top" },
];

const ArticleDisplayNavbar = () => {
  return (
    <div className='fixed ml-8 bg-black text-black z-10' >
      <StyledSpeedDial ariaLabel="speedDial" icon={<SpeedDialIcon />} direction={'right'} FabProps={{ sx: { bgcolor: 'black', '&:hover': { bgcolor: 'gray' }, border: "2px solid white" } }}>
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} href={action.link} sx={{ backgroundColor: "black", border: "solid 2px white", '&:hover': { bgcolor: 'gray' } }} />
        ))}
      </StyledSpeedDial>
    </div>

  );
}
export default ArticleDisplayNavbar