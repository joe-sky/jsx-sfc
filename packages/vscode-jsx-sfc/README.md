# vscode-jsx-sfc

Useful editor tools for [jsx-sfc](https://github.com/joe-sky/jsx-sfc).

## Install

`ext install` in Visual Studio Code command line

Search for `jsx-sfc` and click install

## Split Editors development

What is `Split Editors`? This is an interesting feature of a new vscode plugin for Vue called [Volar](https://github.com/johnsoncodehk/volar), you can [install Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) and experience it in Vue projects. Here is a Volar demo:

<p>
  <img alt="volar demo" src="https://user-images.githubusercontent.com/12705724/125753697-6957efee-61ef-4cd3-ab4c-803003a30256.gif" width="800" />
</p>

In the demo, click the "Split Editors" button in the upper right corner to generate 3 sub editors according to the `template`/`style`/`script` code in SFC, and then each editor folds the unrelated code.

However, [vscode-jsx-sfc](https://marketplace.visualstudio.com/items?itemName=joe-sky.vscode-jsx-sfc) can apply the idea of `Split Editors` to React development. It needs to be used with [jsx-sfc](https://github.com/joe-sky/jsx-sfc), here is the demo:

<p>
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/126590775-1aa77a24-1cda-4ac6-a761-04d57b2ddb07.gif" width="800" />
</p>

[See here for more description.](https://github.com/joe-sky/jsx-sfc#split-editors-experience)

### Automatically refold code when saving

When the code syntax is incomplete or there are errors, sometimes the region folding effect will be invalid. But this plugin has the feature of refolding when saving, which can effectively avoid the such problems.

### Automatically increase the editor size after obtaining focus

This gives you more visual space when writing code, here is the demo:

<p>
  <img alt="jsx-sfc demo" src="https://user-images.githubusercontent.com/12705724/130918552-37619be0-11b7-4438-8d23-701a272895bc.gif" width="600" />
</p>

## Options

- Set each split editor to automatically increase the size of the visible area after obtaining the focus. When the value is 0, the original editor size is maintained:

```json
{
  "jsx-sfc.splitEditors.increaseViewSize": 1 // Default value: 0
}
```

- Show/Hide split editors icon:

```json
{
  "jsx-sfc.icon.splitEditors": false // Default value: true
}
```

- Open split editors in group:

```json
{
  "jsx-sfc.splitEditors.inGroup": true // Default value: false
}
```

## Inspiration

Inspired by [Volar](https://github.com/johnsoncodehk/volar).

> Some of the implementation codes refer to Volar, thanks very much for Volar's idea. [Please see here for this part of the code details.](https://github.com/joe-sky/jsx-sfc/blob/main/packages/vscode-jsx-sfc/src/extension.ts)

## License

MIT
