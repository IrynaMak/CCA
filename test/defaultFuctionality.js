describe('Default counter functionality', function () {

    describe('Calculation works', function () {

        it('TC-021 Subtract 1 gives -1', function () {
            browser.url('');
            browser.pause(2000);
            const button = $$('.btn-black')[0];
            button.click();
            const countValue = $('.badge').getText();
            expect(countValue).toEqual('-1');
        })

        it('TC-022 Add 3 gives 2', function () {
            browser.pause(2000);
            const button = $$('.btn-black')[5];
            button.click();
            const countValue = $('.badge').getText();
            expect(countValue).toEqual('2');
        })

    });

    const selectorCnt = require('./../data/selectors.json').counter;
    const expectedDCF = require('./../data/expected.json').defaultCounterFunctionality;
    describe('Default counter functionality', function () {
        it('TC-040 Subtract 1 gives -1', function () {
            browser.url('');
            const button = $$(selectorCnt.blackBtn)[0];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC040);
        })

        it('TC-041 Add 3 gives 2', function () {
            const button = $$(selectorCnt.blackBtn)[5];
            button.click();
            const countValue = $(selectorCnt.countValue).getText();
            expect(countValue).toEqual(expectedDCF.countValueTC041);
        })

    });