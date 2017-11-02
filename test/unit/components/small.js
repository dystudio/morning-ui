import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import small                        from '../../../src/lib/components/small/index.vue';

const name = 'small';

test('base : component snapshot', async t => {

    const vm = new Vue(small).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(small).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(small.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(small).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `i-${name}`.toUpperCase());

});
