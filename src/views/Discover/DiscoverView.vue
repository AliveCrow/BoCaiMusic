<template>
  <Carousel  />

  <Menu/>

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
import Carousel from "@/components/Carousel/Carousel";
import Menu from "@/components/Menu/Menu";
import {IconArrowLeft, IconArrowRight} from "@arco-design/web-vue/es/icon";

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

.hot {
  height: 561px !important;
  background: #FFFFFF;
  box-shadow: 0 3px 7px 1px rgba(0, 0, 0, 0.05000000074505806);
  opacity: 1;
}

.discover {
  padding: 0 150px;

  .row-image {
    margin: 40px 0;

    /deep/ .arco-image-img {
      border-radius: 8px !important;
    }

    /deep/ .arco-image-footer-caption-title {
      text-align: center
    }
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


}
</style>
