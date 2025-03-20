import { style } from '@vanilla-extract/css';

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

export const bsSt = {
  bottomBtn,
  container,
  imgRow,
  imgRowText,
  banner,
  bottomItems,
  btmContent,
};
