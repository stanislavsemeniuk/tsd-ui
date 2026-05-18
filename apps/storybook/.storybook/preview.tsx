import React, { useState } from "react";
import type { Preview, Decorator } from "@storybook/react";

import "@patternfly/react-core/dist/styles/base.css";

import { ThemeProvider } from "@tsd-ui/core";
import type { ThemeMode } from "@tsd-ui/core";

const WithThemeProvider: Decorator = (Story) => {
  const [mode, setMode] = useState<ThemeMode>("light");
  return (
    <ThemeProvider mode={mode} setMode={setMode}>
      <Story />
    </ThemeProvider>
  );
};

const preview: Preview = {
  decorators: [WithThemeProvider],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
  },
};

export default preview;
