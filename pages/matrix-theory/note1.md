# 1　线性空间引论

## 1.1　线性空间

> **定义 1.1（线性空间）**　设 $(V, +)$ 是一个加群，$\mathbb{F}$ 是一个数域．定义 $\mathbb{F}$ 中的数与 $V$ 中元素的数乘运算，使得 $\forall \lambda \in \mathbb{F}, \boldsymbol{\alpha} \in V$，有唯一的 $\lambda\boldsymbol{\alpha} \in V$ 与之对应，且满足：
>
> 1. $\lambda(\boldsymbol{\alpha} + \boldsymbol{\beta}) = \lambda\boldsymbol{\alpha} + \lambda\boldsymbol{\beta}$
>
> 2. $(\lambda + \mu)\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha} + \mu\boldsymbol{\alpha}$
>
> 3. $\lambda(\mu\boldsymbol{\alpha}) = (\lambda\mu)\boldsymbol{\alpha}$
>
> 4. $1\boldsymbol{\alpha} = \boldsymbol{\alpha}$
>
> 则称 $V$ 为数域 $\mathbb{F}$ 上的**线性空间**，记为 $(V, +, \cdot)$．$V$ 中元素称为**向量**，$\mathbb{F}$ 中元素称为**标量**．

当 $\mathbb{F} = \mathbb{R}$ 时称为**实线性空间**；当 $\mathbb{F} = \mathbb{C}$ 时称为**复线性空间**．

> **定义 1.2（线性组合）**　对于 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n \in V$ 以及 $\boldsymbol{\beta} \in V$，若存在 $\lambda_1, \dots, \lambda_n \in \mathbb{F}$ 使得
>
> $$
> \boldsymbol{\beta} = \lambda_1\boldsymbol{\alpha}_1 + \dots + \lambda_n\boldsymbol{\alpha}_n
> $$
>
> 则称 $\boldsymbol{\beta}$ 是 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 的**线性组合**，或称 $\boldsymbol{\beta}$ 可由 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ **线性表示**．

## 1.2　线性子空间

> **定义 1.3（子空间）**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，$W$ 是 $V$ 的非空子集．若 $W$ 中的向量关于 $V$ 的加法和数乘运算也构成 $\mathbb{F}$ 上的线性空间，则称 $W$ 是 $V$ 的**子空间**．

仅包含 $\boldsymbol{0}$ 的集合也是线性空间，$\left\{ \boldsymbol{0} \right\}$ 称为**零子空间**．子空间 $V$ 和 $\left\{ \boldsymbol{0} \right\}$ 称为 $V$ 的平凡子空间．

线性空间必然含有 $\boldsymbol{0}$，因此 $\mathbb{R}^3$ 中不过原点的平面不是线性空间．$\mathbb{R}^2 \not\subseteq \mathbb{R}^3$，因此 $\mathbb{R}^2$ 不是 $\mathbb{R}^3$ 的子空间．

> **定理 1.1**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，$W$ 是 $V$ 的非空子集．以下命题等价：
>
> 1. $W$ 是 $V$ 的子空间．
>
> 2. $\forall \lambda \in \mathbb{F}, \boldsymbol{\alpha} \in W$，有 $k\boldsymbol{\alpha} \in W$．并且 $\forall \boldsymbol{\alpha}, \boldsymbol{\beta} \in W$，有 $\boldsymbol{\alpha} + \boldsymbol{\beta} \in W$．
>
> 3. $\forall \lambda, \mu \in \mathbb{F}$，$\forall \boldsymbol{\alpha}, \boldsymbol{\beta} \in W$，有 $\lambda\boldsymbol{\alpha} + \mu\boldsymbol{\beta} \in W$．

> **定义 1.4（子空间的交与和）**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，$W_1, W_2$ 是 $V$ 的子空间．则 $W_1$ 与 $W_2$ 的交定义为
>
> $$
> W_1\cap W_2 = \left\{ \boldsymbol{\alpha} \,\middle|\, \boldsymbol{\alpha} \in W_1, \boldsymbol{\alpha} \in W_2 \right\}
> $$
>
> $W_1$ 与 $W_2$ 的和定义为
>
> $$
> W_1 + W_2 = \left\{ \boldsymbol{\alpha}_1 + \boldsymbol{\alpha}_2 \,\middle|\, \boldsymbol{\alpha}_1 \in W_1, \boldsymbol{\alpha}_2 \in W_2 \right\}
> $$
>
> 可以验证 $W_1$ 与 $W_2$ 的交与和也是 $V$ 的子空间．

