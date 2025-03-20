import { style } from '@vanilla-extract/css';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
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
  marginTop: '1rem',
});
const difTextRow = style({
  display: 'flex',
  gap: '.5rem',
  alignItems: 'flex-end',
});

const spbRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const spbs = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const appSt = {
  bottomBtn,
  container,
  imgRow,
  difTextRow,
  spbRow,
  spbs,
};
