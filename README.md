# FileSafe Embed

This is the reusable UI library that is part of the larger FileSafe system. It uses FileSafeJS to build a UI for managing files, integrations, and keys. FileSafe Embed is not meant to be used in isolation, but is instead meant to be embedded into a final wrapper. For example, the Bold Editor and FileSafe Extension Bar use this library.

## Setup

Run `npm install` for dependencies and then `npm run build`. Conduct further testing in the Bold Editor by following the instructions there to load FileSafe Embed. Remember to build both repos, `npm run build` in FileSafe Embed and `npm run watch` in Bold Editor to see any changes.