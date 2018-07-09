<template>
    <mor-counter
        :_uiid="uiid"
        :class="[formClass, stateClass]"

        :form-name="formName"
        :form-key="formKey"
        :group="group"
        :default-value="defaultValue"
        :hide-name="hideName"
        :clearable="clearable"
        :step="step"
        :max="max"
        :min="min"
        :formater="formater"
        :parser="parser" 
        :precision="precision"
    >

    <div class="note" v-if="!conf.hideName">{{conf.formName}}</div>

    <div class="counter-wrap">

        <div
            class="sub-step"
            @mousedown="_change(1, -1, true)"
            @mouseup="_stopContinued()"
        >
            <i class="mo-icon mo-icon-sub"></i>
        </div>

        <input
            type="text"

            :value="conf.formater(_toFixed(data.value))"
            :disabled="conf.state === 'disabled' || conf.state === 'readonly'"

            @change="_set(conf.parser($event.target.value))"
        />

        <div
            class="add-step"
            @mousedown="_change(1, 1, true)"
            @mouseup="_stopContinued()"
        >
            <i class="mo-icon mo-icon-add"></i>
        </div>
        
    </div>

    <morning-link v-if="conf.clearable" color="minor" @emit="_clean" class="cleanbtn">清空</morning-link>

    </mor-counter>
</template>
 
<script>
const returnValueFn = value => value;

export default {
    origin : 'Form',
    name : 'counter',
    props : {
        step : {
            type : Number,
            default : 1,
            validator : (value => (value > 0))
        },
        max : {
            type : Number,
            default : Infinity
        },
        min : {
            type : Number,
            default : -Infinity
        },
        formater : {
            type : Function,
            default : returnValueFn
        },
        parser : {
            type : Function,
            default : returnValueFn
        },
        precision : {
            type : [Number, String],
            default : 'auto'
        }
    },
    computed : {
        _conf : function () {

            return {
                step : this.step,
                max : this.max,
                min : this.min,
                formater : this.formater,
                parser : this.parser,
                precision : this.precision
            };

        }
    },
    data : function () {

        return {
            data : {
                continueChange : false,
                continueCount : 0,
                continueTimeout : null
            }
        };

    },
    methods : {
        _valueFilter : function (value) {

            if (isNaN(Number(value))) {

                value = String(value).replace(/[^\d.]/g, '');
                value = value.split('.');

                let decimal = value.pop();

                if (value.length > 0) {
    
                    value = `${value.join('')}.${decimal}`;

                } else {

                    value = decimal;

                }

                value = Number(value) || 0;

            } else {

                value = Number(value) || 0;

            }

            if (value > this.conf.max) {

                value = this.conf.max;

            } else if (value < this.conf.min) {

                value = this.conf.min;

            }

            value = this._toFixed(value);
            
            return Number(value) || 0;

        },
        _stopContinued : function () {

            this.data.continueCount = 0;
            this.data.continueChange = false;
            clearTimeout(this.data.continueTimeout);

        },
        _toFixed : function (value) {

            if (this.conf.precision === 'auto') {

                return value;

            } else if (typeof this.conf.precision === 'number') {

                return value.toFixed(+this.conf.precision);

            }

            return value;

        },
        _change : function (steps = 1, add = 1, continued = false, ignoreReadonly = false) {

            if (this.conf.state === 'disabled') {

                return;

            }

            if (!ignoreReadonly && this.conf.state === 'readonly') {

                return;

            }

            if (isNaN(+steps)) {

                return;

            }

            let num = this.data.value + (add * steps * this.conf.step);

            const nextTimeLv1 = 400;
            const nextTimeLv2 = 50;
            const nextTimeLv3 = 25;
            const lv2UptoLv3Count = 80;

            this._set(num);

            if (continued) {

                let nextTime = nextTimeLv1;

                if (!this.data.continueChange) {

                    nextTime = nextTimeLv1;

                }

                if (this.data.continueCount < lv2UptoLv3Count) {

                    nextTime /= Math.pow(2, Math.ceil(this.data.continueCount / 5));

                    if (nextTime < nextTimeLv2) {

                        nextTime = nextTimeLv2;

                    }

                } else {

                    nextTime = nextTimeLv3;

                }

                this.data.continueChange = true;

                this.data.continueTimeout = setTimeout(() => {

                    this.data.continueCount++;
                    this._change(steps, add, continued);

                }, nextTime);

            }

        },
        add : function (steps = 1) {

            this._change(steps, 1, false, true);

            return this;

        },
        sub : function (steps = 1) {

            this._change(steps, -1, false, true);

            return this;

        }
    },
    created : function () {},
    mounted : function () {}
};
</script>

<style lang="less" src="./index.less"></style>