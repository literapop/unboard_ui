import { Card } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleMouseEnter = this._handleMouseEnter.bind(this);
    this.handleMouseLeave = this._handleMouseLeave.bind(this);
  }
  _handleMouseEnter() {
    this.setState(() => ({ hovered: true }));
  }
  _handleMouseLeave() {
    this.setState(() => ({ hovered: false }));
  }
  render() {
    return (
      <Box maxWidth={236} padding={2} column={12}>
        <Card
          image={
            <Avatar
              name="James Jones"
              src="/gestalt/static/media/james.04b042a6.jpg"
            />
          }
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <Text align="center" bold size="xl">
            <Link href="https://pinterest.com">
              <Box paddingX={3} paddingY={2}>
                James Jones
              </Box>
            </Link>
          </Text>
          <Button
            accessibilityLabel="Follow James Jones"
            color="red"
            text="Follow"
          />
        </Card>
      </Box>
    );
  }
}

export default Card;