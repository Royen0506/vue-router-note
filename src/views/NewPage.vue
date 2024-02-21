<template>
  <div class="mb-3">新增頁面</div>

  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link to="/newPage/a" class="list-group-item list-group-item-action">a</router-link>
        <router-link to="/newPage/b" class="list-group-item list-group-item-action">b</router-link>
        <router-link to="/newPage/namedView/C2A" class="list-group-item list-group-item-action"
          >命名路由C2A</router-link
        >
        <router-link to="/newPage/namedView/A2B" class="list-group-item list-group-item-action"
          >命名路由A2B</router-link
        >
        <router-link
          to="/newPage/namedViewCus/namedViewPractice"
          class="list-group-item list-group-item-action"
          >練習命名路由</router-link
        >
        <router-link to="/newPage/dynamicRouter/:id" class="list-group-item list-group-item-action"
          >動態路由</router-link
        >
        <router-link
          to="/newPage/dynamicRouterByProps/:id"
          class="list-group-item list-group-item-action"
          >動態路由搭配props</router-link
        >
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
