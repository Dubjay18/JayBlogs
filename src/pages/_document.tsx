import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ColorModeScript, theme } from "@chakra-ui/react";

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <ColorModeScript
          initialColorMode={theme.config.initialColorMode}
        />
        <NextScript />
      </body>
    </Html>
  );
}
