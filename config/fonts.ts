import { Montserrat as FontMono, Poppins as FontSans } from 'next/font/google';
export const fontSans = FontSans({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
})
