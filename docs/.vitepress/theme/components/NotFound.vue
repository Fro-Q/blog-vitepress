<script setup></script>

<template>
  <div class="not-found">
    <div class="nf-title">
      <h1>404</h1>
    </div>
    <div class="nf-info">
      <p>您发现了一个不存在的页面。</p>
      <p>
        如果您从我的其它页面来到这里，请
        <a href="/#contact">联系我</a>
        。
      </p>
      <p>或者您可以玩点游戏：</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../style.scss";

.not-found {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;

  & .nf-title {
    width: 100%;
    font-size: 2rem;
    font-weight: 600;
    color: var(--text-title-color);
    text-align: center;
  }

  & .nf-info {
    width: 100%;
    font-size: 1.2rem;
    color: var(--text-muted-color);

    & a {
      color: var(--text-muted-color);
      transition: all 0.2s ease;

      &.license {
        color: var(--accent-color);
      }

      &:hover {
        color: var(--accent-color);
      }
    }
  }
}
</style>
