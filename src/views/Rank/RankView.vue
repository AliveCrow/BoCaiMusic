<template>
  <div class="rank-wrapper">
    <a-collapse :default-active-key="[1]" accordion expand-icon-position="right">
      <a-collapse-item header="巅峰榜" key="1">
        <Card class="card" :header-style="{ display: 'none'}">
<!--          <template #title>-->
<!--            <div class="card-title">巅峰榜</div>-->
<!--          </template>-->
          <template>
            <a-tabs position="left" default-active-key="飙升榜">
              <a-tab-pane v-for="item in list1" :key="item" :title="item" >
                <a-list :bordered="false" :max-height="400" @reach-bottom="fetchData">
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <template #scroll-loading>
                    <div v-if="bottom">No more data</div>
                    <a-spin v-else />
                  </template>
                </a-list>
              </a-tab-pane>
            </a-tabs>
          </template>
        </Card>
      </a-collapse-item>
      <a-collapse-item header="地区榜" key="2">
        <Card class="card" :header-style="{ display: 'none'}">
          <template #title>
            <div class="card-title">地区榜</div>
          </template>
          <template>
            <a-tabs position="left" default-active-key="飙升榜">
              <a-tab-pane v-for="item in list1" :key="item" :title="item" >
                <a-list :bordered="false" :max-height="400" @reach-bottom="fetchData">
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <template #scroll-loading>
                    <div v-if="bottom">No more data</div>
                    <a-spin v-else />
                  </template>
                </a-list>
              </a-tab-pane>
            </a-tabs>
          </template>
        </Card>
      </a-collapse-item>
      <a-collapse-item header="特色榜" key="3">
        <Card class="card" :header-style="{ display: 'none'}">
          <template #title>
            <div class="card-title">特色榜</div>
          </template>
          <template>
            <a-tabs position="left" default-active-key="飙升榜">
              <a-tab-pane v-for="item in list1" :key="item" :title="item" >
                <a-list :bordered="false" :max-height="400" @reach-bottom="fetchData">
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <template #scroll-loading>
                    <div v-if="bottom">No more data</div>
                    <a-spin v-else />
                  </template>
                </a-list>
              </a-tab-pane>
            </a-tabs>
          </template>
        </Card>
      </a-collapse-item>
      <a-collapse-item header="全球榜" key="4">
        <Card class="card" :header-style="{ display: 'none'}">
          <template #title>
            <div class="card-title">全球榜</div>
          </template>
          <template>
            <a-tabs position="left" default-active-key="飙升榜">
              <a-tab-pane v-for="item in list1" :key="item" :title="item" >
                <a-list :bordered="false" :max-height="400" @reach-bottom="fetchData">
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <a-list-item>
                    <a-list-item-meta title="Beijing Bytedance Technology Co., Ltd."
                                      description="Beijing ByteDance Technology Co., Ltd. is an enterprise located in China."
                    >
                      <template #avatar>
                        <a-avatar shape="square" :size="64">
                          <img alt="avatar"
                               src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"/>
                        </a-avatar>
                      </template>
                    </a-list-item-meta>
                  </a-list-item>
                  <template #scroll-loading>
                    <div v-if="bottom">No more data</div>
                    <a-spin v-else />
                  </template>
                </a-list>
              </a-tab-pane>
            </a-tabs>
          </template>
        </Card>
      </a-collapse-item>
    </a-collapse>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const list1 = [
  '飙升榜',
  '热歌榜',
  '新歌榜',
  '腾讯音乐人原创榜',
  '流行指数榜',
  '喜力电音榜',
]
const bottom = ref(false)
const fetchData = () => {
  bottom.value = false
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

.rank-wrapper {
  padding: 40px 150px;

  .card {
    margin-bottom: 40px;
  }

  /deep/.arco-collapse-item-header {
    height: 95px;
    .arco-collapse-item-header-title {
      font-size: 19px;
      font-weight: 500;
      color: #666666;
      line-height: 40px;
      -webkit-background-clip: text;
    }
  }

  /deep/.arco-card-body {
    padding: 0
  }

  /deep/ .arco-tabs-nav-tab-list {
    height: 400px;
  }

  /deep/ .arco-tabs-tab {
    text-align: right;
  }

  /deep/.arco-tabs-content {
    padding-left: 0
  }

  /deep/ .arco-tabs-tab-title {
    font-weight: 500;
    color: #999999;
    line-height: 40px;
    -webkit-background-clip: text;
  }

  /deep/ .arco-tabs-tab-active {
    .arco-tabs-tab-title {
      color: @theme-color !important;
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
}

</style>
