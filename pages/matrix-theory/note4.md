## 4　矩阵分析

### 4.1　向量范数

> **定义 4.1（向量范数）**　设 $V$ 是 $\mathbb{F}$ 上的线性空间，若对任意向量 $\boldsymbol{x}\in V$，$\Vert \boldsymbol{x}\Vert$ 是以 $\boldsymbol{x}$ 为自变量的实值函数，且满足：
>
> 1. 正定性：$\Vert \boldsymbol{x} \Vert > 0 $ 对任意 $\boldsymbol{0} \neq \boldsymbol{x} \in V$ 成立；
>
> 2. 齐次性：$\Vert k\boldsymbol{x}\Vert = |k|\cdot \Vert \boldsymbol{x}\Vert$ 对任意 $\boldsymbol{x}\in V, k\in\mathbb{F}$ 成立；
>
> 3. 三角不等式：$\Vert \boldsymbol{x} + \boldsymbol{y} \Vert \leq \Vert \boldsymbol{x} \Vert + \Vert \boldsymbol{y} \Vert$ 对任意 $\boldsymbol{x}, \boldsymbol{y}\in V$ 成立．
>
> 则称 $\Vert x\Vert$ 是向量 $x$ 的**范数**，$V$ 是 $\mathbb{F}$ 上的**赋范线性空间**，记为 $(V, \Vert\cdot\Vert)$．

内积空间是赋范线性空间．

> **定义 4.2（$p$–范数）**　对于任意 $\boldsymbol{x} = [x_1, \dots, x_n]^\mathsf{T} \in \mathbb{C}^n$，对于 $1\leq p\leq +\infty$ 定义
>
> $$
> \Vert \boldsymbol{x} \Vert_p = \left(\sum_{i=1}^n |x_i|^p \right)^{1\over p}
> $$
>
> 则 $\Vert \boldsymbol{x}\Vert_p$ 是向量 $\boldsymbol{x}$ 的范数，称为 $p$–范数．

$\Vert \boldsymbol{x}\Vert_p$ 关于 $p$ 连续且单调递减．

> **推论 4.1（1–范数，2–范数，$\infty$–范数）**　对于任意 $\boldsymbol{x} = [x_1, \dots, x_n]^\mathsf{T} \in \mathbb{C}^n$：
>
> - **$1$–范数**为：
>    $$
>    \Vert \boldsymbol{x}\Vert_1 = \sum_{i=1}^n |x_i|
>    $$
>
> - **$2$–范数**（或称欧几里得范数）为：
>    $$
>    \Vert \boldsymbol{x}\Vert_2 = \left(\sum_{i=1}^n |x_i|^2\right)^{1\over 2} = \sqrt{\boldsymbol{x}^\mathsf{H} x}
>    $$
>
> - **$\infty$–范数**为：
>    $$
>    \Vert \boldsymbol{x}\Vert_\infty = \lim_{p\to+\infty} \Vert \boldsymbol{x}\Vert_p = \lim_{p\to+\infty} \left(\sum_{i=1}^n |x_i|^p \right)^{1\over p} = \max_{1\leq i\leq n} |x_i|
>    $$

> **定理 4.1（Hölder 不等式）**　设 $p, q > 1$ 且 ${1\over p} + {1\over q} = 1$，则对任意 $a_1, \dots, a_n \in \mathbb{R}^+$ 与 $b_1, \dots, b_n \in \mathbb{R}^+$ 有：
>
> $$
> \sum_{i=1}^n a_i b_i \leq \left(\sum_{i=1}^n a_i^p\right)^{1\over p} \left(\sum_{i=1}^n b_i^q\right)^{1\over q}
> $$

> **定理 4.2（Minkowski 不等式）**　设 $p\geq 1$，则对任意 $a_1, \dots, a_n \in \mathbb{R}^+$ 与 $b_1, \dots, b_n \in \mathbb{R}^+$ 有：
>
> $$
> \left(\sum_{i=1}^n (a_i + b_i)^p\right)^{1\over p} \leq \left(\sum_{i=1}^n a_i^p\right)^{1\over p} + \left(\sum_{i=1}^n b_i^p\right)^{1\over p}
> $$

> **定理 4.3**　线性空间 $V$ 中任一范数 $\Vert \boldsymbol{x} \Vert$ 都是其坐标的连续函数．

> **定义 4.3（范数等价）**　设 $V$ 是数域 $\mathbb{F}$ 上的*有限维*线性空间，$\Vert \boldsymbol{x}\Vert_\alpha$ 和 $\Vert \boldsymbol{x}\Vert_\beta$ 是 $V$ 中任意的两个向量范数．若存在 $k_1, k_2 > 0$ 使得对于任意 $\boldsymbol{x}\in V$ 都有
>
> $$
> k_1\Vert \boldsymbol{x}\Vert_\beta \leq \Vert \boldsymbol{x}\Vert_\alpha \leq k_2\Vert \boldsymbol{x}\Vert_\beta
> $$
>
> 则称范数 $\Vert \boldsymbol{x}\Vert_\alpha$ 与 $\Vert \boldsymbol{x}\Vert_\beta$ **等价**．

> **定理 4.4**　*有限维*线性空间中的任意向量范数都是等价的．

**证**　设 $D = \left\{ x \,\middle|\, \Vert x\Vert_2 = 1 \right\}$，$\Vert \boldsymbol{x}\Vert_\alpha$ 与 $\Vert \boldsymbol{x}\Vert_\beta$ 是任意两个向量范数，$f_\alpha(x) = \Vert x\Vert_\alpha$．在 $D$ 上连续函数 $f_\alpha(x)$ 有最小值 $m_\alpha$ 与最大值 $M_\alpha$，于是对于任意 $x \neq 0$ 有

$$
m_\alpha \leq \left\Vert{x\over \Vert x\Vert_2}\right\Vert_\alpha \leq M_\alpha
\;\implies\;
m_\alpha \Vert x\Vert_2 \leq \Vert x\Vert_\alpha \leq M_\alpha \Vert x\Vert_2
$$

