import { Oswald, Poppins } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const oswald = Oswald({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-oswald",
    weight: ["200", "300", "400", "500", "600", "700"],
});