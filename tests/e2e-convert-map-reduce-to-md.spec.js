'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const fsp = require('fs').promises;
const { executeCliSync } = require('../test-utils');

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/faq/**/*.md\' --filename \'SUMMARY\'"', function () {
    let result;

    beforeEach(function() {
        result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/faq/**/*.md', '--filename', 'SUMMARY']);
        expect(result.stdout).to.include('SUMMARY.md');
    });

    it('should output a final markdown file with a content equal to tests/expected-files/SUMMARY.md content', async () => {
        const results = await Promise.all([
            fsp.readFile('SUMMARY.md', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/SUMMARY.md', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);
    });

    afterEach(function() {
        fs.unlinkSync('SUMMARY.md');
    });
});
