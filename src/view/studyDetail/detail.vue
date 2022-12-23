<template>
  <div>
    <el-row class="el-row">
      <el-col :span="12" class="el-col">
        <div class="title">各系提交比例排名</div>
        <div id="echar1" class="echar" v-loading="isLoading"></div>
      </el-col>
      <el-col :span="12" class="el-col">
        <div class="title">全校每期提交人数统计</div>
        <div id="echar2" class="echar" v-loading="isLoading"></div>
      </el-col>
    </el-row>
    <el-row class="el-row">
      <el-col :span="12" class="el-col">
        <div class="title">全校每期提交人数统计</div>
        <div id="echar3" class="echar" v-loading="isLoading"></div>
      </el-col>
      <el-col :span="12" class="el-col">
        <div class="title">全校各系提交人数</div>
        <div id="echar4" class="echar" v-loading="isLoading"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { getAction } from '@/request/index';
import { useEcharts } from '@/hooks/index';
import { reactive, ref } from 'vue';
let isLoading = ref(true);

var option1 = {
  tooltip: {
    trigger: 'axis',
    // axisPointer: { type: 'cross' }
  },
  xAxis: {
    type: 'category',
    data: [],
    axisTick: {
      alignWithLabel: true
    },
  },
  yAxis: {
    axisLabel: {
      type: 'value',
      name: '百分比%',
      data: [0, 20, 40, 60, 80, 100],
      axisLabel: {
        formatter: '{value} %'
      }
    }
  },
  series:
  {
    data: [],
    type: 'bar',
    smooth: true,
  }
};
var option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'cross' }
  },
  xAxis: {
    type: 'category',
    data: ['第一期', '第二期', '第三期', '第四期', '第五期', '第六期', '第七期', '第八期', '第九期', '第十期'],
    axisTick: {
      alignWithLabel: true
    },
  },
  yAxis: {
    axisLabel: {
      type: 'value',
      name: '全校提交人数',
      data: [1000, 2000, 3000, 4000, 5000, 6000, 7000],
      axisLabel: {
        formatter: '{value} 人'
      }
    }
  },
  series: {
    data: [],
    type: 'line',
    smooth: true,
  }
};

var option3 = {
  series: [
    {
      type: 'pie',
      stillShowZeroSum: false,
      data: [
        {
          value: 30,
          name: '正式党员'
        },
        {
          value: 30,
          name: '群众'
        },
        {
          value: 10,
          name: '预备党员'
        },
        {
          value: 20,
          name: '积极分子'
        },
        {
          name: '团员',
          value: 40
        }
      ],
      radius: '80%'
    }
  ]
};
var option4 = {
  title: {
    left: 'center',
    top: 'center'
  },
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '计算机：335'
        },
        {
          value: 234,
          name: '数学系：234'
        },
        {
          value: 1548,
          name: '文旅系：234'
        },
        {
          value: 1234,
          name: '教育系：234'
        },
        {
          value: 1234,
          name: '智能系：1234'
        },
        {
          value: 1234,
          name: '财经系：1234'
        },
        {
          value: 444,
          name: '机电系：444'
        }
      ],
      radius: ['50%', '80%']
    }
  ]
};

const handleDataFormat = (targetData: any, source: any[], X: string, Y: string): void => {
  targetData.xAxis.data = source.map(item => {
    return item[X];
  })
  targetData.series.data = source.map(item => {
    return (item[Y] * 100);
  })
}

// 发送请求拿去数据
getAction<{
  departmentAllPeriodName: any[],
  departmentPeriodName: any[],
  departmentFacePeriodName: any[]
}>('/greatLearningComplete/statistics', {
  periodName: '特辑4'
}).then(res => {
  const { departmentAllPeriodName, departmentPeriodName, departmentFacePeriodName } = res;
  console.log(departmentFacePeriodName)
  handleDataFormat(option1, departmentAllPeriodName, 'departmentName', 'percentage');
  handleDataFormat(option2, departmentPeriodName, 'departmentName', 'percentage');
  useEcharts('echar1', option1)
  useEcharts('echar2', option2)
  useEcharts('echar3', option3)
  useEcharts('echar4', option4)
  isLoading.value = false;
})
</script>

<style scoped>
.el-row {
  height: 300px;
  text-align: center;
}

.echar,
.el-col {
  width: 100%;
  height: 100%;
}

.title {
  font-weight: bolder;
}
</style>