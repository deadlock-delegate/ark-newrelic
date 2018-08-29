# Ark New Relic Plugin

> [New Relic](https://newrelic.com) performance monitoring and management integration for [Ark Core](https://github.com/ArkEcosystem/core).

## Installation

### Clone

```bash
cd ~/ark-core/plugins
git clone https://github.com/deadlock-delegate/ark-newrelic
lerna bootstrap
```

### Registration

Open `~/.ark/config/plugins.js` and add the following as the first entry.

```js
'@deadlock/ark-newrelic': {}
```

like so:

```js
module.exports = {
  '@deadlock/ark-newrelic': {},  // this is the newly added line
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/core-config': {},
  ...
}
```

### Configuration

You must set the following environment variables in the .env file for New Relic to work:

```bash
NEW_RELIC_LICENSE_KEY=yourlicensekeygoeshere
NEW_RELIC_APP_NAME=your-name-of-the-app
NEW_RELIC_NO_CONFIG_FILE=true
```

## Credits

- [roks0n](https://github.com/roks0n)
- [All Contributors](../../../../contributors)

## License

[MIT](LICENSE) © roks0n
