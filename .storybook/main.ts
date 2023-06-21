import type {StorybookConfig} from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", '@chakra-ui/storybook-addon'],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  webpackFinal: async config => {
    config.module?.rules?.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    });
    return config;
  }
};

export default config;
