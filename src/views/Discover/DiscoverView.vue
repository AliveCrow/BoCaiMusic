<template>
  <Carousel  />

  <Menu title="新歌首发" :tabs="menuTabs"/>

  <div class="discover">
    <Card style="height: 740px">
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
      <template #default>
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

    <div class="row-image">
      <a-row :gutter="40">
        <a-col :span="6">
          <a-image
              width="100%"
              height="201px"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
              title="In Flames – Battles"
          />
        </a-col>
        <a-col :span="6">
          <a-image
              width="100%"
              height="201px"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
              title="In Flames – Battles"
          />
        </a-col>
        <a-col :span="6">
          <a-image
              width="100%"
              height="201px"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
              title="In Flames – Battles"
          />
        </a-col>
        <a-col :span="6">
          <a-image
              width="100%"
              height="201px"
              src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp"
              title="In Flames – Battles"
          />
        </a-col>
      </a-row>
    </div>

    <Card style="height: 520px">
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
      <template #default>
        <div class="discover-card-content">
          <a-row :gutter="10" style="justify-content: space-between; gap: 10px">
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>

            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>

            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>

            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="4.8">
              <div class="row-item">
                <img
                    :style="{ width: '85px', height: '85px', transform: 'translateY(-20px)' }"
                    alt="dessert"
                    src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                />
                <div class="row-item-meta">
                  <div class="row-item-meta-title">We the PeopleWe the PeopleWe the People</div>
                  <div class="row-item-meta-description">
                    row-item-descriptionrow-item-descriptionrow-item-descriptionrow-item-description
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </template>
    </Card>
  </div>

</template>

<script setup lang="ts">
import Carousel from "@/components/Carousel/Carousel.vue";
import {IconArrowLeft, IconArrowRight} from "@arco-design/web-vue/es/icon";
import {tab} from '@/types/common'

const headerStyle = {
  height: '90px'
}

const menuTabs: tab[] = [
  {
    label: '最新',
  },
  {
    label: '内地',
  },
  {
    label: '港台',
  },
  {
    label: '欧美',
  },
  {
    label: '韩国',
  },
  {
    label: '日本',
  },
]
</script>

<style scoped lang="less">
.hot {
  height: 561px !important;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;
}

.discover {
  padding: 0 150px;
  .card-style();
}
</style>