注意 $W_1$ 与 $W_2$ 的并集*不一定*是 $V$ 的子空间．

> **定义 1.5（张成空间）**　设 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是线性空间 $V$ 中的一组向量，由 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 张成的子空间为
>
> $$
> \operatorname{span}(\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n) = \left\{ \lambda_1\boldsymbol{\alpha}_1 + \dots + \lambda_n\boldsymbol{\alpha}_n \,\middle|\, \lambda_i \in \mathbb{F}, i = 1, \dots, n \right\}
> $$

> **定义 1.6（列空间，值空间，像空间）**　设 $A \in \mathbb{C}^{m\times n}$，矩阵 $A$ 的**列空间**（值空间，像空间）定义为
>
> $$
> R(A) = \left\{ \boldsymbol{y} \in \mathbb{C}^m \,\middle|\, \boldsymbol{y} = A\boldsymbol{x}, \boldsymbol{x} \in \mathbb{C}^n \right\}
> $$
>
> 若记 $A = [\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n]$ 则 $R(A) = \operatorname{span}(\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n)$．

> **定义 1.7（零空间，核空间）**　设 $A \in \mathbb{C}^{m\times n}$，矩阵 $A$ 的**零空间**（核空间）定义为 $A\boldsymbol{x} = \boldsymbol{0}$ 的解集，即
>
> $$
> N(A) = \left\{ \boldsymbol{x}\in \mathbb{C}^n \,\middle|\, A\boldsymbol{x} = \boldsymbol{0} \right\}
> $$

## 1.3　基与坐标

> **定义 1.8（线性相关，线性无关）**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，$\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是 $V$ 中的一组向量．若方程
>
> $$
> \lambda_1\boldsymbol{\alpha}_1 + \dots + \lambda_n\boldsymbol{\alpha}_n = \boldsymbol{0} \qquad (\lambda_i \in \mathbb{F}, i = 1, \dots, n)
> $$
>
> 仅有全零解 $\lambda_1 = \dots = \lambda_n = 0$，则称向量组 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是**线性无关**的；否则称 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是**线性相关**的．

单个零向量线性相关．单个非零向量线性无关．

> **定义 1.9（极大线性无关组，秩）**　设 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是线性空间 $V$ 中的一组向量．若存在 $r$ 个线性无关的向量 $\boldsymbol{\alpha}_{i_1}, \dots, \boldsymbol{\alpha}_{i_r}$ 使得 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 中任一向量均可由 $\boldsymbol{\alpha}_{i_1}, \dots, \boldsymbol{\alpha}_{i_r}$ 线性表示，则称 $\boldsymbol{\alpha}_{i_1}, \dots, \boldsymbol{\alpha}_{i_r}$ 是 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 的**极大线性无关组**．极大线性无关组中的向量数量 $r$ 称为 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 的**秩**，记为 $\operatorname{rank}[\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n] = r$．

极大线性无关组不一定唯一．

> **定义 1.10（基）**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，$\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是线性空间 $V$ 中的一组线性无关的向量，若 $V$ 中任一向量均可由 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 线性表示，则称 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$ 是 $V$ 的一组**基**．

单位矩阵 $I = [\boldsymbol{e}_1, \dots, \boldsymbol{e}_n]$ 的各列 $\boldsymbol{e}_1, \dots, \boldsymbol{e}_n$ 构成 $\mathbb{R}^n$（或 $\mathbb{C}^n$）的一组基，称为 $\mathbb{R}^n$ 的**标准基**．

> **定理 1.2**　设 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是线性空间 $V$ 的一组基，则 $V$ 中的任一向量 $\boldsymbol{x}$ 均可由基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 线性表示．

