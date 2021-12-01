<!--文章管理-->
<template>
  <div class="system-user-container">
    <el-card shadow="hover">

      <!--顶部操作栏开始-->
      <div class="top-handler">
        <!--  左侧操作栏开始-->
        <div class="system-user-search mb15">
          <el-input size="small" placeholder="请输入标题" prefix-icon="el-icon-search" style="max-width: 180px"
                    v-model="queryForm.title" clearable></el-input>
          <el-button size="small" type="primary" class="ml10" @click="onQuery">查询</el-button>
        </div>
        <!--  左侧操作栏结束-->

        <!--  右侧操作栏开始-->
        <div class="system-user-search mb15">
          <el-button size="small" type="danger" class="ml10" @click="onDeleteMany">批量删除</el-button>
        </div>
        <!--  右侧操作栏结束-->
      </div>
      <!--顶部操作栏结束-->

      <el-table
          ref="multipleTable"
          :data="tableData.data"
          @selection-change="handleSelectionChange"
          stripe
          style="width: 100%">
        <!--实现多选-->
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="index" label="#" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="用户名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="path" label="操作" width="90">
          <template #default="scope">
            <el-button size="mini" type="text" @click="onRowUpdate(scope.row)">修改</el-button>
            <el-button size="mini" type="text" @click="onRowDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
          @size-change="onHandleSizeChange"
          @current-change="onHandleCurrentChange"
          class="mt15"
          :pager-count="5"
          :page-sizes="[10, 20, 30]"
          v-model:current-page="tableData.param.pageNum"
          background
          v-model:page-size="tableData.param.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script lang="ts">
import {toRefs, reactive, onMounted} from 'vue';

export default {
  name: 'article',
  setup() {
    // 状态：类似react
    const state: any = reactive({
      queryForm: { // 查询表单数据
        title: "", // 标题
      },
      multipleSelection: [], // 多选内容
      tableData: { // 表格数据
        data: [], // 表格数据
        total: 0, // 总数
        loading: false, // 是否加载中
        param: {
          pageNum: 1, // 当前页
          pageSize: 10, // 每页数量
        },
      },
    });

    // 初始化表格数据
    const initTableData = () => {
      const data: Array<object> = [];
      for (let i = 0; i < 20; i++) { // 生成20个模拟数据
        data.push({
          index: i + 1,
          name: `用户${i}`,
        });
      }
      state.tableData.data = data;
      state.tableData.total = state.tableData.data.length;
    };

    // 当前行删除
    const onRowDel = (row: object) => {
      console.log(row);
    };

    // 当前行修改
    const onRowUpdate = (row: object) => {
      console.log(row);
    };

    // 执行查询
    const onQuery = () => {
      console.log("===========查询");
      console.log("===========查询参数", state.queryForm);
    };

    // 多选改变
    const handleSelectionChange = (val: Array<object>) => {
      state.multipleSelection = val
      console.log("多选改变：", state.multipleSelection)
    };

    // 批量删除
    const onDeleteMany = ()=>{
      console.log("要删除的数据有：", state.multipleSelection)
    };

    // 分页改变
    const onHandleSizeChange = (val: number) => {
      state.tableData.param.pageSize = val;
    };

    // 分页改变
    const onHandleCurrentChange = (val: number) => {
      state.tableData.param.pageNum = val;
    };

    // 页面加载时
    onMounted(() => {
      initTableData();
    });

    // api组合完毕，返回
    return {
      onRowDel,
      onRowUpdate,
      onQuery,
      onDeleteMany,
      onHandleSizeChange,
      onHandleCurrentChange,
      handleSelectionChange,
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="scss">

// 顶部操作栏
.top-handler {
  display: flex;
  justify-content: space-between;
}

// sass语法，支持嵌套，还支持变量
.system-user-container {

  // 用户搜索
  .system-user-search {
    text-align: right;
  }

  // 用户头像
  .system-user-photo {
    width: 40px;
    height: 40px;
    border-radius: 100%;
  }
}
</style>
