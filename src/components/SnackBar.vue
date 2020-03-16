<template>
    <div class="snackBar">
        <div class="snackBar__surface">
            <div class="snackBar__label">{{message}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SnackBar',
    props : {
        message: {
            type: String,
            default: 'Message'
        },
        duration: {
            type: Number,
            default: 1
        }
    }
,
mounted() {
    // Test
    // this.$el.setAttribute('style', `--dismissDelay: ${this.duration}s`);
},
methods: {
    show() {
        this.$el.classList.add('animShow');
        // dismiss
        setTimeout(this.dismiss, (this.duration * 1000));
    },
    dismiss() {
        this.$el.classList.remove('animShow');
    }
}
}
</script>
<style scoped>
    .snackBar {
        display: block;
        width: calc(100% - 20px);
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.75);
        padding: 10px;
        color: #FFF;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 5px;
        margin: 10px auto;
        font-family: sans-serif;
        font-weight: lighter;
        transition: all 0.5s ease-in;
        opacity: 0;
        /* animation: dismiss 1s ease-in 1s forwards; */
    }

    .animShow {
        opacity: 1;
        /* animation: show 0.5s ease-in forwards,
                   dismiss 0.5s ease-in var(--dismissDelay, 3s) forwards; */
            animation: show 0.5s ease-in forwards;
    }

    @keyframes show {
        0% {
            transform: translateX(-50%) translateY(100%);
        }
        50% {
            transform: translateX(-50%) translateY(-40%);
        }
        100% {
            transform: translateX(-50%) translateY(0%);
        }
    }

    @keyframes dismiss {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>