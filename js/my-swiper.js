/*
 * @Description: Swiper集合
 * @Version: 2.0
 * @Autor: Yaowen Liu
 * @Date: 2020-06-01 09:34:02
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-03-12 10:33:26
 */

// 主要banner
new Swiper ('.main-banner-swiper', {
  loop: true, // 循环模式选项
  
  // 如果需要分页器
  pagination: {
    el: '.main-banner-swiper .swiper-pagination'
  },
  
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.main-banner-swiper .swiper-button-next',
    prevEl: '.main-banner-swiper .swiper-button-prev',
  }
})