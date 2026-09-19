import { ImageResponse } from "next/og";
import { BrandSymbol } from "@/components/layout/BrandSymbol";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function Icon() { return new ImageResponse(<div style={{display:"flex", width:"100%", height:"100%", alignItems:"center", justifyContent:"center", background:"#ffffff", padding:"12%"}}><BrandSymbol /></div>, size); }
