import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const img1="https://i.ibb.co/ydDXm22/p-1.jpg"
const img2="https://i.ibb.co/z4XRZyf/p-2.jpg"
const img3="https://i.ibb.co/LtJWVdF/p-3.jpg"
const img4="https://i.ibb.co/yyPNT06/p-4.jpg"
const img5="https://i.ibb.co/Y04nmk3/p-5.jpg"
const img6="https://i.ibb.co/nR2YCnk/p-6.jpg"
const img7="https://i.ibb.co/4PB7qMM/p-7.jpg"
const img8="https://i.ibb.co/chLhFnM/p-8.jpg"


const photos: Photo[] = [
  { asset: img1, width: 1080, height: 1200 },
  { asset: img5, width: 1080, height: 720 },
  { asset: img7, width: 1080, height: 1320 },
  { asset: img6, width: 1080, height: 1049 },
  { asset: img4, width: 1080, height: 1320 },
  { asset: img8, width: 1080, height: 1200 },
  { asset: img2, width: 1080, height: 1420 },
  { asset: img3, width: 1080, height: 1250 },
].map(({ asset, width, height }) => ({
  src: asset,
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: asset,
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default photos;
