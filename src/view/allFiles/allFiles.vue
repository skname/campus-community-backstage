<template>
  <div>
    <el-row class="el-row">
      <el-col :span="4">
        <el-select v-model="selected" placeholder="选择大学习期数">
          <el-option v-for="(item, index) in timeList" :label="item.name" :key="index" :value="item.value"></el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="el-row">
      <el-col :span="3">
        <el-button type="default" :icon="Download" @click="handleRequest">导出选中</el-button>
      </el-col>
      <el-col :span="3">
        <el-button type="primary" :icon="Download" @click="handleRequest">全部导出</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="depList" @selection-change="handleSelectionChange">
        <el-table-column type="selection" />
        <el-table-column label="系别" property="name" width="200" />
        <el-table-column label="总人数" property="totalPeople" width="200" />
        <el-table-column label="已提交人数" property="submited" width="200" />
      </el-table>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
import { Download } from "@element-plus/icons-vue";
import { getAction } from "@/request/index";
import { handleDownEvent } from "@/utils/index";

const handleRequest = function () {
  // getAction("/GreatLearning/getExcelFile", { periodId: 6 }).then((res) => {
  //   // console.log(res.data)
  //   // handleDownEvent(res.data);
  // });
};
const state = reactive({
  selected: 0,
  depList: [
    {
      name: "计算机",
      totalPeople: 4000,
      submited: 3000,
    },
    {
      name: "智科",
      totalPeople: 5000,
      submited: 3000,
    },
    {
      name: "文旅",
      totalPeople: 6000,
      submited: 3000,
    },
  ],
  timeList: [
    {
      value: 0,
      name: "第一期",
    },
    {
      value: 1,
      name: "第二期",
    },
    {
      value: 2,
      name: "第三期",
    },
  ]
})

const { selected, depList, timeList } = toRefs(state)

// 选择索引
const handleSelectionChange = function (selection) {
  console.log(selection)
};
</script>

<style scoped>
.el-row {
  margin: 20px 0;
}
</style>