> **定义 1.11（坐标）**　设 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是线性空间 $V$ 的一组基，对于任意向量 $\boldsymbol{x} \in V$ 存在 $\alpha_1, \dots, \alpha_n \in \mathbb{F}$ 使得
>
> $$
> \boldsymbol{x} = \sum_{i=1}^n \alpha_i\boldsymbol{x}_i = [\boldsymbol{x}_1, \dots, \boldsymbol{x}_n]\begin{bmatrix}\alpha_1\\ \vdots \\ \alpha_n\end{bmatrix}
> $$
>
> 则称 $[\alpha_1,\dots, \alpha_n]^\mathsf{T} \in \mathbb{F}^n$ 是 $\boldsymbol{x}$ 在基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 下的**坐标**，由 $\boldsymbol{x}$ 与基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 唯一确定．

> **定义 1.12（维数）**　线性空间 $V$ 的基所包含的向量数量称为 $V$ 的**维数**，记为 $\dim V$．当 $\dim V\leq \infty$ 时，称 $V$ 为**有限维空间**；否则称 $V$ 为**无限维空间**，记 $\dim V = \infty$．

> **推论 1.1**　设 $V$ 是 $n$ 维线性空间，$V$ 中任意 $n$ 个线性无关向量均构成 $V$ 的一组基，且任一线性无关向量组 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_r\,(1\leq r < n)$ 可扩充为 $V$ 的一组基．

> **定理 1.3（维数定理）**　设 $W_1, W_2$ 是线性空间 $V$ 的两个子空间，则
>
> $$
> \dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1\cap W_2)
> $$

这即是容斥原理．

> **定义 1.13（过渡矩阵）**　设 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 与 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 是 $\mathbb{F}$ 上线性空间 $V$ 的两组基．将 $\boldsymbol{y}_i$ 在基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 下的坐标依次排成矩阵 $A$ 的各列，即有
>
> $$
> [\boldsymbol{y}_1, \dots, \boldsymbol{y}_n] = [\boldsymbol{x}_1, \dots, \boldsymbol{x}_n]A
> $$
>
> 其中 $A \in \mathbb{F}^{n\times n}$，称 $A$ 是由基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 到基 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 的**过渡矩阵**（或变换矩阵）．

> **推论 1.2**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，$A$ 是基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 到基 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 的过渡矩阵．
>
> 1. 过渡矩阵 $A$ 可逆．
>
> 2. 基 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 到基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 的过渡矩阵为 $A^{-1}$．
>
> 3. 若 $\boldsymbol{z}\in V$ 在基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 下的坐标为 $\boldsymbol{\alpha} = [\alpha_1, \dots, \alpha_n]^\mathsf{T}$，在基 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 下的坐标为 $\boldsymbol{\beta} = [\beta_1, \dots, \beta_n]^\mathsf{T}$，则 $\boldsymbol{\alpha} = A \boldsymbol{\beta}$．

由于向量 $\boldsymbol{z}$ 在一组基上的坐标是唯一的，坐标变换的关系可以由下式导出

$$
\begin{aligned}
\boldsymbol{z} &= [\boldsymbol{y}_1, \dots, \boldsymbol{y}_n]\boldsymbol{\beta} \\
&= ([\boldsymbol{x}_1, \dots, \boldsymbol{x}_n]A)\boldsymbol{\beta} \\
&= [\boldsymbol{x}_1, \dots, \boldsymbol{x}_n]{\color{cyan}(A\boldsymbol{\beta})} \\
&= [\boldsymbol{x}_1, \dots, \boldsymbol{x}_n]{\color{cyan}\boldsymbol{\alpha}}
\end{aligned}
\quad\implies\quad \boldsymbol{\alpha} = A\boldsymbol{\beta}
$$

## 1.4　内积空间

> **定义 1.14（内积空间）**　设 $\mathbb{F} = \mathbb{R}$ 或 $\mathbb{C}$，$V$ 是 $\mathbb{F}$ 上的线性空间．若 $\forall \boldsymbol{\alpha}, \boldsymbol{\beta} \in V$ 定义了标量 $(\boldsymbol{\alpha}, \boldsymbol{\beta})\in \mathbb{F}$，满足
>
> - 共轭对称性：$(\boldsymbol{x}, \boldsymbol{y}) = \overline{(\boldsymbol{y}, \boldsymbol{x})}$ 对任意 $\boldsymbol{x}, \boldsymbol{y} \in V$ 成立；
>
> - 共轭双线性（可加性与齐次性）：$(\alpha \boldsymbol{x} + \beta \boldsymbol{y}, \boldsymbol{z}) = \alpha(\boldsymbol{x}, \boldsymbol{z}) + \beta(\boldsymbol{y}, \boldsymbol{z})$ 对任意 $\boldsymbol{x}, \boldsymbol{y}, \boldsymbol{z} \in V$，$\alpha, \beta \in \mathbb{F}$ 成立；
>
> - 正定性：$(\boldsymbol{x}, \boldsymbol{x}) > 0$ 对任意 $\boldsymbol{0}\neq \boldsymbol{x} \in V$ 成立．
>
> 则称 $V$ 是**内积空间**，$(\boldsymbol{x}, \boldsymbol{y})$ 称为 $\boldsymbol{x}$ 与 $\boldsymbol{y}$ 的**内积**．
>
> 有限维的实内积空间称为**欧几里得空间**．有限维的复内积空间称为**酉空间**．

