import { keyframes, style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const imgRow = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

const imgRowText = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const banner = style({
  padding: '8px 12px',
  backgroundColor: '#F3F4F5',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '6px',
});

const bottomItems = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const btmContent = style({
  padding: 0,
});

const boxGreen = style({
  backgroundColor: '#E9F7D9',
  borderRadius: '12px',
  padding: '.5rem 1rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

const rotate = keyframes({
  '100%': { transform: 'rotate(360deg)' },
});

const prixClipFix = keyframes({
  '0%': { clipPath: 'polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)' },
  '25%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)' },
  '50%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)' },
  '75%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)' },
  '100%': { clipPath: 'polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)' },
});

export const loader = style({
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  position: 'relative',
  animation: `${rotate} 1s linear infinite`,
  ':before': {
    content: "''",
    boxSizing: 'border-box',
    position: 'absolute',
    inset: '0px',
    borderRadius: '50%',
    border: '3px solid #fff',
    animation: `${prixClipFix} 2s linear infinite`,
  },
});

export const bsSt = {
  bottomBtn,
  container,
  imgRow,
  imgRowText,
  banner,
  bottomItems,
  btmContent,
  boxGreen,
  loader,
};
