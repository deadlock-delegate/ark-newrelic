'use strict'

/**
 * This file is part of Ark Core - New Relic.
 *
 * (c) roks0n
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const newrelic = require('newrelic')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
    pkg: require('../package.json'),
    alias: 'deadlock:newrelic',
    async register () {
        console.log('[New Relic] Starting up...')
        return newrelic
    }
}
