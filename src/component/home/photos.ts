import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string) {
  return `/src/assets/images/Products/${asset}`;
}

const photos: Photo[] = [
  { asset: "img1.webp", width: 1080, height: 780 },
  { asset: "img2.webp", width: 1080, height: 1620 },
  { asset: "img3.webp", width: 1080, height: 720 },
  { asset: "img4.webp", width: 1080, height: 1620 },

  { asset: "img1.webp", width: 1080, height: 1620 },
  { asset: "img2.webp", width: 1080, height: 607 },
  { asset: "img3.webp", width: 1080, height: 720 },
  { asset: "img4.webp", width: 1080, height: 1549 },
].map(({ asset, width, height }) => ({
  src: assetLink(asset),
  width,
  height,
  srcSet: breakpoints.map((breakpoint) => ({
    src: assetLink(asset),
    width: breakpoint,
    height: Math.round((height / width) * breakpoint),
  })),
}));

export default photos;
