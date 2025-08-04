import type { Meta, StoryObj } from "@storybook/react-vite";

// Note: Testing utilities commented out due to React 19 compatibility issue
// import { expect, userEvent, within } from "storybook/test";

import { Page } from "./Page";

const meta = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    user: undefined,
    onLogin: () => console.log("Login clicked"),
    onCreateAccount: () => console.log("Create account clicked"),
  },
};

export const LoggedIn: Story = {
  args: {
    user: { name: "Jane Doe" },
    onLogout: () => console.log("Logout clicked"),
  },
};
