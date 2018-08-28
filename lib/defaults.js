'use strict'

/**
 * This file is part of Ark Core - New Relic.
 *
 * (c) roks0n
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

module.exports = {
  configuration: {
    app_name: process.env.NEW_RELIC_APP_NAME,
    license_key: process.env.NEW_RELIC_LICENSE_KEY
  }
}
