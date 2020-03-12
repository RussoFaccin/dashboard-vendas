<template>
    <div class="counterBox">
        <div class="counterBox__currency" :style="{display: currSymbol ? 'inline-block' : 'none'}">R$</div>
        <div class="counterBox__value">{{valueFormat}}</div>
        <div class="counterBox__percent" :style="{display: percentSymbol ? 'inline-block' : 'none'}">%</div>
    </div>
</template>
<script>
export default {
    name: 'Counter',
    props: {
        currSymbol: {
            type: Boolean,
            default: false
        },
        percentSymbol: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        }
    },
    data() {
        return {
            initValue: this.value,
            isCurrency: false
        }
    },
    filters: {
        numberFormat: function(numEntry) {
            // const numDigits = this.isCurrency ? 2 : 0;
            return Number(Number(numEntry).toFixed(2)).toLocaleString('pt-BR', {minimumFractionDigits: 2});
            // return Number(Number(numEntry).toFixed(2)).toLocaleString('pt-BR');
        }
    },
    computed: {
        valueFormat() {
            if(this.percentSymbol) {
                return Math.round(this.value);
            } else {
                const numDigits = this.currSymbol ? 2 : 0;
            return Number(Number(this.value).toFixed(2)).toLocaleString('pt-BR', {minimumFractionDigits: numDigits});
            }
        }
    },
    beforeCreate() {},
    created() {
        // if(this.percentSymbol) {
        //     this.value = Math.round(this.value);
        // }
        // this.isCurrency = this.currSymbol;
    }
}
</script>
<style scoped>
    .counterBox {
        flex: 1;
        width: 100%;
        font-family: 'Proxima Nova Condensed - Bold';
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--outlineColor);
        color: #FFF;
    }

    .counterBox__currency {
        font-size: 0.5em;
        padding-top: 0.5em;
    }

    .counterBox__currency,
    .counterBox__value {
        display: inline-block;
    }

    .counterBox__percent {
        font-size: 0.7em;
    }
</style>