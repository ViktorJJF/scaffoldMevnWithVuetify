<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        Google&nbsp;
        <span class="font-weight-light">Keep</span>
      </span>
      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-layout v-if="item.heading" :key="i" align-center>
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-right">
              <v-btn small text>edit</v-btn>
            </v-flex>
          </v-layout>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" @click :to="{name:item.to}">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "lightbulb_outline", text: "Notas bruses", to: "brusesNotes" },
      { icon: "touch_app", text: "Notas bruses 2", to: "brusesNotes2" },
      { divider: true },
      { heading: "Labels", to: "" },
      { icon: "add", text: "Create new label", to: "" },
      { divider: true },
      { icon: "archive", text: "Archive", to: "" },
      { icon: "delete", text: "Trash", to: "" },
      { divider: true },
      { icon: "settings", text: "Settings", to: "" },
      { icon: "chat_bubble", text: "Trash", to: "" },
      { icon: "help", text: "Help", to: "" },
      { icon: "phonelink", text: "App downloads", to: "" },
      { icon: "keyboard", text: "Keyboard shortcuts", to: "" }
    ]
  })
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>