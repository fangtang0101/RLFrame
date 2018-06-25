<template>
    <div class="main">
        <div class="app_in">fang</div>
        <div class="app_out">tang</div>
    </div>
</template>
<script>
export default {};
</script>
<!-- tip:  -->
<!-- scoped  if set the css is only apply to this page . else css is global-->
<style scoped lang="scss" rel="stylesheet/scss">
.test {
	background-color: #efefef;
}
.main {
    .app_out {
        background-color: orange;
    }
}
</style>