并且依范数的正定性有 $0 < m_\alpha \leq M_\alpha$．同理对于 $\Vert x\Vert_\beta$ 也存在 $0 < m_\beta \leq M_\beta$ 使得 $m_\beta \Vert x\Vert_2 \leq \Vert x\Vert_\beta \leq M_\beta \Vert x\Vert_2$，于是取 $m = {m_\alpha \over M_\beta}, M = {M_\alpha\over m_\beta}$ 即有 $m\Vert \boldsymbol{x}\Vert_\beta \leq \Vert \boldsymbol{x}\Vert_\alpha \leq M\Vert \boldsymbol{x}\Vert_\beta$，范数 $\Vert \boldsymbol{x}\Vert_\alpha$ 与 $\Vert \boldsymbol{x}\Vert_\beta$ 等价． $\square$

范数等价自然满足等价关系的三个性质．上述证明过程中表明了等价的传递性．

> **定理 4.5**　设 $V$ 是 $\mathbb{F}$ 上的有限维线性空间，$V$ 上向量范数的等价关系满足自反性、对称性、传递性．

不同 $p$–范数之间有以下关系．

> **定理 4.6**　设 $1 < p < q \leq +\infty$，对于任意 $x\in\mathbb{C}^n$ 有 $\Vert x\Vert_q \leq \Vert x\Vert_p \leq n^{ {1\over p} - {1\over q} }\Vert x\Vert_q$．

### 4.2　矩阵范数

将矩阵展平为向量即可得到矩阵的向量范数．

> **定义 4.4（矩阵的向量范数）**　对任意矩阵 $A\in \mathbb{C}^{m\times n}$，$\left\Vert A \right\Vert$ 是以 $A$ 为自变量的实值函数，且满足：
>
> 1. 正定性：$\left\Vert A \right\Vert > 0 $ 对任意 $O \neq A\in\mathbb{C}^{m\times n}$ 成立；
>
> 2. 齐次性：$\left\Vert kA \right\Vert = |k|\cdot\left\Vert A \right\Vert$ 对任意 $A\in\mathbb{C}^{m\times n}, k\in\mathbb{C}$ 成立；
>
> 3. 三角不等式：$\left\Vert A+B \right\Vert\leq \left\Vert A \right\Vert + \left\Vert B \right\Vert$ 对任意 $A, B\in\mathbb{C}^{m\times n}$ 成立．
>
> 则称 $\left\Vert A \right\Vert$ 是矩阵 $A$ 的**向量范数**．

对于任意 $1\leq p\leq +\infty$，设 $A = (a_{ij}) \in \mathbb{C}^{m\times n}$，则

$$
\left\Vert A \right\Vert_{vp} = \left(\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^p\right)^{1\over p}
$$

均为 $A$ 的向量范数．

> **定理 4.7**　矩阵 $A$ 的任一向量范数均是 $A$ 元素的连续函数．

> **定理 4.8**　线性空间 $\mathbb{C}^{m\times n}$ 的任意两个向量范数是等价的．

更进一步，要求范数与矩阵乘法相容．

> **定义 4.5（矩阵范数）**　对任意矩阵 $A\in \mathbb{C}^{m\times n}$，$\left\Vert A \right\Vert$ 是以 $A$ 为自变量的实值函数，且满足：
>
> 1. 正定性：$\left\Vert A \right\Vert > 0 $ 对任意 $O \neq A\in\mathbb{C}^{m\times n}$ 成立；
>
> 2. 齐次性：$\left\Vert kA \right\Vert = |k|\cdot\left\Vert A \right\Vert$ 对任意 $A\in\mathbb{C}^{m\times n}, k\in\mathbb{C}$ 成立；
>
> 3. 三角不等式：$\left\Vert A+B \right\Vert\leq \left\Vert A \right\Vert + \left\Vert B \right\Vert$ 对任意 $A, B\in\mathbb{C}^{m\times n}$ 成立；
>
> 4. 相容性：$\left\Vert AB \right\Vert\leq \left\Vert A \right\Vert \left\Vert B \right\Vert$ 对任意 $A, B\in\mathbb{C}^{m\times n}$ 成立．
>
> 则称 $\left\Vert A \right\Vert$ 是矩阵 $A$ 的**矩阵范数**．

由于矩阵的向量范数不一定相容，因此矩阵的向量范数不一定是矩阵范数．

> **定义 4.6（Frobenius 范数）**　设矩阵 $A = (a_{ij})\in\mathbb{C}^{m\times n}$，则
>
> $$
> \left\Vert A \right\Vert_F = \left(\sum_{i=1}^m \sum_{j=1}^n |a_{ij}|^2\right)^{1\over 2}
> = \sqrt{\operatorname{tr}(A^\mathsf{H} A)}
> $$
>
> 是 $A$ 的矩阵范数，称为 **Frobenius 范数**．

> **定理 4.9**　设 $A\in\mathbb{C}^{m\times n}$，则：
>
> - 酉不变性：$U\in\mathbb{C}^{m\times m}$ 与 $V\in\mathbb{C}^{n\times n}$ 为酉矩阵，则 $\left\Vert UA \right\Vert_F = \left\Vert AV \right\Vert_F = \left\Vert A \right\Vert_F$．
>
> - 设 $A = [\boldsymbol{\beta}_1, \dots, \boldsymbol{\beta}_n] = \begin{bmatrix}\boldsymbol{\alpha}_1 \\ \vdots \\ \boldsymbol{\alpha}_m\end{bmatrix}$，则 $\left\Vert A \right\Vert_F^2 = \sum_{j=1}^n \left\Vert \boldsymbol{\beta}_j \right\Vert_2^2 = \sum_{i=1}^m \left\Vert \boldsymbol{\alpha}_i \right\Vert_2^2$．
>
> - $\left\Vert A\boldsymbol{x} \right\Vert_2 \leq \left\Vert A \right\Vert_F \left\Vert \boldsymbol{x} \right\Vert_2$ 对任意 $\boldsymbol{x}\in\mathbb{C}^n$ 成立．

> **定理 4.10**　设 $A$ 是 $n$ 阶复方阵，$\left\Vert \cdot \right\Vert$ 是给定矩阵范数，$P$ 是 $n$ 阶可逆矩阵，则 $\left\Vert A \right\Vert_m = \left\Vert P^{-1}AP \right\Vert$ 是矩阵范数．

### 4.3　相容范数

