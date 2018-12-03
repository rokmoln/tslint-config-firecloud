# tslint-config-firecloud [![Build Status][2]][1]

The TSLint config used within Tobii Cloud Services.

In your project's `tslint.json`

```json
{
  "extends": [
    "firecloud"
  ],
  "rules": {
    "override-some-rule": false
  }
}
```

Optionally, you can run `node_modules/tslint-config-firecloud/npm-install-peer-dependencies`
in order to install the required peer dependencies.


## License

[UNLICENSE](UNLICENSE)


  [1]: https://travis-ci.com/tobiipro/tslint-config-firecloud
  [2]: https://travis-ci.com/tobiipro/tslint-config-firecloud.svg?branch=master
