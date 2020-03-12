<template>
    <div class="loadingDialog">
        <div class="loadingDialog__scrim">
            <img src="img/spinner.svg" alt="" class="loadingDialog__spinner">
        </div>
    </div>
</template>
<script>
export default {
    name: 'LoadingDialog',
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
            initValue: this.value
        }
    },
    filters: {
        numberFormat: function(numEntry) {
            return Number(numEntry.toFixed(2)).toLocaleString("pt-BR");
        }
    },
    beforeCreate() {},
}
</script>
<style scoped>
    .loadingDialog {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        display: flex;
        justify-content: center;
        pointer-events: none;
    }

    .loadingDialog__spinner {
        position: absolute;
        width: 7.5vmin;
        top: 8.35vmin;
        animation: spin 0.5s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>