若 $(\boldsymbol{x}, \boldsymbol{y}) = \boldsymbol{y}^\mathsf{H} A \boldsymbol{x}$ 能定义内积，则 $A$ 需满足 $A = A^\mathsf{H}$，且 $\boldsymbol{x}^\mathsf{H} A\boldsymbol{x} > 0$ 对于任意 $\boldsymbol{0} \neq \boldsymbol{x} \in \mathbb{C}^n$ 成立．

> **定义 1.15（Hermite 矩阵）**　设矩阵 $A \in \mathbb{C}^{n\times n}$，若 $A^\mathsf{H} = A$ 则称 $A$ 是 **Hermite 矩阵**；若 $A^\mathsf{H} = -A$ 则称 $A$ 是**反 Hermite 矩阵**．其中 $A^\mathsf{H}$ 是 $A$ 的共轭转置．

> **定义 1.16（正定，半正定，不定）**　设 $A \in \mathbb{C}^{n\times n}$ 是 Hermite 矩阵，定义**复二次型** $f(\boldsymbol{x}) = \boldsymbol{x}^\mathsf{H} A\boldsymbol{x}$．
>
> 若 $\forall \boldsymbol{0}\neq \boldsymbol{x}\in \mathbb{C}^n$ 有 $f(\boldsymbol{x}) > 0$，则称 $f(\boldsymbol{x})$ 是**正定二次型**，$A$ 是**正定矩阵**．
>
> 若 $\forall \boldsymbol{0}\neq \boldsymbol{x}\in \mathbb{C}^n$ 有 $f(\boldsymbol{x}) \geq 0$，则称 $f(\boldsymbol{x})$ 是**半正定二次型**，$A$ 是**半正定矩阵**．
>
> 若 $\forall \boldsymbol{0}\neq \boldsymbol{x}\in \mathbb{C}^n$ 有 $f(\boldsymbol{x}) < 0$，则称 $f(\boldsymbol{x})$ 是**负定二次型**，$A$ 是**负定矩阵**．
>
> 若 $\forall \boldsymbol{0}\neq \boldsymbol{x}\in \mathbb{C}^n$ 有 $f(\boldsymbol{x}) \leq 0$，则称 $f(\boldsymbol{x})$ 是**半负定二次型**，$A$ 是**半负定矩阵**．

> **定义 1.17（Gram 矩阵）**　设 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是内积空间 $V$ 中的一组基，则称
>
> $$
> G = \left((\boldsymbol{x}_i, \boldsymbol{x}_j)\right)_{n\times n} = \begin{bmatrix}
> (\boldsymbol{x}_1, \boldsymbol{x}_1) & (\boldsymbol{x}_1, \boldsymbol{x}_2) & \cdots & (\boldsymbol{x}_1, \boldsymbol{x}_n) \\
> (\boldsymbol{x}_2, \boldsymbol{x}_1) & (\boldsymbol{x}_2, \boldsymbol{x}_2) & \cdots & (\boldsymbol{x}_2, \boldsymbol{x}_n) \\
> \vdots & \vdots & \ddots & \vdots \\
> (\boldsymbol{x}_n, \boldsymbol{x}_1) & (\boldsymbol{x}_n, \boldsymbol{x}_2) & \cdots & (\boldsymbol{x}_n, \boldsymbol{x}_n) \\
> \end{bmatrix}
> $$
>
> 为 $V$ 关于基 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 的**度量矩阵**（或 Gram 矩阵），记为 $G(\boldsymbol{x}_1, \dots, \boldsymbol{x}_n)$．

