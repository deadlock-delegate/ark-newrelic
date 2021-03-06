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
const defaults = require('./defaults')

/**
 * The struct used by the plugin container.
 * @type {Object}
 */
exports.plugin = {
    pkg: require('../package.json'),
    defaults,
    alias: 'deadlock:newrelic',
    async register (container, options) {
        if (!options.enabled) {
            return
        }
        console.log('[New Relic] started')
        return newrelic
    }
}
