<template>
  <a-card :bordered="false"
          class="discover-card"
          :header-style="headerStyle"
          v-bind="attrs"
  >
    <template #title>
      <slot name="title"></slot>
    </template>
    <template #extra>
      <slot name="extra">
      </slot>
    </template>
    <template #cover>
      <slot></slot>
    </template>
  </a-card>
</template>

<script setup lang="ts">
import { useAttrs } from "vue";
const attrs = useAttrs()
const headerStyle = {
  height: '90px'
}
</script>

<style scoped lang="less">
@text-color: #666;
@icon-color: #808080;

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/deep/.arco-card-cover > * {
  width: auto;
}

.discover-card {
  background: #FFFFFF;
  box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.0500);
  border-radius: 8px;
  opacity: 1;

  &-meta {
    padding: 0 10px;

    &-title {
      max-width: 180px;
      .text-ellipsis
    }

    &-description {
      width: 183px;
      .text-ellipsis
    }
  }

  &-icon {
    color: @icon-color;
  }

  &-title {
    height: 30px;
    font-size: 16px;
    font-weight: 500;
    color: @text-color;
    line-height: 30px;
    -webkit-background-clip: text;
  }

  &-content {
    padding: 40px;

    .row-item {
      width: 265px;
      display: flex;
      gap: 30px;

      &-meta {
        display: flex;
        flex-direction: column;
        width: 147px;

        &-title {
          width: 147px;
          height: 27px;
          font-size: 19px;
          font-weight: 500;
          color: #666666;
          line-height: 27px;
          -webkit-background-clip: text;
          .text-ellipsis
        }

        &-description {
          width: 147px;
          height: 33px;
          font-size: 16px;
          font-weight: 500;
          color: #B3B3B3;
          line-height: 33px;
          -webkit-background-clip: text;
          .text-ellipsis
        }
      }
    }
  }

  &-item {
    height: 260px;
    margin-bottom: 35px;

    /deep/ .arco-card-body {
      padding: 0;
    }
  }
}
</style>