内积空间中内积与 Gram 矩阵一一对应．Gram 矩阵是正定 Hermite 阵．

对于欧几里得空间中 $\mathbb{R}^n$ 中的一组向量 $\alpha_1, \dots, \alpha_n$，设这些向量构成的 $n$ 维棱柱的体积为 $S$，则 $S = \left|\det [\alpha_1, \dots, \alpha_n]\right|$，$S^2 = \det G(\alpha_1, \dots, \alpha_n)$．例如对于 $\mathbb{R}^2$，以向量 $x_1, x_2$ 为边的平行四边形，其面积为 $\left|\det [x_1, x_2]\right|$，面积的平方为 $\det G(x_1, x_2)$．

> **推论 1.3**　设 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是内积空间 $V$ 中的一组基．对于任意 $\boldsymbol{a}, \boldsymbol{b} \in V$，设 $\boldsymbol{\alpha}, \boldsymbol{\beta}$ 分别为 $\boldsymbol{a}, \boldsymbol{b}$ 在这组基下的坐标，则
>
> $$
> (\boldsymbol{a}, \boldsymbol{b}) = \sum_{i=1}^n\sum_{j=1}^n \alpha_i\overline{\beta_j}(\boldsymbol{x}_i, \boldsymbol{x}_j) = \boldsymbol{\beta}^\mathsf{H} G(\boldsymbol{x}_1, \dots, \boldsymbol{x}_n) \boldsymbol{\alpha}
> $$

> **定义 1.18（模）**　设 $\boldsymbol{x}$ 是内积空间 $V$ 中的向量，$\sqrt{(\boldsymbol{x}, \boldsymbol{x})}$ 称为 $\boldsymbol{x}$ 的**长度**或**模**，记为 $\Vert \boldsymbol{x}\Vert$．长度为 $1$ 的向量称为**单位向量**．

> **推论 1.4**　长度满足以下性质：
>
> 1. 正定性：$\Vert \boldsymbol{x}\Vert > 0$ 对任意 $\boldsymbol{0}\neq \boldsymbol{x} \in V$ 成立；
>
> 2. 齐次性：$\Vert k\boldsymbol{x}\Vert = \vert k\vert\cdot\Vert\boldsymbol{x}\Vert$ 对任意 $\boldsymbol{x}\in V$，$k\in \mathbb{F}$ 成立；
>
> 3. 平行四边形法则：$\Vert \boldsymbol{x}+\boldsymbol{y}\Vert^2 + \Vert \boldsymbol{x}-\boldsymbol{y}\Vert^2 = 2(\Vert \boldsymbol{x}\Vert^2 + \Vert \boldsymbol{y}\Vert^2)$ 对任意 $\boldsymbol{x}, \boldsymbol{y}\in V$ 成立；
>
> 4. 三角不等式：$\Vert \boldsymbol{x}+\boldsymbol{y}\Vert \leq \Vert\boldsymbol{x}\Vert + \Vert\boldsymbol{y}\Vert$ 对任意 $\boldsymbol{x}, \boldsymbol{y}\in V$ 成立．

> **定理 1.4（Cauchy–Schwarz 不等式）**　设 $V$ 是 $\mathbb{F}$ 上的内积空间，$\forall \boldsymbol{x}, \boldsymbol{y} \in V$ 有
>
> $$
> |(\boldsymbol{x}, \boldsymbol{y})| \leq \Vert\boldsymbol{x}\Vert \Vert\boldsymbol{y}\Vert
> $$
>
> 当且仅当 $\boldsymbol{x}, \boldsymbol{y}$ 线性相关时等号成立．

> **定义 1.19（向量夹角）**　设 $V$ 是欧几里得空间，对于 $V$ 中任意向量 $\boldsymbol{x}$ 和 $\boldsymbol{y}$，定义向量 $\boldsymbol{x}, \boldsymbol{y}$ 的**夹角**为
>
> $$
> \alpha = \langle\boldsymbol{x},\boldsymbol{y}\rangle = \arccos{(\boldsymbol{x},\boldsymbol{y})\over \Vert\boldsymbol{x}\Vert \Vert\boldsymbol{y}\Vert} \in [0, \pi]
> $$

