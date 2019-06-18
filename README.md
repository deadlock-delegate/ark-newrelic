# Ark New Relic Plugin

> [New Relic](https://newrelic.com) performance monitoring and management integration for [Ark Core](https://github.com/ArkEcosystem/core).

## Installation

#### For production:

`yarn global add @deadlock-delegate/newrelic`

#### For development:


```bash
cd ~/ark-core/plugins
git clone https://github.com/deadlock-delegate/ark-newrelic
lerna bootstrap
```

### Registration

Open `~/.config/ark-core/<network>/plugins.js` (replace <network> with mainnet, devnet or testnet) and add the following as the first entry.

```js
'@deadlock-delegate/newrelic': {
    enabled: true,
},
```

like so:

```js
module.exports = {
  '@deadlock-delegate/newrelic': {
    enabled: true,
  },  // this is the newly added line
  '@arkecosystem/core-event-emitter': {},
  '@arkecosystem/core-config': {},
  ...
}
```

### Configuration

Open `.env` file that is located at `~/.config/ark-core/<network>/.env` (<network> should be replaced by either mainnet, devnet or testnet) and add the following environment variables:

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
