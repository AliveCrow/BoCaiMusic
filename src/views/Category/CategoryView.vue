<template>
  <div class="tag-wrapper">
    <a-space wrap >
      <a-tag
          checkable
          :default-checked="false"
          v-for="item in tagList"
          :key="item.label"
          class="new-tag"
      >
        {{item.label}}
      </a-tag>
    </a-space>
  </div>

  <Card style="height: 740px; margin: 0 150px">
    <template #title>
      <div class="card-title">Awesome</div>
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
        <a-row :gutter="30" style="justify-content: space-between">
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>

          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4">
            <a-card :bordered="false" class="discover-card-item">
              <template #cover>
                <div
                    :style="{overflow: 'hidden'}"
                >
                  <img
                      :style="{ width: '203px', height: '203px', transform: 'translateY(-20px)' }"
                      alt="dessert"
                      src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </div>
              </template>
              <a-card-meta class="discover-card-meta">
                <template #title>
                  <div class="discover-card-meta-title">Card TitleCard TitleCard TitleCard TitleCard Title123</div>
                </template>
                <template #description>
                  <div class="discover-card-meta-description">Card content</div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </template>
  </Card>

</template>

<script setup lang="ts">
import { IconArrowRight, IconArrowLeft} from "@arco-design/web-vue/es/icon";

const tagList = [
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
  {
    label: 'Awesome',
  },
]
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
