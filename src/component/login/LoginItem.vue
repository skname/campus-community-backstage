<template>
    <div class="login-box">
        <el-col>
            <div class="top-logo"></div>
            <div class="middle">
                <el-form ref="loginForm" :model="dataForm" :rules="dataRule" class="form-box" status-icon>
                    <el-form-item prop="username">
                        <el-input class="input" v-model="dataForm.username" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input class="input" v-model="dataForm.password" placeholder="密码" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="btn" type="primary" @click="handleSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import { reactive, ref } from 'vue';
import type { HandleEvent, FormMethods, FormRules, LoginType } from '@/type/index';
import { useUserStore } from '@/store/index'
import useStore from "element-plus/es/components/table/src/store";

const userStore = useUserStore();
const Router = useRouter();
const dataForm = reactive<LoginType>({
    username: '',
    password: ''
});
const dataRule: FormRules = reactive({
    username: [{ required: true, message: '用户名不能为空！', trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空！', trigger: 'blur' }]
})

const loginForm = ref();
// 处理表单验证
const handleSubmit: HandleEvent = function () {
    const formTarget: FormMethods = loginForm.value!;
    formTarget.validate(isValid => {
        isValid && handleLogin();
    })
}
// 处理登录
const handleLogin = function () {
    userStore.login(dataForm).then(res => {
        Router.replace('/');
    }, err => {
    });
}

</script>

<style scoped>
.login-box {
    width: 400px;
    border-radius: 20px;
}

.middle,
.form-box,
.el-col {
    width: 100%;
    height: 100%;
}

.btn,
.middle .form-box .input {
    width: 100%;
    height: 38px;
}
</style>