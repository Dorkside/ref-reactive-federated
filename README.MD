### Versions

- vite-plugin-federation: v1.1.14
- vite: 4.0.4

### Reproduction

Reproduction repo : https://github.com/Dorkside/ref-reactive-federated

### Steps to reproduce

`npm run build:test-vue`
`npm run preview:test-vue`
`npm run dev:ui`

### What is Expected?

Have the ref and reactive variables increment every second

### What is actually happening?

The ref and reactive variables seem to have NO reactivity.

This might be a limitation of the plugin, but it would be greatly appreciated not having to store every variable in pinia.
