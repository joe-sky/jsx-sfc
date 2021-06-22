import logo from './logo.svg';
import './i18n/config';
import { useTranslation } from 'react-i18next';
import sfc from 'jsx-sfc';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { locales } from './utils';

const App = sfc({
  template: ({ data, styles: { Wrapper, ...styles } }) => (
    <Wrapper>
      <header className="App-header">
        <img src={logo} css={styles.appLogo} alt="logo" />
        <select value={data.i18n.language} onChange={data.onSelectChange}>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
        <h2>{data.t('title')}</h2>
        <p>{data.t('description.part1')}</p>
        <p>{data.t('description.part2')}</p>
        <p>{data.t('description.part3')}</p>
      </header>
    </Wrapper>
  ),

  Component() {
    const { t, i18n } = useTranslation();

    return {
      t,
      i18n,
      onSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        i18n.changeLanguage(e.target.value);
      }
    };
  },

  options: locales({
    en: {
      title: 'Welcome to react using react-i18next and typescript 4.1',
      description: {
        part1: 'This is an example without namespaces.',
        part2:
          'In order to infer the appropriate type for t function, you should use type augmentation to override the Resources type.',
        part3: 'Check out the @types/react-i18next to see an example.'
      }
    },
    ja: {
      title: 'typescript 4.1 環境下で react-i18next を使用することを歓迎します',
      description: {
        part1: 'これは namespace を使用していない例である。',
        part2: 't 関数のタイプを推定するためには、タイプ拡張を使用してリソースタイプを書き換えるべきである。',
        part3: '@types/react-i18next で関連例を確認してください。'
      }
    }
  }),

  styles: {
    Wrapper: styled.div`
      text-align: center;

      @media (prefers-reduced-motion: no-preference) {
        .App-logo {
          animation: App-logo-spin infinite 20s linear;
        }
      }

      .App-header {
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
      }

      .App-link {
        color: #61dafb;
      }

      @keyframes App-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,

    appLogo: css`
      height: 40vmin;
      pointer-events: none;
    `
  }
});

export default App;
