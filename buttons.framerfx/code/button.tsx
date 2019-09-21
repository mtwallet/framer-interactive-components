import * as React from "react";
import * as IC from "interactive-components";
import { ControlType, PropertyControls } from "framer";

type Props = IC.Props & {
  width: number;
  height: number;
};

export class Button extends React.Component<Props> {
  render() {
    return <IC.Button {...this.props} />;
  }

  static defaultProps: Props = {
    width: 140,
    height: 48,
    text: "Button",
    m: 0
  };

  static propertyControls: PropertyControls<Props> = {
    text: { type: ControlType.String, title: "Text" }
  };
}
