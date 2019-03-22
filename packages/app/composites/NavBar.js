import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { color } from '../shared/constants';

import Text from '../components/Text';
import Link from '../components/Link';
import Grid from '../components/Grid';
import GridCell from '../components/GridCell';

import IconLogo from '../icons/IconLogo';
import IconStar from '../icons/IconStar';
import IconGithub from '../icons/IconGithub';

const Header = styled.header`
  padding: 15px 25px;
  background: ${color.purple};
  border-bottom: 2px solid ${color.black};
`;

const TextLogo = styled(Text)`
  margin: 0 0 0 7px;
`;

const TextStar = styled(Text)`
  margin: 0 5px 0 7px;
`;

function NavBar({ variant }) {
  return (
    <Header variant={variant}>
      <Grid columns="auto auto">
        <GridCell>
          <Link href="/">
            <IconLogo />
            <TextLogo fontWeight="bold">SVG 2 JSX</TextLogo>
          </Link>
        </GridCell>
        <GridCell>
          <Link href="https://github.com/balajmarius/svg2jsx" target="_blank">
            <IconStar />
            <TextStar>Star on</TextStar>
            <IconGithub />
          </Link>
        </GridCell>
      </Grid>
    </Header>
  );
}

NavBar.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default NavBar;
