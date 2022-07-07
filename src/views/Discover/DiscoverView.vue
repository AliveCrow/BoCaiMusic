<template>
  <Menu/>

  <div class="discover">
    <a-card :bordered="false"
            class="discover-card"
            :header-style="headerStyle"
    >
      <template #title>
        <div class="discover-card-title">最新</div>
      </template>
      <template #extra>
        <a-space>
          <a-button type="text">
            <template #icon>
              <icon-arrow-left class="discover-card-icon" :strokeWidth="5"/>
            </template>
          </a-button>
          <a-button type="text">
            <template #icon>
              <icon-arrow-right class="discover-card-icon" :strokeWidth="5"/>
            </template>
          </a-button>
        </a-space>
      </template>
      <div class="discover-card-content">
        <a-row :gutter="27" style="justify-content: center">
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>  <a-col :span="4.8">
          <a-card hoverable class="discover-card-item">
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
            <a-card-meta title="Card Title">
              <template #description>
                Card content <br/>
                Card content
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :span="4.8">
            <a-card hoverable class="discover-card-item">
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
              <a-card-meta title="Card Title">
                <template #description>
                  Card content <br/>
                  Card content
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/components/Menu/Menu";
import {IconArrowLeft, IconArrowRight} from "@arco-design/web-vue/es/icon";

const headerStyle = {
  height: '90px'
}
</script>

<style scoped lang="less">
@text-color: #666;
@icon-color: #808080;

.discover {
  padding: 0 150px;

  &-card {
    height: 801px;
    background: #FFFFFF;
    box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.0500);
    border-radius: 8px;
    opacity: 1;

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
    }

    &-item {
      height: 286px;
      margin-bottom: 35px;
    }
  }


}
</style>
