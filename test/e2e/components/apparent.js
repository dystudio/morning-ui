import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'apparent';
let docUrl = common.getE2eDocUrl(tagName);
let basicDemo = `[name="开始"] mor-${tagName}`;

let context = {
    tagName,
    basicDemo,
    common
};

test.serial('basic style', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eBasicFnString})`),
            context
        );

    t.plan(1);

    cleanstyle(result.style);
    delete result.style.opacity;

    t.snapshot(result);

});

test.serial('inline', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            display : $('[name="开始"] .inline').css('display')
        }));

    t.plan(1);

    t.snapshot(result);

});

test.serial('inline block', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            display : $('[name="开始"] .inline-block').css('display')
        }));

    t.plan(1);

    t.snapshot(result);

});

test.serial('block', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            display : $('[name="开始"] .block').css('display')
        }));

    t.plan(1);

    t.snapshot(result);

});
