import {
  Archivo,
  Instrument_Sans,
  IBM_Plex_Mono,
  Noto_Serif_TC,
} from "next/font/google";

export const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const notoSerifTC = Noto_Serif_TC({
  weight: ["700", "900"],
  variable: "--font-noto-serif-tc",
  display: "swap",
  preload: false,
});

export const fontVariables = [archivo, instrumentSans, ibmPlexMono, notoSerifTC]
  .map((font) => font.variable)
  .join(" ");
