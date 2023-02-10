<template>
    <v-container fill-height class="main-container">
        <div class="box">
            <v-row class="mt24 -mb38">
                <v-col cols="12" md="6" class="mt24">
                    <v-text-field
                        name="name"
                        data-unq="regionPolicy-input-name"
                        v-model="form.name"
                        required
                        outlined
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46"
                        dense
                        disabled
                        :error-messages="error.name"
                    >
                        <template v-slot:label>
                            Name<span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="mt24">
                    <v-text-field
                        name="weekly_day_off"
                        v-model="form.weekly_day_off"
                        data-unq="regionPolicy-input-weeklyDayOff"
                        required
                        outlined
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46"
                        dense
                        :error-messages="error.weekly_day_off"
                    >
                        <template v-slot:label>
                            Weekly Day Off<span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <v-text-field
                        name="max_day_delivery_date"
                        v-model="form.max_day_delivery_date"
                        required
                        data-unq="regionPolicy-input-maxDayDeliveryDate"
                        onkeypress="return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46"
                        outlined
                        dense
                        :error-messages="error.max_day_delivery_date"
                    >
                        <template v-slot:label>
                            Maximum Day Delivery Date<span style="color:red">*</span>
                        </template>
                    </v-text-field>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <v-tooltip top>
                        <template v-slot:activator="{ on: tooltip }">
                            <div v-on="{ ...tooltip }">
                                    <v-menu
                                    ref="menuTime"
                                    v-model="updateRegionPolicy.order_time_limit"
                                    :close-on-content-click="false"
                                    :return-value.sync="form.order_time_limit"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            prepend-inner-icon="mdi-clock-outline"
                                            outlined
                                            clearable
                                            maxlength="5"
                                            data-unq="regionPolicy-input-orderTimeLimit"
                                            onkeypress="return event.charCode >= 48 && event.charCode <= 58"
                                            @click:clear="form.order_time_limit = ''"
                                            v-model="form.order_time_limit"
                                            dense
                                            v-bind="attrs"
                                            v-on="on"
                                            :error-messages="error.order_time_limit"
                                        >
                                            <template v-slot:label>
                                                Order Time Limit<span style="color:red">*</span>
                                            </template>
                                        </v-text-field>
                                    </template>
                                    <v-time-picker
                                        format="24hr"
                                        v-if="updateRegionPolicy.order_time_limit"
                                        v-model="form.order_time_limit"
                                        full-width
                                        @click:minute="$refs.menuTime.save(form.order_time_limit)"
                                    ></v-time-picker>
                                </v-menu>
                            </div>
                        </template>
                        <span>Daily cut off time for sales order</span>
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
                            data-unq="regionPolicy-button-cancel"
                        >
                            <span class="text-black80">Cancel</span>
                        </v-btn>
                        <v-btn
                            depressed
                            color="#50ABA3"
                            class="main-btn white--text"
                            data-unq="regionPolicy-button-save"
                            @click="confirmButton()"
                            v-privilege="'rgp_upd'"
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
        name: "ConfigurationRegionPolicyUpdate",
        data () {
            return {
                error:{},
                ConfirmData:{},
            }
        },
        async created(){
            await this.fetchUpdateRegionPolicyDetail({ id: this.$route.params.id })
        },
        computed: {
            ...mapState({
               updateRegionPolicy: state => state.regionpolicy.updateRegionPolicy,
               form: state => state.regionpolicy.updateRegionPolicy.form
           }),
        },
        methods:{
            ...mapActions([
                "fetchUpdateRegionPolicyDetail",
            ]),
            confirmButton() {
                this.ConfirmData = {
                    model : true,
                    title : "Update Region Policy",
                    text : "Are you sure want to update this Region Policy?",
                    urlApi : '/configuration/v1/region_policy/'+ this.$route.params.id,
                    nextPage : "/configuration/region-policy",
                    data : {
                        order_time_limit: this.form.order_time_limit,
                        max_day_delivery_date : parseFloat(this.form.max_day_delivery_date),
                        weekly_day_off : parseFloat(this.form.weekly_day_off)
                    }
                }
            }
        },
        mounted () {
            let self = this
            this.$root.$on('event_error', function(err){
                self.error = err
            });
        },
    }
</script>
