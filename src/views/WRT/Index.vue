<template>
    <v-container fill-height class="main-container">
        <div class="box-start">
            <v-row>
                <v-col cols="12" md="4" class="-mb24">
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on: tooltip }">
                            <v-text-field
                                dense
                                v-model="search"
                                outlined
                                filled
                                data-unq="wrt-input-search"
                                placeholder="Search..."
                                v-on="{ ...tooltip }"
                                prepend-inner-icon="search"
                            ></v-text-field>
                        </template>
                        <span>Search by code, name</span>
                    </v-tooltip>
                </v-col>
            </v-row>
            <v-row class="hr-title"/>
            <v-row>
                <v-col>
                    Filter 
                    <v-btn 
                        depressed
                        x-small
                        data-unq="wrt-button-filter"
                        @click="filterDropdown = !filterDropdown"
                        v-if="filterDropdown"
                        class="no-caps fs12"
                    >
                        Hide
                        <v-icon
                            right
                        >
                            expand_less
                        </v-icon>
                    </v-btn>
                    <v-btn 
                        depressed
                        x-small
                        data-unq="wrt-button-filter"
                        @click="filterDropdown = !filterDropdown"
                        v-else
                        class="no-caps fs12"
                    >
                        Show
                        <v-icon
                            right
                        >
                            expand_more
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row v-if="filterDropdown">
                <v-col cols="12" md="3" class="-mb24">
                    <SelectArea
                        :norequired="true"
                        name="area"
                        :dense="true"
                        data-unq="wrt-input-region"
                        :aux_data="2"
                        @selected="regionSelected"
                    >
                    </SelectArea>
                </v-col>
            </v-row>
        </div>
        <div class="box-table">
            <v-data-table
                :mobile-breakpoint="0"
                :headers="table_headers"
                :loading="isLoading"
                :items="data"
                :items-per-page="10"
            >
                <template v-slot:item="props">
                    <tr style="height:48px">
                        <td :data-unq="`wrt-label-name-${props.index}`">{{ props.item.code }}<br>
                        <span class="text-black60">{{ props.item.start_time }}</span></td>
                        <td :data-unq="`wrt-label-regionName-${props.index}`">{{ props.item.region.description }}</td>
                        <td :data-unq="`wrt-label-note-${props.index}`">{{ props.item.note }}</td>
                        <td :data-unq="`wrt-label-wrtType-${props.index}`">
                            <div v-if="props.item.type == 1">
                                Delivery
                            </div>
                            <div v-else>
                                Self Pickup
                            </div>
                        </td>
                        <td :data-unq="`wrt-button-actionButton-${props.index}`">
                            <v-menu offset-y>
                                <template v-slot:activator="{ on: menu }">
                                    <v-btn
                                        icon
                                        v-on="{ ...menu }"
                                    ><v-icon dark>more_vert</v-icon></v-btn>
                                </template>
                                <v-list class="bg-white">
                                    <v-list-item :data-unq="`wrt-button-update-${props.index}`" :to="`/configuration/wrt/update/${props.item.id}`">
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
    import { mapState, mapActions } from "vuex";
    export default {
        name: "ConfigurationWrt",
        data() {
            return {
                search: '',
                filterDropdown : false,
            }
        },
        created() {
            this.fetchWrtList()
        },
        computed:{
            ...mapState({
                table_headers: state => state.wrt.wrtList.table_headers,
                isLoading: state => state.wrt.wrtList.isLoading,
                data: state => state.wrt.wrtList.data,
            })
        },
        methods: {
            ...mapActions([
                "fetchWrtList"
            ]),
            regionSelected(val) { // Select Region
                this.$store.commit("setRegionWrtList", "")
                if (val) {
                    this.$store.commit("setRegionWrtList", val.id)
                }
                this.fetchWrtList()
            },
        },
        watch: {
            'search': { // to filter by search box
                handler: function (search) {
                    this.$store.commit('setSearchWrtList', search)
                    let self = this
                    clearTimeout(this._timerId)
                    this._timerId = setTimeout(function(){
                        self.fetchWrtList()
                    }, 1000);
                },
                deep: true
            },
        },
    }
</script>