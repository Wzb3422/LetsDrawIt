# 二重「绘」
2019 家园工作室推介会小游戏
## 流程分析
1. 用户登录认证
   + 姓名 学号
   + **验证码**
2. 查看游戏说明

3. 开始匹配

4. 匹配结果
   + 成功
     + 画一半
   + 失败？
     失败
     + 成为独立创作人 画整个
5. 开始绘制
   + 倒计时开始
6. 绘制完成 
7. 查看结果
   + 成功：查看两半合体结果
   + 失败：查看自己的结果
8. 查看大家的结果
   + 给作品点赞
   + 最下面的控制流程按钮能受后台控制
   + 只有5个赞 点赞超过会触发提示
## 技术问题
+ 验证码验证的实现
  + 使用滑动验证码实现
+ 代码分割 异步引入
  + 
+ 基于 Websocket 的匹配 通讯的实现
+ 倒计时的实现 应该是基于 Websocket 的