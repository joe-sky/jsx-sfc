import { transform } from './utils';

const codeConst = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc from 'jsx-sfc';

const App = sfc({
  Component: props => {
    return { firstName: 'joe', styles: props.styles };
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

  render: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
    <Container>
      <div>{connectName(data.firstName, LAST_NAME)}</div>
    </Container>
  ),

  style: () => ({})
});
`;

const codeExportDefault = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

export default sfc({
  Component({ styles }) {
    return { firstName: 'joe', styles };
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

  render: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
    <Container>
      <div>{connectName(data.firstName, LAST_NAME)}</div>
    </Container>
  ),

  style: () => ({})
});
`;

const codeExportConst = `
import React, { Fragment, useState, useEffect } from 'react';
import sfc, { Template } from 'jsx-sfc';

export const App = sfc({
  Component() {
    return { firstName: 'joe' };
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

  render: ({ data, styles: { Container }, constant: { LAST_NAME }, utils: { connectName } }) => (
    <Container>
      <div>{connectName(data.firstName, LAST_NAME)}</div>
    </Container>
  ),

  style: () => ({})
});
`;

const snapshotRedefineProps = `const Sfc_5 = props => {
  props = { ...props, ...$sfcOptions_5 };
  return $sfcOptions_5.render({ firstName: 'joe', styles: props.styles, props: props });
}`;

const snapshotObjectPattern = `const Sfc_5 = __props => {
  const { styles } = { ...__props, ...$sfcOptions_5, props: __props, originalProps: __props };
  return $sfcOptions_5.render({ firstName: 'joe', styles, props: __props });
}`;

const snapshot = `const Sfc_5 = __props => {
  return $sfcOptions_5.render({ firstName: 'joe', props: __props });
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
