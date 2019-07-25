<template>
  <div>
    <p>
      Tiempo transcurrido:
      {{ hours }} :
      {{ minutes | zeroPad }} :
      {{ seconds | zeroPad }} :
      {{ milliSeconds | zeroPad(3) }}
    </p>
    <v-btn v-if="!isRunning" outline color="primary" dark @click="startTimer">EMPEZAR</v-btn>
    <v-btn
      v-if="isRunning"
      outline
      color="success"
      dark
      @click="pushTime"
      :disabled="!isRunning"
    >VUELTA</v-btn>
    <v-btn
      v-if="isRunning"
      outline
      color="error"
      dark
      @click="stopTimer"
      :disabled="!isRunning"
    >DETENER</v-btn>
    <v-btn v-if="isRunning" outline color="black" dark @click="clearAll">BORRAR</v-btn>
    <ul>
      <li v-for="item in laps">
        {{ item.hours }} :
        {{ item.minutes | zeroPad }} :
        {{ item.seconds | zeroPad }} :
        {{ item.milliSeconds | zeroPad(3) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("esto hay en laps: ", this.laps);
  },
  props: ["laps"],
  data() {
    return {
      times: [],
      animateFrame: 0,
      nowTime: 0,
      diffTime: 0,
      startTime: 0,
      isRunning: false
    };
  },
  methods: {
    setSubtractStartTime: function(time) {
      var time = typeof time !== "undefined" ? time : 0;
      this.startTime = Math.floor(performance.now() - time);
    },
    startTimer: function() {
      var vm = this;
      vm.setSubtractStartTime(vm.diffTime);
      (function loop() {
        vm.nowTime = Math.floor(performance.now());
        vm.diffTime = vm.nowTime - vm.startTime;
        vm.animateFrame = requestAnimationFrame(loop);
      })();
      vm.isRunning = true;
    },
    stopTimer: function() {
      this.$emit("stop", this.times);
      this.isRunning = false;
      cancelAnimationFrame(this.animateFrame);
    },
    pushTime: function() {
      this.times.push({
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
        milliSeconds: this.milliSeconds
      });
    },
    clearAll: function() {
      this.startTime = 0;
      this.nowTime = 0;
      this.diffTime = 0;
      this.times = [];
      this.stopTimer();
      this.animateFrame = 0;
    }
  },
  computed: {
    hours: function() {
      return Math.floor(this.diffTime / 1000 / 60 / 60);
    },
    minutes: function() {
      return Math.floor(this.diffTime / 1000 / 60) % 60;
    },
    seconds: function() {
      return Math.floor(this.diffTime / 1000) % 60;
    },
    milliSeconds: function() {
      return Math.floor(this.diffTime % 1000);
    }
  },
  filters: {
    zeroPad: function(value, num) {
      var num = typeof num !== "undefined" ? num : 2;
      return value.toString().padStart(num, "0");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>