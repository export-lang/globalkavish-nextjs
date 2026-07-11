/**
 * Real tile designs supplied via the Kavish Global Google Drive folder
 * (publicly shared, "anyone with link" — verified). Images are served from
 * Google's CDN; names, sizes and finishes come from the folder titles only.
 */
export interface TileDesign {
  slug: string;
  name: string;
  size: string;
  finish?: string;
  imageIds: string[];
}

export function driveImageUrl(id: string, width = 1600) {
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}

export const tileDesigns: TileDesign[] = [
  {
    slug: "gaios",
    name: "Gaios",
    size: "600x600",
    imageIds: ["1RTVx9R2Xvz2K9pNz9aFuGbSt9uMpMDPE"],
  },
  {
    slug: "armani-rich-bianco",
    name: "Armani Rich Bianco",
    size: "600x1200",
    imageIds: ["1TEIFoTuwMS8MD6acppbdO1_cmwb3oBg3"],
  },
  {
    slug: "adobe-emprador",
    name: "Adobe Emprador",
    size: "600x1200",
    finish: "High Gloss",
    imageIds: ["16qNJ37K1wWTvPDEnZfN1xb6UzfAs6r_z"],
  },
  {
    slug: "rome-black",
    name: "Rome Black",
    size: "600x1200",
    finish: "High Gloss",
    imageIds: ["13aqbYNt5Zs-9O21DdxJ75Sw_E6zZLqxw", "1-Ccmkk7ivTQr9g2srRtQojS9lQHb1Xk8"],
  },
  {
    slug: "electra-almond-beige",
    name: "Electra Almond Beige",
    size: "800x800",
    imageIds: [
      "1R7Y2eQtRL7b01nJPbeXd2tgtm1Nm1oUY",
      "15vJfp-JkCIV9ZKZTHD8d_GIjPKzk9z8D",
      "18J3TeJDOqOZtSQijwuM5c4MNc2DYNrt_",
      "1f4_xIDUjV81pXate-lr8kK_bxDNEt9Gb",
      "1-wufNO5mN3CfiLOQ3Q965XG4CohrwZcn",
      "1RxJDmNzcfiQqiJ03ZoMRoo4aDF487rBb",
      "1aRR78iYREIyUfKEn0GD-dWmC5Uq7Bslt",
      "1onbHZBiXvNohDCYYhM6cpyMDA1__2UMi",
      "1l1iyZ101-MjJEFZdFsaYqOgPb_hDH0f-",
      "1Ebfqm8QiCieGUoSuJ29gvq7iYtRNs7jy",
    ],
  },
];
