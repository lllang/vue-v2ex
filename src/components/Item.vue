<template>
  <div class="cell item">
    <table>
      <tbody>
        <tr>
          <td width="48" valign="top" align="center">
            <a href="">
              <img :src="item.member.avatar_mini" alt="" class="avatar" border="0" align="default">
            </a>
          </td>
          <td width="10"></td>
          <td width="auto" valign="middle"><span class="item_title"><a href="">{{item.title}}</a></span>
            <div class="sep5"></div>
            <span class="small fade">
            <div class="votes">
              <li class="fa fa-chevron-up"></li> &nbsp;1 &nbsp;&nbsp; 
            </div>
            <a class="node" href="">{{item.node.title}}</a> &nbsp;•&nbsp; 
            <strong><a href="/member/joyqi">joyqi</a></strong> &nbsp;•&nbsp; 9 分钟前 &nbsp;•&nbsp; 最后回复来自 <strong>
            <a href="/member/tayuo">tayuo</a></strong></span>
          </td>
          <td width="70" align="right" valign="middle">
            <a href="/t/357725#reply36" class="count_livid">{{item.replies}}</a>
          </td>
        </tr>
      </tbody>
    </table>
  {{item.id}}
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ['item'],
  };
</script>

<style>
  div {
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }
  table {
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 0px;
    width: 100%;
    display: table;
    border-collapse: separate;
    border-color: grey;
  }
  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
  }
  .avatar {
    border-radius: 4px;
  }
  .item_title {
    font-size: 16px;
    line-height: 130%;
    text-shadow: 0px 1px 0px #fff;
    word-wrap: break-word;
    hyphens: auto;
  }
  .sep5 {
    height: 5px;
  }
  .small {
    font-size: 11px;
  }
  .fade {
    color: #ccc;
  }
  .votes {
    display: inline-block;
  }
  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
  .node {
    background-color: #f5f5f5;
    font-size: 10px;
    line-height: 10px;
    display: inline-block;
    padding: 4px 4px 4px 4px;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
    text-decoration: none;
    color: #999;
  }
</style>
