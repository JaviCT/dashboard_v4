<template>
  <v-container
    fluid
  >
    <Left />
    <v-tabs>
      <v-tab
        :href="'#liveView'"
      >
        Live View
      </v-tab>
      <v-tab
        :href="'#recordings'"
      >
        Recordings
      </v-tab>
      <v-tab
        :href="'#sharing'"
      >
        Sharing
      </v-tab>
      <v-tab
        :href="'#details'"
      >
        Details
      </v-tab>
      <v-tab
        :href="'#logs'"
      >
        Logs
      </v-tab>
      <v-tab
        :href="'#archives'"
      >
        Archives
      </v-tab>
      <v-tab
        :href="'#snapmail'"
      >
        Snapmail
      </v-tab>
      <v-tab
        :href="'#compare'"
      >
        Compare
      </v-tab>
      <v-tab-item
        :value="'liveView'"
      >
        <LiveView />
      </v-tab-item>
      <v-tab-item
        :value="'recordings'"
      >
        <Recordings />
      </v-tab-item>
      <v-tab-item
        :value="'sharing'"
      >
        <Shares />
      </v-tab-item>
      <v-tab-item
        :value="'details'"
      >
        <Details />
      </v-tab-item>
      <v-tab-item
        :value="'logs'"
      >
        <Logs />
      </v-tab-item>
      <v-tab-item
        :value="'archives'"
      >
        <Archives />
      </v-tab-item>
      <v-tab-item
        :value="'snapmail'"
      >
        <Snapmail />
      </v-tab-item>
      <v-tab-item
        :value="'compare'"
      >
        <Compare />
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script>
import LiveView from '../components/Liveview';
import Recordings from '../components/Recordings';
import Shares from '../components/Shares';
import Details from '../components/Details';
import Logs from '../components/Logs';
import Archives from '../components/Archives';
import Snapmail from '../components/Snapmail';
import Compare from '../components/Compare';
import Left from '../components/left';

export default {
  name: 'Cameras',
  components: {
    LiveView,
    Recordings,
    Shares,
    Details,
    Logs,
    Archives,
    Snapmail,
    Compare,
    Left
  },
};
</script>
