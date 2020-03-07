# tslint-config-firecloud [![Build Status][2]][1]

The TSLint config used within Tobii Cloud Services.

In your project's `tslint.json`

```json
{
  "extends": [
    "tslint-config-firecloud"
  ],
  "rules": {
    "override-some-rule": false
  }
}
```

Optionally, you can run `node_modules/tslint-config-firecloud/npm-install-peer-dependencies`
in order to install the required peer dependencies.

If you want to use an addon, it's as easy as doing this in `.tslint.json`:

```json
{
  "extends": [
    "tslint-config-firecloud",
    "tslint-config-firecloud/configs/codelyzer"
  ],
  "rules": {
    "override-some-rule": false
  }
}
```

and running `npm install --dev codelyzer@^X.X.X`
(take the `X.X.X` version from the Bundles section below)


## Bundles/Addons

Common bundles are not provided at the moment.

These addons require you to install the plugin manually:

- `codelyzer@^5.0.0`: `tslint-config-firecloud/configs/codelyzer`


## License

[UNLICENSE](UNLICENSE)


  [1]: https://travis-ci.com/rokmoln/tslint-config-firecloud
  [2]: https://travis-ci.com/rokmoln/tslint-config-firecloud.svg?branch=master
