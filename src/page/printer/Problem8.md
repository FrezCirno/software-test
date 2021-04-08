## Problem8

若年销售额（AnnualSales）大于200万且**请假天数(LeaveDays)**不超过10天的情况下，**现金到帐(CashtoAccountRate)**大于等于60%，则**佣金（提成）系数(CommissionRate)**
为7，即**佣金值(Commission)**为销售额除以佣金系数；现金到帐小于60%，佣金不予计算。所有其他情况且现金到帐小于等于85%，则按佣金系数均为6计算佣金，现金到账大于85%，佣金系数按5处理。

根据题意设计流程图并设计测试用例实现白盒测试（White Box Test）

1）语句覆盖，2）判断覆盖，3）条件覆盖，4）判断—条件覆盖，5）条件组合覆盖（测试用例及覆盖表示要清晰）。

![Problem8](https://s1.ax1x.com/2020/07/01/NoYyRg.jpg)

| 属性       | 变量名            |
| ---------- | ----------------- |
| 年销售额   | AnnualSales       |
| 请假天数   | LeaveDays         |
| 现金到账率 | CashtoAccountRate |
| 佣金系数   | CommissionRate    |
| 佣金值     | Commission        |

| 条件                      | 真   | 假   |
| ------------------------- | ---- | ---- |
| AnnualSales > 200         | T1   | F1   |
| LeaveDays <= 10           | T2   | F2   |
| CashtoAccountRate <= 0.85 | T3   | F3   |
| CashtoAccountRate >= 0.60 | T4   | F4   |
| AnnualSales < 0           | T5   | F5   |
| LeaveDays < 0             | T6   | F6   |
| CashtoAccountRate < 0     | T7   | F7   |

| 覆盖组合号 | 组合                                                      |             简记 |
| ---------- | --------------------------------------------------------- | ---------- |
| 1          | AnnualSales > 200, LeaveDays <= 10                        | T1, T2           |
| 2          | AnnualSales > 200, LeaveDays > 10                         | T1, F2           |
| 3          | AnnualSales <= 200, LeaveDays <= 10                       | F1, T2           |
| 4          | AnnualSales <= 200, LeaveDays > 10                        | F1, F2           |
| 5          | CashtoAccountRate  <= 0.85                                |             T3   |
| 6          | CashtoAccountRate  > 0.85                                 |             F3   |
| 7          | CashtoAccountRate  >= 0.6                                 |             T4   |
| 8          | CashtoAccountRate  < 0.6                                  |             F4   |
| 9          | AnnualSales < 0, LeaveDays < 0, CashtoAccountRate < 0    | T5, T6, T7       |
| 10         | AnnualSales < 0, LeaveDays < 0, CashtoAccountRate >= 0   | T5, T6, F7       |
| 11         | AnnualSales < 0, LeaveDays >= 0, CashtoAccountRate >= 0  | T5, F6, F7       |
| 12         | AnnualSales < 0, LeaveDays >= 0, CashtoAccountRate < 0   | T5, F6, T7       |
| 13         | AnnualSales >= 0, LeaveDays < 0, CashtoAccountRate < 0   | F5, T6, T7       |
| 14         | AnnualSales >= 0, LeaveDays < 0, CashtoAccountRate >= 0  | F5, T6, F7       |
| 15         | AnnualSales >= 0, LeaveDays >= 0, CashtoAccountRate >= 0 | F5, F6, F7       |
| 16         | AnnualSales >= 0, LeaveDays >= 0, CashtoAccountRate < 0  | F5, F6, T7       |
