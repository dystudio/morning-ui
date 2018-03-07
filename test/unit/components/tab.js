import test                         from 'ava';
import snapshot                     from '../../helpers/snapshot';
import Vue                          from 'vue/dist/vue.common.js';
import tab                          from '../../../src/lib/components/tab/index.vue';

const name = 'tab';
const component = window.morning._origin.UI.extend(tab);

test('base : component snapshot', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);
    
    snapshot(t, vm);

});

test('base : init component', async t => {

    const vm = new Vue(component).$mount();

    t.plan(2);

    t.is(vm.uiid, 2);
    t.is(component.options.name, name);

});

test('base : component tag name is t-*', async t => {

    const vm = new Vue(component).$mount();

    t.plan(1);

    t.is(vm.$el.tagName, `mor-${name}`.toUpperCase());

});

test.only('slot is dynamic', async t => {

    const vm = new Vue({
        template : `
<ui-tab>
    <div :slot="scope.name" v-for="scope in scopes">
        CONTENT : {{scope.name}}
    </div>
</ui-tab>
        `,
        data : {
            scopes : [{
                name : 'first'
            }, {
                name : 'second'
            }, {
                name : 'third'
            }]
        },
        components : {
            'ui-teb' : component
        }
    });

    vm.$mount();

    t.plan(3);

    Vue.nextTick(() => {

        t.is(vm.$el.innerHTML, `<ul><li name="first" class=" current">first</li><li name="second">second</li><li name="third">third</li></ul><div class="contents"><div name="first" class="item current"><div>
        CONTENT : first
    </div></div><div name="second" class="item"><div>
        CONTENT : second
    </div></div><div name="third" class="item"><div>
        CONTENT : third
    </div></div></div>`);

        vm.scopes = [{
            name : '4th'
        }, {
            name : '5th'
        }];

        Vue.nextTick(() => {

            t.is(vm.$el.innerHTML, `<ul><li name="4th" class=" current">4th</li><li name="5th">5th</li></ul><div class="contents"><div name="4th" class="item current"><div>
            CONTENT : 4th
    </div></div><div name="5th" class="item"><div>
        CONTENT : 5th
    </div></div></div>`);

            vm.scopes.pop();
            vm.scopes.pop();
            vm.scopes.push({
                name : '6th'
            });

            Vue.nextTick(() => {

                t.is(vm.$el.innerHTML, `<ul><li name="6th" class=" current">6th</li></ul><div class="contents"><div name="6th" class="item current"><div>
                CONTENT : 6th
    </div></div></div>`);
            
            });

        });

    });

});