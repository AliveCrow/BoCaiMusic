<template>
  <div class="tag-wrapper">
    <a-space wrap >
      <a-tag
          checkable
          v-for="item in categoryList"
          :checked="item.categoryId === currentTag.categoryId"
          :key="item.categoryId"
          class="new-tag"
          @click="handleChecked(item)"
      >
        {{ item.categoryName }}
      </a-tag>
    </a-space>
  </div>

  <Card style="height: 740px; margin: 0 150px">
    <template #title>
      <div class="card-title">{{currentTag.categoryName}}</div>
    </template>
    <template #extra>
      <a-space>
        <a-button type="text">
          <template #icon>
            <icon-arrow-left class="card-icon" :strokeWidth="5"/>
          </template>
        </a-button>
        <a-button type="text">
          <template #icon>
            <icon-arrow-right class="card-icon" :strokeWidth="5"/>
          </template>
        </a-button>
      </a-space>
    </template>
    <template>
      <div class="discover-card-content">
        <a-spin :loading="loading">
          <a-row :gutter="30" style="justify-content: space-between">
            <a-col :span="4" v-for="diss in dissList" :key="diss.dissid">
              <a-card :bordered="false" class="discover-card-item">
                <template #cover>
                  <div
                      :style="{overflow: 'hidden'}"
                  >
                    <img
                        :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                        alt="dessert"
                        :src="diss.imgurl"
                    />
                  </div>
                </template>
                <a-card-meta class="discover-card-meta">
                  <template #title>
                    <div class="discover-card-meta-title">{{ diss.dissname }}</div>
                  </template>
                  <template #description>
                    <div class="discover-card-meta-description" v-for="item in diss.creator" :key="item.encrypt_uin">
                      {{ item.name }}
                    </div>
                  </template>
                </a-card-meta>
              </a-card>
            </a-col>
          </a-row>
        </a-spin>
      </div>
    </template>
  </Card>

</template>

<script setup lang="ts">
import {IconArrowLeft, IconArrowRight} from "@arco-design/web-vue/es/icon";
import {useCategory} from "@/hooks";
import useAppStore from "@/store";
import {storeToRefs} from "pinia";

type tag = {
  allsorts?: [],
  categoryId: number,
  categoryName: string,
  usable: number
}

const appStore = useAppStore()
const {currentTag} = storeToRefs(appStore)
currentTag.value.categoryName = '全部'
const handleChecked = (item: tag) => {
  currentTag.value = item
  getSongListByCategoryId()
}

let {
  loading,
  pageSize,
  currentPage,
  dissList,
  categoryList,
  getCategoryList,
  getSongListByCategoryId
} = useCategory()
getCategoryList()
getSongListByCategoryId()
</script>

<style scoped lang="less">
@text-color: #666;
@icon-color: #808080;
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tag-hover {
  color: #fff !important;
  background-color: @theme-color !important;
  border-color: @theme-color !important;
}

.tag-wrapper {
  margin: 40px 150px;
  padding: 34px;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0,0,0,0.05000000074505806);
  opacity: 1;
  border-radius: 8px;

  .new-tag {

    width: 157px;
    height: 53px;
    opacity: 1;
    border: 3px solid #F4F4F4;
    border-radius: 4px;

    font-size: 13px;
    font-weight: 900;
    color: #B3B3B3;
    line-height: 19px;

    &:hover {
      .tag-hover
    }
  }
  .arco-tag-checked.new-tag {
    .tag-hover
  }

}

.card-title {
  font-size: 21px;
  font-weight: 500;
  color: #666666;
  line-height: 40px;
  -webkit-background-clip: text;
}
.card-icon {
  color: @icon-color;
}

.discover-card-content {
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

.discover-card-item {
  height: 260px;
  margin-bottom: 35px;

  /deep/ .arco-card-body {
    padding: 0;
  }
}

.discover-card-meta {
  padding: 0 10px;

  &-title {
    width: 183px;
    .text-ellipsis
  }

  &-description {
    width: 183px;
    .text-ellipsis
  }
}

.discover-card-icon {
  color: @icon-color;
}

.discover-card-title {
  height: 30px;
  font-size: 16px;
  font-weight: 500;
  color: @text-color;
  line-height: 30px;
  -webkit-background-clip: text;
}

</style>
