<template>
    <v-container fill-height class="main-container">
        <div class="box">
            <v-row>
                <v-col cols="12" md="6">
                    <img
                        width="44px"
                        height="44px"
                        :src="profile"
                        class="img-left"
                    />
                    <div class="flex-align-start pl16">
                        <div>
                            <span class="bold">{{ form.name }}</span> ({{ form.nickname }})
                        </div>
                        <div class="text-secondary underline">
                            {{ form.email }}
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" md="6" class="flex-align-end">
                    <v-menu offset-y>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on">
                                <v-icon>more_vert</v-icon>
                            </v-btn>
                        </template>
                            <v-list class="bg-white">
                                <v-list-item :to="'/configuration/user-profile/update' ">
                                    <v-list-item-content>
                                        <v-list-item-title>Update</v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon>
                                        <v-icon>mdi-open-in-new</v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                                <hr/>
                                <v-list-item :to="'/configuration/user-profile/password' ">
                                    <v-list-item-content>
                                        <v-list-item-title>Update Password</v-list-item-title>
                                    </v-list-item-content>
                                    <v-list-item-icon>
                                        <v-icon>mdi-open-in-new</v-icon>
                                    </v-list-item-icon>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                </v-col>
            </v-row>
        </div>
        <div class="box-end">
            <v-row class="mt24">
                <v-col cols="12" md="6" class="mt24">
                    <DetailRowNew :name="'Division'" :value="form.main_role.division.name"/>
                </v-col>
                <v-col cols="12" md="6" class="mt24">
                    <DetailRowNew :name="'Role'" :value="form.main_role.name"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <!-- <DetailRowNew :name="'Area'" :value="form.region.name"/> -->
                    <DetailRowNew :name="'Region'" :value="'-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <!-- <DetailRowNew :name="'Supervisor'" v-if="form.supevisor != null" :value="form.parent.name"/> -->
                    <!-- <DetailRowNew :name="'Supervisor'" v-else :value="'-'"/> -->
                    <DetailRowNew :name="'Supervisor'" :value="'-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <!-- <DetailRowNew :name="'Warehouse'" :value="form.warehouse.name"/> -->
                    <DetailRowNew :name="'Site'" :value="'-'"/>
                </v-col>
                <v-col cols="12" md="6" class="-mt24">
                    <DetailRowNew :name="'Phone Number'" :value="form.phone_number"/>
                </v-col>
            </v-row>
        </div>
  </v-container>
</template>
<style scoped>
.img-left {
    float: left
}
</style>
<script>
import { UserProfile } from "@vue-mf/global";
export default {
    components: { UserProfile },
    name : "UserProfileDetail",
    data() {
        return {
            form: {},
            profile : ''
        };
    },
    methods:{
        renderData(){
            this.$http.get("/account/v1/profile").then(response => {
                this.form = response.data.data
            });
        },
    },
    created(){
        this.renderData()
        this.profile = UserProfile
    }
};
</script>