> **定义 4.7（相容）**　若对 $A\in\mathbb{C}^{m\times n}$ 与 $\boldsymbol{x}\in\mathbb{C}^n$，向量范数 $\left\Vert \boldsymbol{x} \right\Vert_v$ 与矩阵范数 $\left\Vert A \right\Vert_m$ 满足 $\left\Vert A\boldsymbol{x} \right\Vert_v\leq\left\Vert A \right\Vert_m\left\Vert \boldsymbol{x} \right\Vert_v$，则称向量范数 $\left\Vert \boldsymbol{x} \right\Vert_v$ 与矩阵范数 $\left\Vert A \right\Vert_m$ **相容**．

向量 $2$–范数与矩阵 F–范数是相容的．

> **定理 4.11**　设 $\left\Vert A \right\Vert_m$ 是 $\mathbb{C}^{n\times n}$ 的一个矩阵范数，则必然存在 $\mathbb{C}^n$ 上与之相容的向量范数．

**证**　取任意非零向量 $\alpha\in\mathbb{C}^n$，定义 $\left\Vert x \right\Vert_v = \left\Vert x\alpha^\mathsf{H} \right\Vert_m$．可以验证 $\left\Vert x \right\Vert_v$ 是向量范数，且有

$$\left\Vert Ax \right\Vert_v = \left\Vert Ax\alpha^\mathsf{H} \right\Vert_m \leq \left\Vert A \right\Vert_m \left\Vert x\alpha^\mathsf{H} \right\Vert_m = \left\Vert A \right\Vert_m\left\Vert x \right\Vert_v$$

即 $\left\Vert x \right\Vert_v$ 与 $\left\Vert A \right\Vert_m$ 相容． $\square$

以上给出从矩阵范数得到与之相容的向量范数的方法．反过来，从向量范数也可得到与之相容的矩阵范数．

> **定义 4.8（诱导范数）**　设 $\left\Vert \boldsymbol{x} \right\Vert_v$ 是 $\mathbb{C}^n$ 的一个向量范数，对任意 $A\in\mathbb{C}^{m\times n}$，定义
>
> $$
> \left\Vert A \right\Vert = \max_{\left\Vert \boldsymbol{x} \right\Vert_v = 1} \left\Vert A\boldsymbol{x} \right\Vert_v
> $$
>
> 则 $\left\Vert A \right\Vert$ 是一个与 $\left\Vert \boldsymbol{x} \right\Vert_v$ 相容的矩阵范数，称为从属于向量范数 $\left\Vert \cdot \right\Vert_v$ 的算子范数，或称为由向量范数 $\left\Vert \cdot \right\Vert_v$ 诱导的矩阵范数，简称**诱导范数**．

有限维空间 $\mathbb{C}^n$ 中 $D = \left\{ \left\Vert \boldsymbol{x} \right\Vert_v = 1 \right\}$ 是紧集，因此连续函数 $\left\Vert A\boldsymbol{x} \right\Vert_v$ 在 $D$ 上有界，且能取到其确界．否则需要使用 $\sup$ 替代 $\max$．

由于确界可取得，$\left\Vert A\boldsymbol{x} \right\Vert_v\leq M\left\Vert \boldsymbol{x} \right\Vert_v$ 对 $\boldsymbol{x}\in\mathbb{C}^n$ 均成立的最小常数 $M$ 即是 $\left\Vert A \right\Vert_v$．

> **推论 4.2**　设 $A = (a_{ij})\in\mathbb{C}^{m\times n}$ 以及 $\boldsymbol{x}\in\mathbb{C}^n$，设 $\sigma_{\max}(A)$ 是 $A$ 的最大奇异值，则：
>
> - 向量范数 $\left\Vert \boldsymbol{x} \right\Vert_1$ 的诱导范数为**列和范数**：
>    $$
>    \left\Vert A \right\Vert_1 = \max_{1\leq j\leq n} \sum_{i=1}^m |a_{ij}|
>    $$
>
> - 向量范数 $\left\Vert \boldsymbol{x} \right\Vert_\infty$ 的诱导范数为**行和范数**：
>    $$
>    \left\Vert A \right\Vert_\infty = \max_{1\leq i\leq m} \sum_{j=1}^n |a_{ij}|
>    $$
>
> - 向量范数 $\left\Vert \boldsymbol{x} \right\Vert_2$ 的诱导范数为**谱范数**：
>    $$
>    \left\Vert A \right\Vert_2 = \sqrt{\lambda_{\max}(A^\mathsf{H} A)} = \sigma_{\max}(A)
>    $$

具体来说，对于 $\left\Vert A \right\Vert_1$ 有

$$
\left\Vert A \right\Vert_1
= \left\Vert \sum_{j=1}^n A_{ {\ast}j}x_j \right\Vert_1
\leq \sum_{j=1}^n |x_j|\left\Vert A_{ {\ast}j} \right\Vert_1
\leq \max_{1\leq j\leq n} \left\Vert A_{ {\ast}j} \right\Vert_1
= \max_{1\leq j\leq n} \sum_{i=1}^m |a_{ij}|
$$

等号在某个 $|x_j|=1$ 时取得．对于 $\left\Vert A \right\Vert_\infty$ 有

$$
\left\Vert A \right\Vert_\infty
= \left\Vert Ax \right\Vert_\infty
= \max_{1\leq i\leq m} |(Ax)_i|
= \max_{1\leq i\leq m} \left|\sum_{j=1}^n a_{ij}x_j\right|
\leq \max_{1\leq i\leq m} \sum_{j=1}^n |a_{ij}|
$$

等号在 $a_{ij}x_j$ 同号时取得．对于 $\left\Vert A \right\Vert_2$ 有

$$
\left\Vert A \right\Vert_2
= \max_{x^\mathsf{H} x = 1} \sqrt{x^\mathsf{H} A^\mathsf{H} A x}
= \sqrt{\lambda_{\max}(A^\mathsf{H} A)}
= \sigma_{\max}(A)
$$

其中 $A^\mathsf{H} A$ 是半正定 Hermite 阵，可酉对角化．

> **推论 4.3**　$\left\Vert A \right\Vert_1 = \left\Vert A^\mathsf{H} \right\Vert_\infty$，$\left\Vert A \right\Vert_2 = \left\Vert A^\mathsf{H} \right\Vert_2$．

