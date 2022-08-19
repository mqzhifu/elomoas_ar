<template>

  <div class="middle-wrap-table">
    <div class="row">


      <div class="col-sm-12">
        <div class="card">
          <div class="header">
            视频文件较大，且声网推送也有延迟，不会实时显示
          </div>
          <div class="body">
            <div class="table-responsive">
            <table class="table center-aligned-table">
              <thead>
                <tr><th>id</th>
                  <th>频道</th>
                  <th>会话ID</th>
                  <th>状态</th>
                  <th>后端状态</th>
                  <th>开始时间</th>
                  <th>结束时间</th>
                  <th>创建时间</th>
                  <th>video_url</th><th>op</th>   </tr>
              </thead>

              <tbody v-for="row in list">
                <tr>
                  <td>{{row.id}}</td>
                  <td>{{row.channel_name}}</td>
                  <td>{{formatDataDefault(row.session_id)}}</td>
                  <td>{{STATUS_DESC[row.status]}}</td>
                  <td>{{SERVER_STATUS_DESC[row.server_status]}}</td>
                  <td>{{formatDate(row.start_time)}}</td>
                  <td>{{formatDate(row.end_time)}}</td>
                  <td>{{formatDate(row.created_at)}}</td>
                  <td>{{formatDataDefault(row.video_url)}}</td>
                  <td><a href="#">生成视频文件</a>&nbsp;<a href="#" :title="row.err_log">错误日志</a></td>

                </tr>
              </tbody>


            </table>
          </div>
          </div>

        </div>
      </div>
    </div>
  </div>

</template>

<script>

import {useStore} from "vuex"

Date.prototype.Format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) { fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)) }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) { fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
  }
  return fmt
}

export default {
  name: "Screen",
  data : function(){
    return {
      list:null,
      STATUS_DESC:{1:"已获取资源ID",2:"已开始",3:"已结束"},
      SERVER_STATUS_DESC:{1:"未处理",2:"处理中",3:"处理成功",4:"处理异常"},
    }
  },
  methods:{
    formatDataDefault : function(data){
        if (!data){
            return "--"
        }
        return data;
    },
    formatDate:function(time){
      if (time !== null && time !== '' && time > 0) {
        time = time + "000"
        time = parseInt(time);
        var date = new Date(time)
        var s = this.formatTimeToStr(date, 'yyyy-MM-dd hh:mm:ss')
        return s
      } else {
        return '--'
      }
    },

    formatTimeToStr :function formatTimeToStr(times, pattern) {
        var d = new Date(times).Format('yyyy-MM-dd hh:mm:ss')
        if (pattern) {
          d = new Date(times).Format(pattern)
        }
        return d.toLocaleString()
    },
  },
  mounted() {
    useStore().commit("SET_MENU_ID",1)

    var p = this.$Server.request("/twin/agora/cloud/record/list",null);
    p.then((res)=>{
        console.log(res);
      if (res.code == 200) {
        var list = res.data;
        this.list = list
        // alert("登陆成功");
        // console.log(res);
        // this.$TokenManager.Set(res.data.token);
        // this.gotoHome();
      }else{
        var msg = "获取列表失败,"+res.msg;
        alert(msg);
        console.log(msg);
        return false;
      }
    });
  },
};
</script>

<style>

.card .header {
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #444;
  padding: 20px;
  position: relative
}

.card .body {
  font-weight: 400;
  color: #444;
  padding: 20px
}

.table-responsive .dt-buttons {
  margin-bottom: 10px
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.middle-wrap-table{
  margin-right: auto;
  margin-left: auto;
}


thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}


</style>