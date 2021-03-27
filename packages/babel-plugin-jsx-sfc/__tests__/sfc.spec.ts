import { transform } from './utils';

const codeConst = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

const App = sfc(
  {
    template: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component: props => {
      return { firstName: 'joe', styles: props.styles };
    },

    style: () => ({})
  },
  {
    constant: {
      LAST_NAME: 'sky'
    },

    utils: {
      connectName: (firstName: string, lastName: string) => firstName + lastName
    }
  }
);
`;

const codeExportDefault = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

export default sfc(
  {
    template: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component({ styles }) {
      return { firstName: 'joe', styles };
    },

    style: () => ({})
  },
  {
    constant: {
      LAST_NAME: 'sky'
    },

    utils: {
      connectName: (firstName: string, lastName: string) => firstName + lastName
    }
  }
);
`;

const codeExportConst = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

export const App = sfc(
  {
    template: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
      <Container>
        <div>{connectName(data.firstName, LAST_NAME)}</div>
      </Container>
    ),

    Component() {
      return { firstName: 'joe' };
    },

    style: () => ({})
  },
  {
    constant: {
      LAST_NAME: 'sky'
    },

    utils: {
      connectName: (firstName: string, lastName: string) => firstName + lastName
    }
  }
);
`;

const snapshotRedefineProps = `const Sfc_5 = props => {
  props = { ...props, ...$sfcOptions_5 };
  return $sfcOptions_5.template({ firstName: 'joe', styles: props.styles });
}`;

const snapshotObjectPattern = `const Sfc_5 = props => {
  const { styles } = { ...props, ...$sfcOptions_5, originalProps: props };
  return $sfcOptions_5.template({ firstName: 'joe', styles });
}`;

const snapshot = `const Sfc_5 = () => {
  return $sfcOptions_5.template({ firstName: 'joe' });
}`;

const snapshotDisplayName = `Sfc_5.displayName = 'App'`;

describe('basic', function() {
  const compiledConst = transform(codeConst);
  //console.log(compiledConst);

  it('const', () => {
    expect(compiledConst).toContain(snapshotRedefineProps);
    expect(compiledConst).toContain(snapshotDisplayName);
  });

  const compiledExportDefault = transform(codeExportDefault);
  //console.log(compiledExportDefault);

  it('export default', () => {
    expect(compiledExportDefault).toContain(snapshotObjectPattern);
  });

  const compiledExportConst = transform(codeExportConst);
  //console.log(compiledExportConst);

  it('export const', () => {
    expect(compiledExportConst).toContain(snapshot);
    expect(compiledExportConst).toContain(snapshotDisplayName);
  });
});
