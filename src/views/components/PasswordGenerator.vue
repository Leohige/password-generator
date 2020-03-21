<template>
    <section class="section section-components pb-0" id="section-components">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <!-- Basic elements -->
                    <h1 class="text-center text-primary">
                        <span>Generate a secure password</span>
                    </h1>
                    <h5 class="mb-5 text-center">
                        <span>Use our online password generator to instantly create a secure, random password.</span>
                    </h5>

                    <card shadow class="col-12 col-lg-10 offset-lg-1">
                        <div class="row">
                            <div class="col-7 col-sm-8 col-md-9 col-lg-9 col-xl-10 align-self-center">
                                <h1 class="text-truncate" id="password">{{ password }}</h1>
                            </div>
                            <div class="col-5 col-sm-4 col-md-3 col-lg-3 col-xl-2 align-self-center text-right">
                                <a href="#" class="text-default" @click.prevent v-clipboard:copy="password" title="Copy">
                                    <i class="fa fa-clone fa-2x mr-3"></i>
                                </a>
                                <a href="#" class="text-default" @click.prevent="newPassword" title="Generate">
                                    <i class="fa fa-refresh fa-2x mr-3"></i>
                                </a>
                            </div>
                        </div>
                        <base-progress :type="passwordStrengthType" :value="passwordStrengthValue"></base-progress>
                    </card>

                    <card shadow class="col-lg-10 offset-lg-1 mt-4 mb-5">
                        <h3 class="mt-2 mb-4">Customize your password</h3>

                        <div class="row">
                            <div class="col-12 col-md-6">
                                <h6 class="mb-4">Password length</h6>
                                <div class="row">
                                    <div class="col-4 col-sm-3">
                                        <input
                                            v-model="passwordLength"
                                            type="number"
                                            step="1"
                                            min="1"
                                            max="50"
                                            class="form-control text-center"
                                            @input="changePasswordLength">
                                    </div>
                                    <div class="col-8 col-sm-9 align-self-center">
                                        <base-slider v-model="passwordLength" :range="{min: 1, max: 50}"></base-slider>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-md-6">
                                <div class="row pt-4">
                                    <div class="col-6">
                                        <base-checkbox class="mb-3" v-model="uppercase" :disabled="!allowDisableUppercase">
                                            Uppercase
                                        </base-checkbox>
                                        <base-checkbox class="mb-3" v-model="lowercase" :disabled="!allowDisableLowercase">
                                            Lowercase
                                        </base-checkbox>
                                    </div>
                                    <div class="col-6">
                                        <base-checkbox class="mb-3" v-model="numbers" :disabled="!allowDisableNumbers">
                                            Numbers
                                        </base-checkbox>
                                        <base-checkbox class="mb-3" v-model="symbols" :disabled="!allowDisableSymbols">
                                            Symbols
                                        </base-checkbox>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
export default {
    data() {
        return {
            password: null,
            passwordLength: 16,
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: true,
            passwordStrengthValue: 100,
            passwordStrengthType: "success"
        }
    },
    computed: {
        allowDisableUppercase() {
            return !(!this.lowercase && !this.numbers && !this.symbols);
        },
        allowDisableLowercase() {
            return !(!this.uppercase && !this.numbers && !this.symbols);
        },
        allowDisableNumbers() {
            return !(!this.lowercase && !this.uppercase && !this.symbols);
        },
        allowDisableSymbols() {
            return !(!this.lowercase && !this.uppercase && !this.numbers);
        }
    },
    methods: {
        newPassword() {
            this.password = this.generatePassword(this.passwordLength)
        },
        generatePassword(length) {
            const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            const lowercase = "abcdefghijklmnopqrstuvwxyz"
            const numbers = "1234567890"
            const symbols = "!@#$%^&*()-+<>[]{}\/;,."
            let chars = ""

            if (this.uppercase)
                chars += uppercase
            if (this.lowercase) {
                chars += lowercase
            }
            if (this.numbers) {
                chars += numbers
            }
            if (this.symbols) {
                chars += symbols
            }

            let pass = ""
            for (var x = 0; x < length; x++) {
                var i = Math.floor(Math.random() * chars.length)
                pass += chars.charAt(i)
            }
            return pass
        },
        changePasswordLength(e) {
            let length = e.target.value
            if (!isNaN(parseInt(length)) && isFinite(length)) {
                if (length < 0 || length > 50) {
                    length = 1
                }

                this.passwordLength = Math.round(length)
            }
        },
        updatePasswordStrength() {
            let passwordStrengthValue = (this.passwordLength / 16) * 100

            this.passwordStrengthValue = (passwordStrengthValue > 100) ? 100 : passwordStrengthValue

            if (this.passwordLength > 12) {
                this.passwordStrengthType = "success"
                return
            }

            if (this.passwordLength > 5) {
                this.passwordStrengthType = "warning"
                return
            }

            if (this.passwordLength > 0) {
                this.passwordStrengthType = "danger"
                return
            }
        }
    },
    filters: {
        toInteger(value) {
            return parseInt(value)
        }
    },
    mounted() {
        this.newPassword()
    },
    watch: {
        passwordLength() {
            this.newPassword()
            this.updatePasswordStrength()
        },
        uppercase() {
            this.newPassword()
        },
        lowercase() {
            this.newPassword()
        },
        numbers() {
            this.newPassword()
        },
        symbols() {
            this.newPassword()
        }
    }
};
</script>

<style>
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

    /* Firefox */
    input[type=number] {
    -moz-appearance: textfield;
    }
</style>