$\left\Vert A \right\Vert$ 不一定与 $\left\Vert A^\mathsf{T} \right\Vert$ 相等．与某一向量范数相容的矩阵范数有多个．

$\left\Vert I \right\Vert \geq 1$．$I$ 的算子范数为 $1$，但 $I$ 的矩阵范数不一定为 $1$．

> **定理 4.12**　设 $A\in\mathbb{C}^{n\times n}$，$\left\Vert A \right\Vert$ 是某一矩阵范数．若 $\left\Vert A \right\Vert < 1$，则 $I-A$ 可逆，且
>
> $$
> \left\Vert (I-A)^{-1} \right\Vert \leq {\left\Vert I \right\Vert \over 1 - \left\Vert A \right\Vert}
> $$

**证**　由 $\left\Vert A \right\Vert < 1$ 即知 $(I-A)^{-1} = \sum_{k=0}^\infty A^k$ 收敛，且有

$$
\left\Vert \sum_{k=0}^\infty A^k \right\Vert
\leq \sum_{k=0}^\infty\left\Vert A^k \right\Vert
\leq \sum_{k=0}^\infty\left\Vert I \right\Vert\left\Vert A \right\Vert^k
= {\left\Vert I \right\Vert \over 1 - \left\Vert A \right\Vert}
$$

$\square$

### 4.4　特征值估计

> **定义 4.9（谱，谱半径）**　设 $A\in\mathbb{C}^{n\times n}$，记 $S_p(A)$ 为 $A$ 的全体特征值构成的集合，则称 $S_p(A)$ 为 $A$ 的**谱**，称 $\rho(A) = \max_{\lambda\in S_p(A)} |\lambda|$ 为 $A$ 的**谱半径**．

> **定理 4.13**　复方阵的谱半径不大于它的任一矩阵范数．

**证**　设 $A\in\mathbb{C}^{n\times n}$，$\lambda$ 是 $A$ 的特征值且 $|\lambda| = \rho(A)$，$x$ 是属于特征值 $\lambda$ 的特征向量，则有

$$
\rho(A)\left\Vert x \right\Vert = |\lambda|\left\Vert x \right\Vert = \left\Vert \lambda x \right\Vert \leq \left\Vert A \right\Vert\left\Vert x \right\Vert
$$

由 $\left\Vert x \right\Vert > 0$ 即得 $\rho(A) \leq \left\Vert A \right\Vert$． $\square$

> **定理 4.14**　设 $A\in\mathbb{C}^{n\times n}$，$\forall \varepsilon > 0$，存在矩阵范数 $\left\Vert \cdot \right\Vert$ 使得 $\left\Vert A \right\Vert \leq \rho(A) + \varepsilon$．

> **定理 4.15**　$$
> \left\Vert A \right\Vert_2^2 = \lambda_{\max}(A^\mathsf{H} A) = \rho(A^\mathsf{H} A) \leq \left\Vert A^\mathsf{H} A \right\Vert
>
> $$

> **推论 4.4**　若 $A$ 是正规矩阵，则 $\rho(A^\mathsf{H} A) = \rho(A)^2$，从而 $\rho(A) = \left\Vert A \right\Vert_2$．

> **定义 4.10（Gershgorin 圆盘）**　设 $A = (a_{ij})\in\mathbb{C}^{n\times n}$，令
> $$
>
> \delta_i = \sum_{\substack{1\leq j\leq n\\j\neq i}} |a_{ij}|
>
> $$
> 并定义 $G_i = \left\{ z\in\mathbb{C} \,\middle|\, |z-a_{ii}|\leq\delta_i \right\}$（$i=1,\dots,n$），即 $G_i$ 是复平面上以 $a_{ii}$ 为圆心，$\delta_i$ 为半径的闭圆盘，称之为 $A$ 的一个**Gershgorin 圆盘**．

> **定理 4.16（Gershgorin 圆盘定理）**　设 $A\in\mathbb{C}^{n\times n}$ 的 $n$ 个 Gershgorin 圆盘为 $G_1, \dots, G_n$，则 $A$ 的任一特征值 $\lambda\in\cup_{i=1}^n G_i$．

**证**　对于 $A$ 的任一特征值 $\lambda$，存在属于 $\lambda$ 的特征向量 $\boldsymbol{x}$，由 $\boldsymbol{x}\neq \boldsymbol{0}$ 可知 $\max_{1\leq j\leq n} |x_j| > 0$．现取 $i = \arg\max_j |x_j|$，则由 $A\boldsymbol{x} = \lambda \boldsymbol{x} \implies A_{i{\ast}} \boldsymbol{x} = \lambda x_i$ 可得
$$

\begin{aligned}
{}& \sum_{j=1}^n a_{ij} x_j = \lambda x_i \\
\implies{}& \sum_{\substack{1\leq j\leq n\\j\neq i}} a_{ij}x_j = (\lambda - a_{ii}) x_i \\
\implies{}& |\lambda - a_{ii}|\cdot|x_i| \leq \sum_{\substack{1\leq j\leq n\\j\neq i}} |a_{ij}|\cdot|x_j| \leq |x_i|\sum_{\substack{1\leq j\leq n\\j\neq i}} |a_{ij}| \\
\implies{}& |\lambda - a_{ii}| \leq \sum_{\substack{1\leq j\leq n\\j\neq i}} |a_{ij}|
\end{aligned}

$$
$\square$