> **定义 1.20（正交）**　设 $V$ 是内积空间，对于 $V$ 中的向量 $\boldsymbol{x}, \boldsymbol{y}$，若 $(\boldsymbol{x},\boldsymbol{y}) = 0$ 则称向量 $\boldsymbol{x}$ 与 $\boldsymbol{y}$ **正交**，记为 $\boldsymbol{x} \perp \boldsymbol{y}$．若一组非零向量两两正交，则称为**正交向量组**．单位向量构成的正交向量组称为**标准正交向量组**．

零向量与任何向量正交，因此正交向量组要求均为非零向量．由下式

$$
\begin{aligned}
\Vert\boldsymbol{x} + \boldsymbol{y}\Vert^2 &= (\boldsymbol{x} + \boldsymbol{y}, \boldsymbol{x} + \boldsymbol{y}) \\
&= (\boldsymbol{x}, \boldsymbol{x}) + (\boldsymbol{y}, \boldsymbol{y}) + (\boldsymbol{x}, \boldsymbol{y}) + (\boldsymbol{y}, \boldsymbol{x}) \\
&= \Vert\boldsymbol{x}\Vert^2 + \Vert\boldsymbol{y}\Vert^2 + (\boldsymbol{x}, \boldsymbol{y}) + (\boldsymbol{y}, \boldsymbol{x})
\end{aligned}
$$

可以得到当且仅当 $\Vert\boldsymbol{x} + \boldsymbol{y}\Vert^2 = \Vert\boldsymbol{x}\Vert^2 + \Vert\boldsymbol{y}\Vert^2$ 时有 $\boldsymbol{x}\perp\boldsymbol{y}$．

> **定理 1.5**　正交向量组线性无关．

**证**　设 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是内积空间 $V$ 的正交向量组．对于方程

$$
\sum_{i=1}^n \lambda_i\boldsymbol{x}_i = \boldsymbol{0}
$$

依次以 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 与方程两端作内积有

$$
\lambda_k(\boldsymbol{x}_k,\boldsymbol{x}_k) = \sum_{i=1}^n (\lambda_i\boldsymbol{x}_i,\boldsymbol{x}_k) = (\boldsymbol{0}, \boldsymbol{x}_k) = 0
$$

于是 $\lambda_1, \dots, \lambda_n$ 均为 $0$，$\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 线性无关． $\square$

> **推论 1.5**　设 $V$ 是 $n$ 维内积空间，$V$ 中的正交向量组所包含的向量数量不超过 $n$．

> **定义 1.21（正交基）**　设 $V$ 是 $n$ 维内积空间，由 $V$ 中 $n$ 个向量组成的正交向量组称为**正交基**．由单位向量组成的正交基称为**标准正交基**．

> **定义 1.22（集合正交）**　设 $V$ 是内积空间，$W$ 是 $V$ 的子集．若 $\forall \boldsymbol{y} \in W, \boldsymbol{x} \in V$ 有 $\boldsymbol{x}\perp \boldsymbol{y}$，则称 $\boldsymbol{x}$ 正交于集合 $W$，记作 $\boldsymbol{x}\perp W$．
>
> 设 $W_1, W_2$ 是 $V$ 的子集，若 $\forall \boldsymbol{x} \in W_1, \boldsymbol{y} \in W_2$ 有 $\boldsymbol{x}\perp \boldsymbol{y}$，则称 $W_1$ 与 $W_2$ 正交，记作 $W_1\perp W_2$．

> **定义 1.23（子空间正交补）**　设 $W$ 是内积空间 $V$ 的线性子空间，则 $W^\perp = \left\{ \boldsymbol{x}\in V \,\middle|\, \boldsymbol{x}\perp W \right\}$ 称为 $W$ 的**正交补**．

> **定理 1.6**　设 $W$ 是内积空间 $V$ 的线性子空间，则 $W^\perp$ 也是 $V$ 的线性子空间，并且 $V = W + W^\perp$．

## 1.5　直和与投影

> **定义 1.24（直和，正交直和）**　设 $W_1$ 与 $W_2$ 是线性空间 $V$ 的子空间，若和空间 $W_1 + W_2$ 中任意向量均唯一地表示成 $W_1$ 中的一个向量与 $W_2$ 中的一个向量之和，则称 $W_1 + W_2$ 是 $W_1$ 与 $W_2$ 的**直和**，记为 $W_1 \dotplus W_2$．
>
> 若 $V = W_1 \dotplus W_2$，则称 $V = W_1 \dotplus W_2$ 为 $V$ 的**直和分解**．
>
> 若 $W_1\perp W_2$，则称 $W_1 \dotplus W_2$ 是 $W_1$ 与 $W_2$ 的**正交直和**，记为 $W_1 \oplus W_2$．

