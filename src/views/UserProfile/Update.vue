<template>
    <v-container fill-height class="main-container">
        <div class="box">
            <v-row class="mt24">
                <v-col cols="12" md="6" class="mt24">
                    <v-text-field
                        name="phone_number"
                        v-model="form.phone_number"
                        required
                        outlined
                        dense
                        :error-messages="error.phone_number"
                        onkeypress='return event.charCode >= 48 && event.charCode <= 57'
                        maxlength="15"
                    >
                        <template v-slot:label>
                            Phone Number<span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="mt24">
                    <v-tooltip top>
                        <template v-slot:activator="{ on }">
                            <v-text-field
                                name="nickname"
                                v-model="form.nickname"
                                required
                                outlined
                                dense
                                :error-messages="error.nickname"
                                v-on="on"
                            >
                                <template v-slot:label>
                                    Nickname<span style="color:red">*</span>
                                </template>
                            </v-text-field>
                        </template>
                       <span>Name displayed on system</span>
                    </v-tooltip>
                </v-col>
            </v-row>
        </div>
        <div class="box-end">
            <v-row class="-ma16">
                <v-col>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            @click="$router.go(-1)"
                            depressed
                            outlined
                            color="#EBEBEB"
                            class="main-btn"
                        >
                            <span class="text-black80">Cancel</span>
                        </v-btn>
                        <v-btn
                            depressed
                            color="#50ABA3"
                            class="main-btn white--text"
                            @click="confirmButton()"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </div>
        <ConfirmationDialogNew :sendData="ConfirmData"/>
    </v-container>
</template>

<script>
    export default {
        name: "UserProfileUpdate",
        data () {
            return {
                ConfirmData:{},
                form:{
                    nickname: '',
                    phone_number: '',
                },
                error:{}
            }
        },
        methods:{
            confirmButton() {
                this.ConfirmData = {
                    model : true,
                    title : "Update User Profile",
                    text : "Are you sure want to update this User Profile?",
                    urlApi : '/account/v1/profile',
                    nextPage : "/configuration/user-profile",
                    data : {
                        nickname :this.form.nickname,
                        phone_number: this.form.phone_number,
                    }
                }
            },
            renderData(){
                this.$http.get("/account/v1/profile").then(response => {
                    this.form.nickname = response.data.data.nickname
                    this.form.phone_number = response.data.data.phone_number
                });
            },
        },
        created(){
            this.renderData()
        },
        mounted() {
            this.renderData()
            let self = this
            this.$root.$on('event_error', function(err){
                self.error = err
            });
        },
        watch: {
            'form.phone_number': {
                handler: function (val) {
                    let that = this
                    that.form.phone_number = val.replace(/^0+/, '')
                },
                deep: true
            },
        },
    }
</script>
