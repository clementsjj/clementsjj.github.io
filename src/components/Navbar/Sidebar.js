import React, { Component } from "react";
import {
  Button,
  SideSheet,
  Paragraph,
  Pane,
  Heading,
  Tablist,
  Tab,
  Card
} from "evergreen-ui";

export default class Sidebar extends Component {
    render(){
        return (
            <SideSheet>
        <Pane zIndex={1} flexShrink={0} elevation={0}>
            <Pane padding={16} borderBottom="muted" backgroundColor="#f3f6f2">
              <Heading size={600}>Title of Something</Heading>
              <Paragraph size={400} color="muted">
                Some text or Something.
              </Paragraph>
            </Pane>

            <Pane display="flex" padding={8} backgroundColor="#e5eae5">
              
            </Pane>
          </Pane>

          <Pane flex="1" padding={16}>
            
            <Card
              backgroundColor="#f3f6f2"
              elevation={0}
              height={240}
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Paragraph>Hello.</Paragraph>
            </Card>
          </Pane>
          </SideSheet>
    )
    }
}