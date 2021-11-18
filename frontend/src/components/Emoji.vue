<template>
  <div class="emoji" @click="click(id)">
    <span class="icon" :id="id">{{ emoji }}</span>
    <span class="tooltiptext"> {{ tooltipText }} </span>
  </div>
</template>


<script>
import { copyToClipboard } from "../utils/copy.utils";
export default {
  name: "App",
  props: {
    emoji: String,
    id: Number,
  },
  data: () => {
    return {
      tooltipText: "Click to copy!",
    };
  },
  methods: {
    click(emojiId) {
      copyToClipboard(emojiId);
      this.copied();
    },
    copied() {
      this.tooltipText = "Copied!";
      setTimeout(() => {
        this.tooltipText = "Click to copy!";
      }, 1000);
    },
  },
};
</script>

<style>
.emoji {
  display: inline-block;
}

.emoji .icon {
  text-shadow: 4px 4px 2px rgba(150, 150, 150, 0.66);
  -webkit-text-shadow: 4px 4px 2px rgba(150, 150, 150, 0.66);
  -moz-text-shadow: 4px 4px 2px rgba(150, 150, 150, 0.66);
  cursor: pointer;
}

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.emoji .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  font-size: 10px;
  border-radius: 6px;
  padding: 5px 20px 5px 20px;
  margin-left: 10px;
  position: absolute;
  z-index: 1;
}

.emoji:hover .tooltiptext {
  visibility: visible;
}
</style>