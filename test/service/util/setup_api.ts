'use strict'

/**
 * Test for utilService.setupApi
 */
import * as utilService from '../../../lib/service/util'

describe('lib/service/util#setupApi', () => {

    it('OK', async () => {
        console.log(__dirname)
        const result = await utilService.setupApi(__dirname)
        console.log(result)
    })
})
