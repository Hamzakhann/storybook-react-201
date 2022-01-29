import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: { onClick: { action: "clicked" } }
};

// export const Primary  = <Button colorScheme={'cyan'} >Hello World</Button>
const Template = (args) => <Button {...args} />;

export const Success = Template.bind({});
Success.args = {
  // colorScheme:'blue',
    variantColor: 'green',
  children: "Success"
};

export const Danger = Template.bind({});
Danger.args = {
  variantColor: "red",
  children: "Danger"
};