> **推论 4.5**　$A^\mathsf{T}$ 与 $A$ 有相同特征值，设 $A^\mathsf{T}$ 的 Gershgorin 圆盘为 $G'_1, \dots, G'_n$，则 $\lambda \in \left(\cup_{i=1}^n G_i\right) \cap \left(\cup_{i=1}^n G'_i\right)$．

> **定理 4.17（Gershgorin 圆盘定理）**　设 $A\in\mathbb{C}^{n\times n}$ 的 $n$ 个 Gershgorin 圆盘为 $G_1, \dots, G_n$，若其中 $k$ 个圆盘形成连通区域，且与其余 $n-k$ 个圆盘不相交，则该连通区域中恰有 $k$ 个特征值．

**证**　设 $D = \operatorname{diag}(a_{11}, \dots, a_{nn})$，在 $t\in[0,1]$ 上定义函数 $f(t) = D + t(A-D)$，$f(t)$ 对应的 Gershgorin 圆盘为 $\left\{ G_i(t) \right\}$，$f(t)$ 的特征值均在 $\left\{ G_i(t) \right\}$ 内．由于 $G_i(t) \subseteq G_i(1)$，对于任意 $t\in[0,1]$，$f(t)$ 的特征值不会出现在 $\cup_i G_i(1)$ 之外．

由于 $f(t)$ 各个特征值关于 $A$ 的各元素连续，$f(t)$ 关于 $t$ 连续．

不妨设 $G_1(1), \dots, G_k(1)$ 与其余圆盘 $G_{k+1}(1), \dots, G_n(1)$ 不交．$D$ 的特征值 $a_{11}, \dots, a_{kk}$ 分别在 $G_1(0), \dots, G_k(0)$ 中，也即这些特征值均在 $\cup_{1\leq i\leq k} G_i(1)$ 中．这些特征值关于 $t$ 连续，$t=1$ 时对应的特征值也在 $\cup_{1\leq i\leq k} G_i(1)$ 中，所以 $G_1(1), \dots, G_k(1)$ 恰有 $A$ 的 $k$ 个特征值． $\square$

> **推论 4.6**　孤立 Gershgorin 圆盘中有且仅有一个特征值．

> **推论 4.7**　若 $A$ 有 $k$ 个孤立 Gershgorin 圆盘，则 $A$ 至少有 $k$ 个互异特征值．特殊地，若 $A$ 的 Gershgorin 圆盘互不相交，则 $A$ 是单纯矩阵．

> **推论 4.8**　若实方阵 $A$ 有 $k$ 个孤立 Gershgorin 圆盘，则 $A$ 至少有 $k$ 个互异的实特征值．特殊地，若 $A$ 的 Gershgorin 圆盘互不相交，则 $A$ 有 $n$ 个互异的实特征值．

**证**　实方阵 $A$ 的 Gershgorin 圆盘的圆心在实轴上．若以 $x$ 为圆心，$r$ 为半径的圆盘与其他圆盘不交，则说明满足 $\mathfrak{R} \lambda \in [x-r, x+r]$ 的特征值 $\lambda$ 仅有一个．而复特征值是共轭成对的，因此这个特征值 $\lambda$ 是实的． $\square$

> **推论 4.9**　若 $0$ 不在任何 Gershgorin 圆盘内，则矩阵可逆．

> **定义 4.11（对角占优矩阵）**　设 $A = (a_{ij})\in\mathbb{C}^{n\times n}$．若对任意 $1\leq i\leq n$，有
> $$
>
> |a_{ii}| > \sum_{\substack{1\leq j\leq n\\j\neq i}} |a_{ij}|
>
> $$
> 则 $A$ 称为**行对角占优矩阵**．若对任意 $1\leq j\leq n$，有
> $$
>
> |a_{jj}| > \sum_{\substack{1\leq i\leq n\\i\neq j}} |a_{ij}|
>
> $$
> 则 $A$ 称为**列对角占优矩阵**．

> **推论 4.10（Levy–Desplanques 定理）**　对角占优矩阵必然可逆．

可以通过考察与 $A$ 相似的矩阵估计 $A$ 的特征值．取合适的非零实数 $d_1, \dots, d_n$，并令 $D = \operatorname{diag}(d_1, \dots, d_n)$，则 $A$ 与 $B = DAD^{-1} = (a_{ij}{d_i\over d_j})$ 相似，$B$ 与 $A$ 有相同特征值．若 $d_i < 1$ 且其余元素为 $1$，则对应 $d_i$ 的圆盘 $G_i$ 会缩小，其余圆盘会放大．若 $d_i > 1$ 且其余元素为 $1$，则对应 $d_i$ 的圆盘 $G_i$ 会放大，其余圆盘会缩小．

### 4.5　矩阵级数

> **定义 4.12（向量序列按范数收敛）**　设 $(V, \left\Vert \cdot \right\Vert_\alpha)$ 是 $n$ 维赋范线性空间，$\left\{ \boldsymbol{x}_k \right\}$ 是 $V$ 中的向量序列，若存在 $V$ 中的向量 $\boldsymbol{x}$ 满足
> $$
>
> \lim_{k\to\infty} \left\Vert \boldsymbol{x}_k - \boldsymbol{x} \right\Vert_\alpha = 0
>
> $$
> 则称向量序列 $\left\{ \boldsymbol{x}_k \right\}$ **按范数 $\left\Vert \cdot \right\Vert_\alpha$ 收敛于 $\boldsymbol{x}$**，记作
> $$
>
> \lim_{k\to\infty} \boldsymbol{x}_k = \boldsymbol{x} \quad\text{或}\quad \boldsymbol{x}_k \xrightarrow{\alpha}\boldsymbol{x}
>
> $$
> 称不收敛的向量序列是**发散**的．

> **定理 4.18**　设 $(V, \left\Vert \cdot \right\Vert_\alpha)$ 是 $n$ 维赋范线性空间，$\left\{ \boldsymbol{x}_k \right\}$ 是 $V$ 中的向量序列，若 $\left\{ \boldsymbol{x}_k \right\}$ 按某种范数收敛于 $\boldsymbol{x}$，则 $\left\{ \boldsymbol{x}_k \right\}$ 按任意范数收敛于 $\boldsymbol{x}$．

> **定义 4.13（向量序列按坐标收敛）**　设 $(V, \left\Vert \cdot \right\Vert_\alpha)$ 是 $n$ 维赋范线性空间，$\boldsymbol{\varepsilon}_1 \dots, \boldsymbol{\varepsilon}_n$ 是 $V$ 中的一组基，$\left\{ \boldsymbol{x}_k \right\}$ 是 $V$ 中的向量序列，并记向量序列 $\left\{ \boldsymbol{x}_k \right\}$ 中的任一向量 $\boldsymbol{x}_k$ 在这组基下的坐标为
> $$
>
> \xi_k = [\xi_1^{(k)}, \dots, \xi_n^{(k)}]^\mathsf{T} \in \mathbb{F}^n
>
> $$
> 若存在 $V$ 中的向量 $\boldsymbol{x}$ 满足
> $$
>
> \lim_{k\to\infty} \xi_i^{(k)} = \xi_i \quad, \forall 1\leq i\leq n
>
> $$
> 则称向量序列 $\left\{ \boldsymbol{x}_k \right\}$ **按坐标收敛于 $\boldsymbol{x}$**，其中 $\xi$ 是 $\boldsymbol{x}$ 在这组基下的坐标．

> **定理 4.19**　设 $(V, \left\Vert \cdot \right\Vert_\alpha)$ 是 $n$ 维赋范线性空间，$\left\{ \boldsymbol{x}_k \right\}$ 是 $V$ 中的向量序列且 $\boldsymbol{x}\in V$．向量序列 $\left\{ \boldsymbol{x}_k \right\}$ 按范数收敛于 $\boldsymbol{x}$ 当且仅当 $\left\{ \boldsymbol{x}_k \right\}$ 按坐标收敛于 $\boldsymbol{x}$．

> **定义 4.14（矩阵序列按坐标收敛）**　设矩阵序列 $\left\{ A_k \right\}$，其中 $A_k = (a_{ij}^{(k)}) \in \mathbb{C}^{m\times n}$，若
> $$
>
> \lim_{k\to\infty} a_{ij}^{(k)} = a_{ij}^{(0)} \quad, \forall 1\leq i\leq m, 1\leq j\leq n
>
> $$
> 则称矩阵序列 $\left\{ A_k \right\}$ **按元素收敛**或**按坐标收敛**，或简称为 $\left\{ A_k \right\}$ 收敛．$A_0 = (a_{ij}^{(0)})$ 称为 $\left\{ A_k \right\}$ 的**极限**，记为 $\lim_{k\to\infty} A_k = A_0$．

> **定理 4.20**　设矩阵序列 $\left\{ A_k \right\}$ 和 $\left\{ B_k \right\}$ 有 $\lim_{k\to\infty} A_k = A$，$\lim_{k\to\infty} B_k = B$，对于任意 $c_1, c_2\in\mathbb{C}$ 有：
>
> - $\lim_{k\to\infty} (c_1 A_k + c_2 B_k) = c_1 A + c_2 B$．
>
> - $\lim_{k\to\infty} (A_k B_k) = AB$．
>
> - 若 $A_k$ 和 $A$ 为可逆阵，则 $\lim_{k\to\infty} A_k^{-1} = A^{-1}$．

> **推论 4.11（矩阵序列按范数收敛）**　设 $\left\Vert \cdot \right\Vert$ 是 $\mathbb{C}^{m\times n}$ 上任一矩阵范数，$\mathbb{C}^{m\times n}$ 中矩阵序列 $\left\{ A_k \right\}$ 收敛于 $A$ 的充分必要条件是
> $$
>
> \lim_{k\to\infty} \left\Vert A_k - A \right\Vert = 0
>
> $$

> **推论 4.12**　若复方阵 $A$ 的某一范数满足 $\left\Vert A \right\Vert < 1$，则 $\lim_{k\to\infty} A^k = 0$．

> **定理 4.21**　设 $A = (a_{ij})\in\mathbb{C}^{n\times n}$，$\lim_{k\to\infty}A^k = 0$ 的充分必要条件是 $\rho(A) < 1$．

> **推论 4.13**　若复方阵 $A$ 的某一矩阵范数满足 $\left\Vert A \right\Vert < 1$，则矩阵序列 $\left\{ A^k \right\}$ 收敛于 $O$．

> **定义 4.15（矩阵级数）**　设矩阵序列 $\left\{ A_k \right\}$，其中 $A_k \in \mathbb{C}^{m\times n}$，称 $\sum_{k=1}^\infty A_k$ 为**矩阵级数**．令 $S_N = \sum_{k=1}^N A_k$，称 $S_N$ 为矩阵级数的**部分和**．若 $\left\{ S_N \right\}$ 收敛且有极限 $S$，即 $\lim_{N\to\infty} S_N = S$，则称矩阵级数 $\sum_{k=1}^\infty A_k$ **收敛**且有和 $S$．
>
> 称不收敛的矩阵级数是**发散**的．

> **定理 4.22**　设 $A_k\in\mathbb{C}^{m\times n}$，则：
>
> - $\sum_{k=1}^\infty A_k$ 收敛，当且仅当 $mn$ 个数项级数 $\sum_{k=1}^\infty a_{ij}^{(k)}$ 收敛．
>
> - $\sum_{k=1}^\infty A_k$ 发散，当且仅当 $mn$ 个数项级数 $\sum_{k=1}^\infty a_{ij}^{(k)}$ 至少有一个发散．
>
> - $\sum_{k=1}^\infty A_k$ 收敛，则 $\lim_{k\to\infty} A_k = O$．

> **定义 4.16（矩阵级数绝对收敛）**　设 $A_k\in\mathbb{C}^{m\times n}$，若矩阵级数 $\sum_{k=1}^\infty A_k$ 对应的 $mn$ 个数项级数 $\sum_{k=1}^\infty a_{ij}^{(k)}$ 均绝对收敛，则称 $\sum_{k=1}^\infty A_k$ **绝对收敛**．

> **定理 4.23**　设 $A_k\in\mathbb{C}^{m\times n}$，则：
>
> - 若 $\sum_{k=1}^\infty A_k$ 绝对收敛，则 $\sum_{k=1}^\infty A_k$ 收敛．
>
> - 若 $\sum_{k=1}^\infty A_k$ 绝对收敛于 $S$，则重排级数 $\sum_{k=1}^\infty A_k$ 得到的 $\sum_{k=1}^\infty B_k$ 绝对收敛于 $S$．
>
> - 对于任意常数矩阵 $P\in\mathbb{C}^{p\times m}$ 和 $Q\in\mathbb{C}^{n\times q}$，若矩阵级数 $\sum_{k=1}^\infty A_k$（绝对）收敛，则 $\sum_{k=1}^\infty PA_k Q$（绝对）收敛．

> **定理 4.24**　设 $A_k = (a_{ij}^{(k)}) \in \mathbb{C}^{m\times n}$，矩阵级数 $\sum_{k=1}^\infty A_k$ 绝对收敛当且仅当对任意矩阵范数，数项级数 $\sum_{k=1}^\infty\left\Vert A_k \right\Vert$ 收敛．

> **定义 4.17（矩阵幂级数）**　设 $A\in\mathbb{C}^{n\times n}$，定义矩阵级数 $\sum_{k=0}^\infty c_kA^k$，称为**矩阵幂级数**．

$\sum_{k=0}^\infty c_kA^k$ 绝对收敛，当且仅当 $\sum_{k=0}^\infty |c_k|\left\Vert A \right\Vert^m$ 收敛．

> **定理 4.25（Abel 定理）**　设幂级数 $\sum_{k=0}^\infty c_k z^k$ 的收敛半径为 $r$，$A\in\mathbb{C}^{n\times n}$ 的谱半径为 $\rho(A)$．$\rho(A) < r$ 时 $\sum_{k=0}^\infty c_k A^k$ 绝对收敛；$\rho(A) > r$ 时 $\sum_{k=0}^\infty c_k A^k$ 发散．

对于幂级数 $\sum_{n=0}^\infty c_n z^n$，若 $\overline{\lim}_{n\to\infty} (|c_n|)^{1/n} = c$ 或 $\lim_{n\to\infty} {|c_{n+1}|\over |c_n|}=c$，则收敛半径为 $r = 1/c$．

> **推论 4.14**　若幂级数 $\sum_{k=0}^\infty c_k z^k$ 在整个复平面上收敛，则对任意复方阵 $A$ 有 $\sum_{k=0}^\infty c_k A^k$ 收敛．

> **推论 4.15（Neumann 级数）**　矩阵幂级数 $\sum_{k=0}^\infty A^k$ 收敛当且仅当 $\rho(A) < 1$，此时 $\sum_{k=0}^\infty A^k = (I-A)^{-1}$．

### 4.6　矩阵函数

> **定义 4.18（矩阵函数）**　设幂级数 $\sum_{k=0}^\infty c_kz^k$ 的收敛半径为 $r$，当 $|z| < r$ 时，幂级数收敛于函数 $f(z)$，若复方阵 $A$ 满足 $\rho(A) < r$，则称收敛的矩阵幂级数 $\sum_{k=0}^\infty c_kA^k$ 为**矩阵函数**，记为 $f(A)$．

类似一般的函数，$\cos(-A) = \cos A$，$\sin(-A) = -\sin A$，$\mathrm{e}^{\mathrm{i} A} = \cos A + \mathrm{i}\sin A$，$\cos A = {1\over 2}(\mathrm{e}^{\mathrm{i} A} + \mathrm{e}^{-\mathrm{i} A})$，$\sin A = {1\over 2}(\mathrm{e}^{\mathrm{i} A} - \mathrm{e}^{-\mathrm{i} A})$．

> **定理 4.26**　当复方阵 $A, B$ 可交换时有 $\mathrm{e}^A \mathrm{e}^B = \mathrm{e}^{A+B} = \mathrm{e}^B \mathrm{e}^A$．

> **推论 4.16**　对于复方阵 $A$，有 $\mathrm{e}^A \mathrm{e}^{-A} = \mathrm{e}^{-A} \mathrm{e}^A = I$，即 $(\mathrm{e}^A)^{-1} = \mathrm{e}^{-A}$．

> **推论 4.17**　对于复方阵 $A$，有 $\sin^2 A + \cos^2 A = I$．

> **定义 4.19（含参矩阵函数）**　设 $t$ 为标量参数，则
> $$
>
> f(At) = \sum_{k=0}^\infty c_k(At)^k \quad (|t|\rho(A) < r)
>
> $$
> 称为**含参矩阵函数**．

> **定理 4.27**　设复方阵 $A$ 与 $B$ 相似，存在可逆阵 $P$ 使得 $A = PBP^{-1}$．若 $f(B)$ 是矩阵函数，则 $f(A) = Pf(B)P^{-1}$．

> **定理 4.28**　对于 Jordan 块 $J_n(\lambda)$，其 $k$ 次幂为
> $$
>
> J_n^k(\lambda) = \begin{bmatrix}
> \lambda^k & \binom{k}{1}\lambda^{k-1} & \binom{k}{2}\lambda^{k-2} & \cdots & \binom{k}{n-1}\lambda^{k-n+1} \\
> & \lambda^k & \binom{k}{1}\lambda^{k-1} & \ddots & \vdots \\
> & & \ddots & \ddots & \binom{k}{2}\lambda^{k-2} \\
> & & & \lambda^k & \binom{k}{1}\lambda^{k-1} \\
> & & & & \lambda^k
> \end{bmatrix}
>
> $$

**证**　$$
J_n^k(\lambda) = (\lambda I + J_n(0))^k = \sum_{i=0}^k \binom ki J_n^i(0)(\lambda I)^{k-i} = \sum_{i=0}^k \binom ki \lambda^{k-i} J_n^i(0)
$$

$\square$

> **推论 4.18（Sylvester 公式）**　设幂级数 $f(z) = \sum_{k=0}^\infty c_k z^k$ 收敛半径为 $r$，$|\lambda| < r$，则
>
> $$
> f(J_n(\lambda)) = \begin{bmatrix}
> f(\lambda) & f'(\lambda) & {1\over 2!}f''(\lambda) & \cdots & {1\over (n-1)!}f^{(n-1)}(\lambda) \\
> & f(\lambda) & f'(\lambda) & \ddots & \vdots \\
> & & \ddots & \ddots & {1\over 2!}f''(\lambda) \\
> & & & f(\lambda) & f'(\lambda) \\
> & & & & f(\lambda)
> \end{bmatrix}
> $$

**证**　对于 $f(J_n(\lambda))$ 对角线右上的第 $i$ 个（$0\leq i < n$）元素有

$$
\begin{aligned}
f(J_n(\lambda))_{m, m+i}
&= \sum_{k=0}^\infty c_k \binom{k}{i}\lambda^{k-i} \\
&= \sum_{k=i}^\infty c_k {k!\over i!(k-i)!}\lambda^{k-i} \\
&= \sum_{k=i}^\infty c_k {k!\over i!(k-i)!}{1\over (k-i+1)\cdots(k-1)k}{\mathrm{d}^i\over \mathrm{d} \lambda^i}\lambda^k \\
&= {1\over i!} \sum_{k=i}^\infty c_k {\mathrm{d}^i\over \mathrm{d} \lambda^i}\lambda^k \\
&= {1\over i!}f^{(i)}(\lambda)
\end{aligned}
$$

$\square$

> **推论 4.19**　设 $A\in\mathbb{C}^{n\times n}$ 的特征值为 $\lambda_1, \dots, \lambda_n$，$f(z) = \sum_{k=0}^\infty c_kz^k$ 的收敛半径为 $r$．当 $\rho(A)<r$ 时，矩阵函数 $f(A)$ 的特征值为 $f(\lambda_1), \dots, f(\lambda_n)$．

> **推论 4.20**　设幂级数 $f(z) = \sum_{k=0}^\infty c_k z^k$ 收敛半径为 $r$，$|t\lambda| < r$，则
>
> $$
> f(J_n(\lambda t)) = \begin{bmatrix}
> f(\lambda) & tf'(\lambda) & {t^2\over 2!}f''(\lambda) & \cdots & {t^{n-1}\over (n-1)!}f^{(n-1)}(\lambda) \\
> & f(\lambda) & tf'(\lambda) & \ddots & \vdots \\
> & & \ddots & \ddots & {t^2\over 2!}f''(\lambda) \\
> & & & f(\lambda) & tf'(\lambda) \\
> & & & & f(\lambda)
> \end{bmatrix}
> $$

> **推论 4.21**　设幂级数 $f(z) = \sum_{k=0}^\infty c_k z^k$ 收敛半径为 $r$，$A\in\mathbb{C}^{n\times n}$ 的 Jordan 标准型为 $J = P^{-1}AP = \operatorname{diag}(J_{n_1}(\lambda_1), \dots, J_{n_s}(\lambda_s))$．当 $\rho(A) < r$ 时，有
>
> $$
> f(A) = P\operatorname{diag}(f(J_{n_1}(\lambda_1)), \dots, f(J_{n_s}(\lambda_s)))P^{-1}
> $$
>
> 当 $|t|\rho(A) < r$ 时，有
>
> $$
> f(At) = P\operatorname{diag}(f(J_{n_1}(\lambda_1 t)), \dots, f(J_{n_s}(\lambda_s t)))P^{-1}
> $$

> **定理 4.29**　设 $A\in\mathbb{C}^{n\times n}$ 的最小多项式次数为 $l$，幂级数 $f(z) = \sum_{k=0}^\infty c_kz^k$ 的收敛半径为 $r$．若 $\rho(A) < r$，定义矩阵函数 $f(A)$，则必存在唯一的 $l-1$ 次矩阵多项式 $p(A) = \sum_{i=0}^{l-1} \beta_i A^i$ 使得 $f(A) = p(A)$．

实际上 $p(\lambda) = f(\lambda) \bmod m_A(\lambda)$．

设 $A$ 的最小多项式为 $m_A(\lambda) = (\lambda-\lambda_1)^{n_1} \cdots (\lambda-\lambda_s)^{n_s}$，确定 $f(A)$ 实际上只使用了 $f(\lambda_i), \dots, f^{(n_i-1)}(\lambda_i)$ 的值．

> **定义 4.20（谱上给定）**　设 $\lambda_1, \dots, \lambda_s$ 是 $n$ 阶复方阵 $A$ 的 $s$ 个互异特征值，$m_A(\lambda) = (\lambda-\lambda_1)^{n_1}\cdots(\lambda-\lambda_s)^{n_s}$ 是 $A$ 的最小多项式．若复函数 $f(z)$ 及其各阶导数 $f^{(j)}(z)$ 在 $z = \lambda_i$ 处的 $n_i$ 个值 $f^{(j)}(\lambda_i)$（$0\leq j<n_i$）均有界，则称 $f(z)$ 在 $A$ 的谱上给定或谱上有定义，称 $\lambda_1, \dots, \lambda_s$ 为**谱点**，称 $f^{(j)}(\lambda_i)$ 为 $f(z)$ 在 $A$ 上的**谱值**．

> **定义 4.21（谱上一致）**　设 $\lambda_1, \dots, \lambda_s$ 是 $n$ 阶复方阵 $A$ 的 $s$ 个互异特征值，$m_A(\lambda) = (\lambda-\lambda_1)^{n_1}\cdots(\lambda-\lambda_s)^{n_s}$ 是 $A$ 的最小多项式．若函数 $f(\lambda)$ 与 $p(\lambda)$ 在谱上给定，且对任意 $1\leq i\leq s$，$0\leq j < n_i$ 均满足 $f^{(j)}(\lambda_i) = p^{(j)}(\lambda_i)$，则称 $f(\lambda)$ 与 $p(\lambda)$ 在 $A$ 的谱上一致．

> **定理 4.30**　设 $A\in\mathbb{C}^{n\times n}$，幂级数 $f(z) = \sum_{k=0}^\infty c_kz^k$ 与多项式 $p(z) = \sum_{i=0}^{l} \beta_iz^i$ 在 $A$ 的谱上给定，则 $f(A) = p(A)$ 的充分必要条件是 $f(z)$ 和 $p(z)$ 在 $A$ 的谱上一致．

> **定义 4.22（矩阵函数）**　设 $\lambda_1, \dots, \lambda_s$ 是 $n$ 阶复方阵 $A$ 的 $s$ 个互异特征值，$m_A(\lambda) = (\lambda-\lambda_1)^{n_1}\cdots(\lambda-\lambda_s)^{n_s}$ 是 $A$ 的最小多项式，$\deg(m_A(\lambda))=l$．若函数 $f(z)$ 在 $A$ 的谱上给定，则矩阵函数 $f(A)$ 定义为 $f(A) = p(A)$，其中 $p(A) = \sum_{i=0}^{l-1} \beta_i A^i$，系数 $\beta_0, \dots, \beta_{l-1}$ 由以下方程组决定：
>
> $$
> f^{(j)}(\lambda_i) = p^{(j)}(\lambda_i) \quad (\forall 1\leq i\leq s, 0\leq j<n_i)
> $$
