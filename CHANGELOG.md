# CHANGELOG

## [v1.4.1] 2021.06.28

- 👆 `options` is deprecated, use `static` instead.

## [v1.4.0] 2021.06.17

- 🌟 Add `props` parameter in template function.

## [v1.3.8] 2021.06.07

- 👆 The APIs of `babel-plugin-jsx-sfc` can be exported.

## [v1.3.7] 2021.06.02

- 👆 `originalProps` is deprecated, use `props` instead.

## [v1.3.6] 2021.05.31

- 🌟 Add `createTemplate` API, support both `jsx-sfc` and `use-templates`.

## [v1.3.5] 2021.05.21

- 🐛 Fix the error when `<Template>` is null.

## [v1.3.0] 2021.05.17

- 🌟 Add `options`, `ComponentDataType` API for `jsx-sfc`.
- 🌟 Add `use-templates`.

## [v1.2.0] 2021.04.05

- 🌟 Add `jsx-sfc.macro`.

## [v1.1.2] 2021.04.02

- 👆 Optimize production environment rendering performance.

## [v1.1.1] 2021.03.27

- 🌟 Add `parserPlugins` option for `vite-plugin-jsx-sfc`.

## [v1.1.0] 2021.03.25

- 🌟 Add `originalProps` property for `SFCProps`.
- 🐛 Published the `index.d.ts` for `babel-plugin-jsx-sfc`.

## [v1.0.2] 2021.03.18

- 👆 The parameter type of the export template function by the component is changed to optional.

## [v1.0.1] 2021.03.17

- 👆 Support rendering null value of sub template.

## [v1.0.0] 2021.03.15

- 🤟 The first stable version of `jsx-sfc` released.

## [v1.0.0-alpha.11] 2021.03.05

- 🐛 Fix `ObjectMethod` case for `babel-plugin-jsx-sfc`.

## [v1.0.0-alpha.10] 2021.03.02

- 💥 Change `sfc.createFuncResults` to `sfc.createOptions`.
- 🐛 Fix `sfc.forwardRef` export type in jsx environment.
- 🌟 Auto add displayName on compiled code.

## [v1.0.0-alpha.7] 2021.03.01

- 🐛 Fix type inference in jsx environment.
- 🐛 Add @babel/plugin-transform-react-jsx to `babel-plugin-jsx-sfc` dependencies.

## [v1.0.0-alpha.4] 2021.02.23

- 🌟 `vite-plugin-jsx-sfc` supported Vite v2.

## [v1.0.0-alpha.3] 2021.02.18

- 🌟 Restrict the return value type of multiple templates.

## [v1.0.0-alpha.1] 2021.02.02

- 🌟 Type optimization of internal implementation.
- 💥 Change `SfcComponent#Origin` to `SfcComponent#Component`.
- 💥 Change the second parameter of `sfc` to a function which can be return any extension members.
- 🐛 Fix some type safe features in `strict mode`.
- 🌟 Add `SfcComponent#Template` to render template as react components in jsx.

## [v0.3.4] 2021.01.05

- 🌟 Add `SfcComponent#Origin` to get origin component.

## [v0.3.3] 2021.01.04

- 🌟 Add `vite-plugin-jsx-sfc`, the compiled code can support `React Fast Refresh`(**Currently only support vite v1**).
- 🐛 Fix `utils#getFuncParams` in handling braces.

## [v0.3.2] 2020.12.31

- 🌟 Optimize the `babel-plugin-jsx-sfc` compilation results.

## [v0.3.1] 2020.12.30

- 🌟 Remove unnecessary name property of the main template on multiple templates.
- 🌟 Support no template and style function.
- 🌟 Support export template function from sfc components.
- 💥 Remove name property of the main template.

## [v0.3.0] 2020.12.11

- 🌟 Add `babel-plugin-jsx-sfc`, the compiled code can support `React Fast Refresh`.
- 🌟 Remove `DefineComponent#options#templates` and use `template` instead.

## [v0.2.1] 2020.12.03

- 💥 Reset the data argument position of template function.

## [v0.1.2] 2020.11.11

- 🌟 Add `Template.Data` type.

## [v0.1.1] 2020.11.09

- 🌟 Type safety enhancement for `DefineComponent` type by overriding.

## [v0.1.0] 2020.11.03

- 🌟 The first version of `jsx-sfc` have been completed.
