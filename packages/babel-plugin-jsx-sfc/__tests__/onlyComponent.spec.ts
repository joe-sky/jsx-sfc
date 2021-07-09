import { transform } from './utils';

const codeConst = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc from 'jsx-sfc';

const App = sfc({
  Component: ({ styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => {
    return (
      <Container>
        <div>{connectName('joe', LAST_NAME)}</div>
      </Container>
    );
  },

  static: () => {
    return {
      constant: {
        LAST_NAME: 'sky'
      },
  
      utils: {
        connectName: (firstName: string, lastName: string) => firstName + lastName
      }
    };
  },

  style: () => ({})
});
`;

const codeExportDefault = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

export default sfc({
  Component({ styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) {
    return (
      <Container>
        <div>{connectName('joe', LAST_NAME)}</div>
      </Container>
    );
  },

  static: () => {
    return {
      constant: {
        LAST_NAME: 'sky'
      },
  
      utils: {
        connectName: (firstName: string, lastName: string) => firstName + lastName
      }
    };
  },

  style: () => ({})
});
`;

const codeExportConst = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

export const App = sfc({
  Component({ styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) {
    return (
      <Container>
        <div>{connectName('joe', LAST_NAME)}</div>
      </Container>
    );
  },

  static: () => {
    return {
      constant: {
        LAST_NAME: 'sky'
      },
  
      utils: {
        connectName: (firstName: string, lastName: string) => firstName + lastName
      }
    };
  },

  style: () => ({})
});
`;

const snapshotRedefineProps = `const Sfc_5 = __props => {
  const {
    styles: { Container },
    constant: { LAST_NAME },
    utils: { connectName }
  } = { ...__props, ...$sfcOptions_5, props: __props, originalProps: __props };
  return (
    <Container>
      <div>{connectName('joe', LAST_NAME)}</div>
    </Container>
  );
}`;

const snapshotObjectPattern = `const Sfc_5 = __props => {
  const {
    styles: { Container },
    constant: { LAST_NAME },
    utils: { connectName }
  } = { ...__props, ...$sfcOptions_5, props: __props, originalProps: __props };
  return (
    <Container>
      <div>{connectName('joe', LAST_NAME)}</div>
    </Container>
  );
}`;

const snapshot = `const Sfc_5 = __props => {
  const {
    styles: { Container },
    constant: { LAST_NAME },
    utils: { connectName }
  } = { ...__props, ...$sfcOptions_5, props: __props, originalProps: __props };
  return (
    <Container>
      <div>{connectName('joe', LAST_NAME)}</div>
    </Container>
  );
};`;

const snapshotDisplayName = `Sfc_5.displayName = 'App'`;

describe('only Component', function() {
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
