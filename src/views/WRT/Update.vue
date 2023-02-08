<template>
    <v-container fill-height class="main-container">
        <div class="box">
            <v-row class="mt24">
                <v-col cols="12" md="6" class="mt24">
                    <v-text-field
                        name="code"
                        v-model="form.code"
                        label="Code"
                        required
                        disabled
                        data-unq="wrt-input-code"
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="mt24">
                    <v-text-field
                        name="name"
                        v-model="form.name"
                        data-unq="wrt-input-name"
                        label="Name"
                        required
                        disabled
                        outlined
                        dense
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <SelectWrtType
                        :default="form.type"
                        :dense="true"
                        data-unq="wrt-input-wrtType"
                        @selected="wrtTypeSelected"
                    ></SelectWrtType>
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
                            data-unq="wrt-button-cancel"
                        >
                            <span class="text-black80">Cancel</span>
                        </v-btn>
                        <v-btn
                            depressed
                            color="#50ABA3"
                            class="main-btn white--text"
                            @click="confirmButton()"
                            data-unq="wrt-button-save"
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
    import { mapState, mapActions } from "vuex";
    export default {
        name: "WRTUpdate",
        data () {
            return {
                ConfirmData : {},
                error:{},
            }
        },
        async created(){
            await this.fetchUpdateWrtDetail({ id: this.$route.params.id })
        },
        computed : {
            ...mapState({
                form: state => state.wrt.updateWrt.form
            })
        },
        methods:{
             ...mapActions([
                "fetchUpdateWrtDetail",
            ]),
            confirmButton() { // Send data to update
                this.ConfirmData = {
                    model : true,
                    title : "Update WRT",
                    text : "Are you sure want to update this WRT?",
                    urlApi : '/configuration/v1/wrt/'+ this.$route.params.id,
                    nextPage : "/configuration/wrt",
                    data : { type : this.form.type}
                }
            },
            wrtTypeSelected(val) { // Select Wrt Type
                this.$store.commit("setUpdateWrtType", "")
                if (val) {
                    this.$store.commit("setUpdateWrtType", val.value)
                }
            }
        },
        mounted() {
            let self = this
            this.$root.$on('event_error', function(err){
                self.error = err
            });
        },
    }
</script>
