<template>
  <div>
    <div style="padding:20px;">
      <!-- 调用按钮组件 -->
      <!-- <span>123</span> -->
      <SlotButton>123</SlotButton>
    </div>
  </div>
</template>

<script>
import SlotButton from "@/components/slotButton";
export default {
  components: {
    SlotButton
  }
};
</script>

<style>
</style>