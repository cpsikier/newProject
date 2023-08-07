<template>
	<div>
		<el-button type="primary" @click="toLogin">点击登录</el-button>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function toLogin() {
	router.push({name: 'Home'})
	console.log(1)
}
</script>

<style>
</style>