> **定理 1.7**　设 $W_1$ 与 $W_2$ 是线性空间 $V$ 的两个子空间，则以下命题等价：
>
> 1. $W_1 + W_2$ 是直和；
>
> 2. $W_1 + W_2$ 中零元素表示方法唯一；
>
> 3. $W_1\cap W_2 = \left\{ \boldsymbol{0} \right\}$；
>
> 4. $\dim (W_1 + W_2) = \dim W_1 + \dim W_2$．

> **定理 1.8**　若子空间 $W_1 \perp W_2$，则 $W_1 + W_2 = W_1 \oplus W_2$．

> **定理 1.9**　设 $A \in \mathbb{C}^{n\times n}$，则 $N(A)\oplus R(A^\mathsf{H}) = \mathbb{C}^n$ 且 $R(A^\mathsf{H}) = (N(A))^\perp$．

> **定义 1.25（投影，正交投影）**　设 $W_1$ 与 $W_2$ 是线性空间 $V$ 的子空间，且 $V = W_1\dotplus W_2$．对任意向量 $\boldsymbol{x} \in V$ 均可唯一地分解为 $\boldsymbol{x} = \boldsymbol{y} + \boldsymbol{z}$，其中 $\boldsymbol{y} \in W_1, \boldsymbol{z} \in W_2$，此时称 $\boldsymbol{y}$ 为 $\boldsymbol{x}$ 在 $W_1$ 上的**投影**．
>
> 特别地，若 $V = W_1 \oplus W_2$，则称向量 $\boldsymbol{y}$ 为 $\boldsymbol{x}$ 在 $W_1$ 上的**正交投影**．

> **推论 1.6**　若 $W$ 是 $V$ 的子空间，$\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是 $W$ 的一组正交基．$V$ 中任一向量 $\boldsymbol{y}$ 均可唯一地表示为
>
> $$
> \boldsymbol{y} = \text{Proj}_W\boldsymbol{y} + \text{Proj}_{W^\perp}\boldsymbol{y}
> $$
>
> 其中 $\text{Proj}_W\boldsymbol{y}$ 为向量 $\boldsymbol{y}$ 在 $W$ 上的正交投影．且有
>
> $$
> \text{Proj}_W\boldsymbol{y} = \sum_{i=1}^n {(\boldsymbol{y}, \boldsymbol{x}_i)\over (\boldsymbol{x}_i, \boldsymbol{x}_i)}\boldsymbol{x}_i
> $$
>
> 特别地，当 $\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是 $W$ 的一组标准正交基时，$(\boldsymbol{x}_i, \boldsymbol{x}_i) = 1$，因此
>
> $$
> \text{Proj}_W\boldsymbol{y} = \sum_{i=1}^n (\boldsymbol{y}, \boldsymbol{x}_i)\boldsymbol{x}_i
> $$

> **定理 1.10（Gram–Schmidt 正交化）**　有限维内积空间必然存在标准正交基．

**证**　对于 $n$ 维内积空间 $V$，$\boldsymbol{x}_1, \dots, \boldsymbol{x}_n$ 是 $V$ 的一组基，依 Gram–Schmidt 正交化，依次取

$$
\begin{cases}
\boldsymbol{y}_1 = \boldsymbol{x}_1 \\
\displaystyle\boldsymbol{y}_k = \boldsymbol{x}_k - \sum_{i=1}^{k-1} {(\boldsymbol{x}_k, \boldsymbol{y}_i)\over (\boldsymbol{y}_i, \boldsymbol{y}_i)}\boldsymbol{y}_i & (1 < k\leq n)
\end{cases}
$$

则 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 是 $V$ 的一组正交基．若取

$$\boldsymbol{\varepsilon}_i = {\boldsymbol{y}_i\over \Vert\boldsymbol{y}_i\Vert} \quad (1\leq i\leq n)$$

则 $\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 是 $V$ 的一组标准正交基． $\square$
