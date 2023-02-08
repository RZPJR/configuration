<template>
    <v-container fill-height class="main-container">
        <div class="box-table">
            <v-data-table
                :headers="regionPolicyList.table_headers"
                :items="regionPolicyList.data"
                :loading="regionPolicyList.isLoading"
                :items-per-page="10"
            >
                <template v-slot:item="props">
                    <tr style="height:48px">
                        <td :data-unq="`regionPolicy-label-name-${props.index}`">{{ props.item.region.description }}</td>
                        <td :data-unq="`regionPolicy-label-maxDayDeliveryDate-${props.index}`">{{ props.item.max_day_delivery_date }}</td>
                        <td :data-unq="`regionPolicy-label-weeklyDayOff-${props.index}`">{{ props.item.weekly_day_off }}</td>
                        <td :data-unq="`regionPolicy-label-orderTimeLimit-${props.index}`">{{ props.item.order_time_limit }}</td>
                        <td :data-unq="`regionPolicy-button-actionButton-${props.index}`">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on: menu }">
                                    <v-btn
                                        icon
                                        v-on="{ ...menu }"
                                    ><v-icon dark>more_vert</v-icon></v-btn>
                                </template>
                                <v-list class="bg-white">
                                    <v-list-item :data-unq="`regionPolicy-button-update-${props.index}`" :to="`/configuration/region-policy/update/${props.item.id}`">
                                        <v-list-item-content>
                                            <v-list-item-title>Update</v-list-item-title>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon>open_in_new</v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </div>
    </v-container>
</template>

<script>
    import { mapState, mapActions, mapMutations } from "vuex";
    export default {
        name: "ConfigurationRegionPolicy",
        created() {
            this.fetchRegionPolicyList()
        },
        computed:{
            ...mapState({
                regionPolicyList: state => state.regionpolicy.regionPolicyList,
            }),
        },
        methods: {
            ...mapActions([
                "fetchRegionPolicyList"
            ]),
        },
    }
</script>