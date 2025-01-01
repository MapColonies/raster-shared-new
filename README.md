# ts-npm-package-boilerplate

After cloning this template, please do the following:
1. insert secrets to repo secrets for the github actions.
2. replace every string "ts-npm-package-boilerplate" with your package name.

```
raster-shared
├─ .git
├─ CHANGELOG.md
├─ README.md
├─ commitlint.config.js
├─ package-lock.json
├─ package.json
├─ src
│  ├─ constants
│  │  ├─ core
│  │  │  └─ coreConstants.ts
│  │  └─ ingestion
│  │     └─ ingestionConstants.ts
│  ├─ index.ts
│  ├─ types
│  │  ├─ core
│  │  │  └─ validation.type.ts
│  │  └─ ingestion
│  │     └─ polygonParts.type.ts
│  └─ zod
│     ├─ core
│     │  ├─ geo.schema.ts
│     │  ├─ job.schema.ts
│     │  └─ task.schema.ts
│     ├─ export
│     └─ ingestion
│        ├─ additionalParams.schema.ts
│        ├─ ingestion.schema.ts
│        ├─ inputFiles.schema.ts
│        ├─ metadata.schema.ts
│        └─ polygonParts.schema.ts
├─ tests
│  ├─ configurations
│  │  ├─ jest.config.js
│  │  └─ jest.setup.js
│  └─ some-test.spec.ts
├─ tsconfig.build.json
├─ tsconfig.json
├─ tsconfig.lint.json
└─ typedoc.json

```