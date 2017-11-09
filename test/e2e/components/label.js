import test                         from 'ava';
import nightmare                    from 'nightmare';
import cleanstyle                   from '../../helpers/cleanstyle';
import common                       from '../../helpers/common';

const runner = nightmare({
    show : false
});

let tagName = 'label';
let docUrl = `${common.TEST_HOST}/component/${tagName}.html`;
let basicDemo = `[name="开始"] i-${tagName}`;

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
    t.snapshot(result);

});

test.serial('size', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'size',
            [{
                child : '',
                attrs : [
                    'border-radius',
                    'margin',
                    'font-size',
                    'padding'
                ]
            }]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.size.m), JSON.stringify(result.default));

});

test.serial('color', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'color',
            [
                'color',
                'background-color'
            ]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.color.theme), JSON.stringify(result.default));

});

test.serial('state', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(
            eval(`(${common.e2eStatementFnString})`),
            context,
            'state_na',
            [
                'animation-name'
            ]
        );

    t.plan(2);

    t.snapshot(result);
    t.is(JSON.stringify(result.state_na.normal), JSON.stringify(result.default));

});

test.serial('image', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            image : window.getComputedStyle($('[name="开始"] .image img')[0])
        }));

    t.plan(1);

    cleanstyle(result.image);
    t.snapshot(result);

});

test.serial('icon', async t => {

    const result = await runner
        .goto(docUrl)
        .wait(basicDemo)
        .evaluate(() => ({
            icon : window.getComputedStyle($('[name="开始"] .icon .iconfont')[0])
        }));

    t.plan(1);

    cleanstyle(result.icon);
    t.snapshot(result);

});
