# 2　线性映射与矩阵

## 2.1　映射与多项式

> **定义 2.1（映射）**　设 $V$ 和 $W$ 是两个非空集合，如果存在一个 $V$ 到 $W$ 的对应法则 $f$，使得 $V$ 中任意 $x$ 都有 $W$ 中唯一的 $y$ 与之对应，则称 $f$ 是 $V$ 到 $W$ 的一个**映射**，记为 $y = f(x)$．
>
> $y\in W$ 称为 $x\in V$ 在映射 $f$ 下的**像**，称 $x$ 为 $y$ 的**原像**．
>
> 集合 $V$ 称为映射 $f$ 的**定义域**．
>
> $x$ 在映射 $f$ 下的像的全体是 $W$ 的一个子集，称为映射 $f$ 的**值域**，记为 $R(f)$．
>
> $I_V: x\to x$（$x \in V$）是 $V$ 上的**恒等映射**．

> **定义 2.2（单射，满射，双射）**　设 $f: V \to W$．
>
> - 若对任意 $x_1, x_2 \in V$ 有 $x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$，则称 $f$ 是 $V$ 到 $W$ 的**单射**．
>
> - 若对任意 $y \in W$ 存在 $x\in V$ 使得 $f(x)=y$，也即 $R(f)=W$，则称 $f$ 是 $V$ 到 $W$ 的**满射**．
>
> - 若 $f$ 既是单射又是满射，则称 $f$ 是 $V$ 到 $W$ 的**双射**或**一一映射**．

> **定义 2.3（映射相等）**　设 $f_1: V_1 \to W_1$，$f_2: V_2 \to W_2$．若 $V_1=V_2$，$W_1=W_2$，且对任意 $x\in V_1$ 有 $f_1(x) = f_2(x)$，则称映射 $f_1$ 和 $f_2$ **相等**，记为 $f_1=f_2$．

> **定义 2.4（映射乘积）**　设 $f_1: V_1\to V_2$，$f_2: V_2\to V_3$．由 $f_1$ 和 $f_2$ 确定的 $V_1$ 到 $V_3$ 的映射 $f_3: x \to f_2(f_1(x))$（$x\in V_1$），称为映射 $f_1$ 和 $f_2$ 的**乘积**（或者**复合**），记为 $f_3=f_2\cdot f_1$ 或 $f_3 = f_2f_1$．

$f_3 = f_2f_1$ 意味着 $f_3(x) = f_2(f_1(x))$，这顺序与一般的乘法是不同的．

> **定义 2.5（可逆映射）**　设 $f_1: V\to W$，若存在 $f_2: W\to V$ 使得 $f_2f_1=I_V$ 且 $f_1f_2=I_W$ 则称 $f_2$ 为 $f_1$ 的**逆映射**，记为 $f_1^{-1}$．若 $f_1$ 有逆映射，则称其是**可逆映射**．

> **定理 2.1**　设 $f: V\to W$ 是可逆映射，则 $f$ 的逆映射 $f^{-1}$ 是唯一的．

**证**　设 $g_1, g_2$ 均是 $f$ 的逆映射，则有

$$
g_1 = I_V g_1 = (g_2 f) g_1 = g_2 (f g_1) = g_2 I_W = g_2
$$

$\square$

> **定理 2.2**　映射 $f: V\to W$ 是可逆映射的充分必要条件是 $f$ 是双射．

> **定义 2.6（变换）**　设 $V$ 是非空集合．$V\to V$ 的映射称为 $V$ 的**变换**．$V\to V$ 的双射称为 $V$ 的**一一变换**．若 $V$ 是有限集，则 $V$ 的一一变换称为 $V$ 的**置换**．

多项式相关知识相信群友一定会．

> **定义 2.7（友矩阵）**　设 $f(\lambda)$ 是数域 $\mathbb{F}$ 上的首一多项式：
>
> $$
> f(\lambda) = \lambda^n + a_{n-1}\lambda^{n-1} + \dots + a_1\lambda + a_0
> $$
>
> 则 $n$ 阶矩阵
>
> $$
> A = \begin{bmatrix}
> 0 & 1 & 0 & \cdots & 0 \\
> 0 & 0 & 1 & \cdots & 0 \\
> \vdots & \vdots & \vdots & \ddots & \vdots \\
> 0 & 0 & 0 & \cdots & 1 \\
> -a_0 & -a_1 & -a_2 & \cdots & -a_{n-1} \\
> \end{bmatrix}
> \quad \text{或} \quad
> A = \begin{bmatrix}
> 0 & 0 & \cdots & 0 & -a_0 \\
> 1 & 0 & \cdots & 0 & -a_1 \\
> 0 & 1 & \cdots & 0 & -a_2 \\
> \vdots & \vdots & \ddots & \vdots & \vdots \\
> 0 & 0 & 0 & \cdots & -a_{n-1} \\
> \end{bmatrix}
> $$
>
> 称为 $f(\lambda)$ 的**友矩阵**．

事实上，矩阵 $A$ 的特征多项式为 $f(\lambda)$．

## 2.2　线性映射

> **定义 2.8**　设 $V$ 和 $W$ 是 $\mathbb{F}$ 上的线性空间．如果 $T: V\to W$ 满足：
>
> 1. 可加性：$\forall x, y\in V : T(x+y) = T(x) + T(y)$
>
> 2. 齐次性：$\forall \lambda\in\mathbb{F}, \forall x\in V : T(\lambda x) = \lambda T(x)$
>
> 则称 $T$ 为 $V$ 到 $W$ 的**线性映射**．
>
> 特别地，当 $V=W$ 时称 $T$ 为 $V$ 上的**线性变换**．

$\mathbb{R}^2$ 中的线性变换可分解为伸缩、反射、旋转的乘积．这三类变换对应：

- 伸缩：$T(\boldsymbol{x}) = \begin{bmatrix} k_1 & 0 \\ 0 & k_2 \end{bmatrix}\boldsymbol{x}$，其中 $k_1, k_2\in\mathbb{R}_+$．

- 反射：$T(\boldsymbol{x}) = (x_1, -x_2)$．

- 旋转：$T(\boldsymbol{x}) = \begin{bmatrix}\cos\varphi & -\sin\varphi \\ \sin\varphi & \cos\varphi\end{bmatrix}$．

注意平移不是线性变换，它是仿射变换．

由定义可知线性映射 $T$ 满足：$\forall x, y\in V, \forall \lambda,\mu\in\mathbb{F} : T(\lambda x + \mu y) = \lambda T(x) + \mu T(y)$．

> **推论 2.1**　设 $T: V\to W$ 是 $\mathbb{F}$ 上的线性映射．设 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_p$ 是 $V$ 中的一组向量，$k_1, \dots, k_p \in \mathbb{F}$，则
>
> $$
> T(k_1\boldsymbol{\alpha}_1 + \dots + k_p\boldsymbol{\alpha}_p) = k_1T(\boldsymbol{\alpha}_1) + \dots + k_pT(\boldsymbol{\alpha}_p)
> $$

> **推论 2.2**　设线性映射 $T:V\to W$，则：
>
> - $T(0) = 0$．
>
> - $\forall x\in V: T(x) = -T(x)$．
>
> - 若 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_p$ 线性相关，则 $T(\boldsymbol{\alpha}_1), \dots, T(\boldsymbol{\alpha}_p)$ 线性相关．
>
> - 若 $T(\boldsymbol{\alpha}_1), \dots, T(\boldsymbol{\alpha}_p)$ 线性无关，则 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_p$ 线性无关．

> **定理 2.3**　设 $T$ 是 $\mathbb{F}$ 上 $n$ 维线性空间 $V$ 到 $m$ 维线性空间 $W$ 的线性映射．当且仅当 $T$ 是单射时，$V$ 中线性无关向量组的像是 $W$ 中线性无关向量组．

线性映射不一定将一组基映射为像空间的一组基．

> **推论 2.3**　设线性空间 $V, W$ 维数相同，且 $T: V\to W$ 是线性映射．当且仅当 $T$ 是单射时 $V$ 中一组基的像是 $W$ 中一组基．此时 $T$ 是双射．

> **定义 2.9（线性映射空间）**　设 $\mathcal{L}(V,W)$ 是 $V\to W$ 的所有线性映射构成的集合．
>
> 设 $T_1, T_2\in\mathcal{L}(V,W)$，定义
>
> $$
> (T_1 + T_2)(\boldsymbol{x}) = T_1(\boldsymbol{x}) + T_2(\boldsymbol{x})\quad (\boldsymbol{x} \in V) \\
> (\lambda T)(\boldsymbol{x}) = \lambda\cdot T(\boldsymbol{x})\quad (\boldsymbol{x} \in V, \lambda\in\mathbb{F})
> $$
>
> $\mathcal{L}(V,W)$ 中赋以加法和数乘构成 $\mathbb{F}$ 上的线性空间，称为**线性映射空间**．特别地，$\mathcal{L}(V)$ 称为**线性变换空间**．

> **定义 2.10（核空间，像空间）**　设 $T\in\mathcal{L}(V,W)$，定义
>
> $$
> N(T) = \left\{ \boldsymbol{x}\in V \,\middle|\, T(\boldsymbol{x})=0 \right\} \\
> R(T) = \left\{ \boldsymbol{y}\in W \,\middle|\, \boldsymbol{y}=T(\boldsymbol{x}) \right\}
> $$
>
> 则 $N(T)$ 是 $V$ 的子空间，$R(T)$ 是 $W$ 的子空间．
>
> 称 $N(T)$ 是 $T$ 的**核空间**，$R(T)$ 是 $T$ 的**像空间**．称 $\dim N(T)$ 为 $T$ 的**零度**，$\dim R(T)$ 为 $T$ 的**秩**．

> **定理 2.4**　设 $T\in\mathcal{L}(V,W)$，则
>
> $$
> \dim N(T) + \dim R(T) = \dim V
> $$

## 2.3　矩阵与同构

> **定义 2.11（矩阵）**　设 $V, W$ 是 $\mathbb{F}$ 上的线性空间，$\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 分别是 $V$ 和 $W$ 的基，$T\in\mathcal{L}(V,W)$．$T(\boldsymbol{\varepsilon}_i)$ 可由 $W$ 的基 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 线性表示，即有
>
> $$
> \begin{cases}
> T(\boldsymbol{\varepsilon}_1) = a_{11}\boldsymbol{\eta}_1 + a_{21}\boldsymbol{\eta}_2 + \dots + a_{m1}\boldsymbol{\eta}_m \\
> \qquad\qquad\qquad\vdots\\
> T(\boldsymbol{\varepsilon}_n) = a_{1n}\boldsymbol{\eta}_1 + a_{2n}\boldsymbol{\eta}_2 + \dots + a_{mn}\boldsymbol{\eta}_m \\
> \end{cases}
> $$
>
> $$
> T(\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n) = [T(\boldsymbol{\varepsilon}_1), \dots, T(\boldsymbol{\varepsilon}_n)] = [\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m]A
> $$
>
> 其中 $A = (a_{ij}) \in \mathbb{F}^{m\times n}$ 称为 $T$ 在 $V$ 的基 $\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $W$ 的基 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 下的**矩阵**．
>
> 若 $V=W$ 则称 $A$ 为线性变换 $T$ 在基 $\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 下的矩阵．

> **定理 2.5**　设 $V, W$ 是 $\mathbb{F}$ 上的线性空间，$\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 分别是 $V$ 和 $W$ 的基．任取 $A = (a_{ij}) \in \mathbb{F}^{m\times n}$，有唯一的线性映射 $T\in\mathcal{L}(V,W)$ 使其在 $V$ 的基 $\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $W$ 的基 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 下的矩阵恰为 $A$．

> **定义 2.12（同构映射）**　设 $V, W$ 是 $\mathbb{F}$ 上的线性空间，若存在双射 $T: V\to W$ 满足：
>
> 1. $\forall x, y\in V : T(x+y) = T(x) + T(y)$
>
> 2. $\forall \lambda\in\mathbb{F}, \forall x\in V : T(\lambda x) = \lambda T(x)$
>
> 则称 $T$ 是 $V$ 到 $W$ 的**同构映射**，并称 $V$ 与 $W$ **同构**．

> **定理 2.6**　设 $V, W$ 是 $\mathbb{F}$ 上的线性空间且维数分别为 $n, m$，则线性映射空间 $\mathcal{L}(V,W)$ 和矩阵空间 $\mathbb{F}^{m\times n}$ 同构．

> **推论 2.4**　设 $V, W$ 是 $\mathbb{F}$ 上的线性空间，$T: V\to W$ 是同构映射，则：
>
> - $T(0) = 0$．
>
> - $\forall x\in V: T(x) = -T(x)$．
>
> - $\forall a_i\in \mathbb{F}, x_i\in V: T(\sum a_ix_i) = \sum a_iT(x_i)$．
>
> - 向量组 $x_1, \dots, x_r$ 线性相关当且仅当 $T(x_1), \dots, T(x_r)$ 线性相关．
>
> - 若 $\varepsilon_1, \dots, \varepsilon_n$ 是 $V$ 的一组基，则 $T(\varepsilon_1), \dots, T(\varepsilon_n)$ 是 $W$ 的一组基．
>
> - $T$ 的逆映射 $T^{-1}: W\to V$ 存在且是同构映射．

> **定理 2.7**　线性空间同构当且仅当它们维数相等．

> **定理 2.8**　设 $T\in\mathcal{L}(V,W)$，$T$ 在 $V$ 的基 $\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $W$ 的基 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 下的矩阵为 $A$．对任意向量 $\boldsymbol{x}\in V$，设
>
> $$
> \begin{aligned}
> \boldsymbol{x} &= [\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n]\boldsymbol{\alpha} \\
> T(\boldsymbol{x}) &= [\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m]\boldsymbol{\beta}
> \end{aligned}
> $$
>
> 则有 $\beta = A\alpha$．

> **定义 2.13（相抵）**　矩阵 $A\in\mathbb{F}^{m\times n}$ 经过有限次初等变换变成矩阵 $B$，则称 $A$ 与 $B$ **相抵**或**等价**，记为 $A \cong B$．

> **定理 2.9**　设 $\dim V=n$，$\dim W=m$．$\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n'$ 是 $V$ 的两组基，$\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 和 $\boldsymbol{\eta}_1', \dots, \boldsymbol{\eta}_m'$ 是 $W$ 的两组基，且有：
>
> $$
> \begin{aligned}{}[\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n'] &= [\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n]Q \\
> [\boldsymbol{\eta}_1', \dots, \boldsymbol{\eta}_m'] &= [\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m]P
> \end{aligned}
> $$
>
> 对于 $T\in\mathcal{L}(V,W)$，设
>
> $$
> \begin{aligned}
> T(\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n) &= [\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m]A \\
> T(\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n') &= [\boldsymbol{\eta}_1', \dots, \boldsymbol{\eta}_m']B
> \end{aligned}
> $$
>
> 则 $B = P^{-1}AQ$．
>
> 线性映射在 $V, W$ 的不同基下的矩阵是相抵的．

> **推论 2.5**　设 $\dim V=n$．$\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n'$ 是 $V$ 的两组基，且有：
>
> $$
> [\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n'] = [\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n]P
> $$
>
> 对于 $T\in\mathcal{L}(V)$，设
>
> $$
> \begin{aligned}
> T(\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n) &= [\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n]A \\
> T(\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n') &= [\boldsymbol{\varepsilon}_1', \dots, \boldsymbol{\varepsilon}_n']B
> \end{aligned}
> $$
>
> 则 $B = P^{-1}AP$．
>
> 线性变换在 $V$ 的不同基下的矩阵是相似的．

> **定理 2.10**　设 $V, W$ 是 $\mathbb{F}$ 上的线性空间，维数分别为 $n, m$，$T: V\to W$ 在 $V$ 的基 $\boldsymbol{\varepsilon}_1, \dots, \boldsymbol{\varepsilon}_n$ 和 $W$ 的基 $\boldsymbol{\eta}_1, \dots, \boldsymbol{\eta}_m$ 下的矩阵为 $A$．则有：
>
> 1. $\dim N(T) = \dim N(A)$
>
> 2. $\dim R(T) = \dim R(A) = \operatorname{rank} A$
>
> 3. $\dim N(A) + \dim R(A) = n$

## 2.4　特征值与特征向量

> **定义 2.14（特征值，特征向量）**　设 $T\in \mathcal{L}(V)$，若存在 $\lambda\in\mathbb{F}$ 与 $V$ 中非零向量 $\boldsymbol{\alpha}$ 使得
>
> $$
> T\boldsymbol{\alpha} = \lambda\boldsymbol{\alpha}
> $$
>
> 则称 $\lambda$ 是 $T$ 的一个**特征值**，称 $\boldsymbol{\alpha}$ 为 $T$ 的属于特征值 $\lambda$ 的一个**特征向量**．

若非零向量 $\boldsymbol{\alpha}\in N(T)$，则 $\boldsymbol{\alpha}$ 是属于特征值 $0$ 的特征向量．

若 $T$ 有 $n=\dim V$ 个线性无关的特征向量 $\boldsymbol{\alpha}_1, \dots, \boldsymbol{\alpha}_n$，则 $T$ 在这些向量构成的基下的矩阵是对角阵．

> **定义 2.15（特征矩阵，特征多项式）**　设 $A\in\mathbb{F}^{n\times n}$，矩阵 $\lambda I - A$ 称为 $A$ 的**特征矩阵**，行列式 $|\lambda I-A|$ 称为 $A$ 的**特征多项式**．$|\lambda I-A|=0$ 的根称为 $A$ 的**特征值**．$(\lambda I - A)\boldsymbol{\alpha} = 0$ 的非零解 $\boldsymbol{\alpha}$ 称为属于特征值 $\lambda$ 的**特征向量**．

> **定理 2.11**　设 $\lambda_1, \dots, \lambda_n$ 是 $A = (a_{ij}) \in \mathbb{C}^{n\times n}$ 的全部特征值，则
>
> $$
> \prod_{i}\lambda_i = \det A, \quad \sum_{i}\lambda_i = \sum_{i}a_{ii} = \operatorname{tr}(A)
> $$
>
> 其中 $\operatorname{tr}(A)$ 称为 $A$ 的**迹**．

> **定义 2.16（特征子空间）**　设 $\lambda$ 是 $A\in\mathbb{C}^{n\times n}$ 的一个特征值，集合
>
> $$
> E(\lambda) = \left\{ \boldsymbol{x}\in\mathbb{C}^n \,\middle|\, A\boldsymbol{x} = \lambda\boldsymbol{x} \right\}
> $$
>
> 构成 $\mathbb{C}^n$ 的线性子空间，称为属于特征值 $\lambda$ 的**特征子空间**．

事实上，$E(\lambda) = N(\lambda I-A)$．

> **定义 2.17（几何重数，代数重数）**　$\dim E(\lambda)$ 为特征值 $\lambda$ 的**几何重数**．
>
> 特征值 $\lambda$ 作为特征方程根的重数称为 $\lambda$ 的**代数重数**．

> **定理 2.12**　复方阵任一特征值的几何重数不超过其代数重数．
>
> 复方阵任一特征值几何重数与代数重数相等，当且仅当其可相似对角化．

> **推论 2.6**　若 $n$ 阶方阵 $A$ 与 $B$ 相似，则 $A$ 与 $B$ 的特征多项式、特征值、秩、行列式、迹均相同．

> **定理 2.13**　矩阵 $A$ 的属于不同特征值的特征向量线性无关．

注意：属于不同特征值的特征向量*不一定正交*！

设矩阵 $A\in\mathbb{R}^{n\times n}$ 的特征值为 $\lambda_1, \dots, \lambda_n$，其中 $|\lambda_1|>|\lambda_i|$，属于这些特征值的特征向量依次为 $\alpha_1, \dots, \alpha_n$．对于任意 $x \in \mathbb{R}^n$，设 $x = \sum a_i\alpha_i$，则

$$
\lim_{k\to\infty} {A^kx\over \lambda_1^k}
= \lim_{k\to\infty} \sum a_i\left({\lambda_i\over\lambda_1}\right)^k\alpha_i
= a_1\alpha_1
$$

从而可通过迭代计算求出模最大的特征值，以及属于该特征值的一个特征向量．

## 2.5　酉变换与酉矩阵

> **定义 2.18（正交变换，酉变换）**　若欧几里得空间中的线性变换 $T$ 保持向量内积不变，则称 $T$ 为**正交变换**．
>
> 若酉空间中的线性变换 $T$ 保持向量内积不变，则称 $T$ 为**酉变换**．

> **定义 2.19（正交矩阵，酉矩阵）**　若 $n$ 阶实方阵 $A$ 满足 $A^\mathsf{T} A = AA^\mathsf{T} = I$，则称 $A$ 为**正交矩阵**．
>
> 若 $n$ 阶复方阵 $A$ 满足 $A^\mathsf{H} A = AA^\mathsf{H} = I$，则称 $A$ 为**酉矩阵**．

所谓的*酉*是 unitary 的音译，意指单位化的，保持长度不变．

> **定理 2.14**　设 $V$ 是 $n$ 维欧几里得空间 / 酉空间，$T\in\mathcal{L}(V)$，则以下命题等价：
>
> 1. $T$ 是正交变换 / 酉变换．
>
> 2. $T$ 保持长度不变，即 $\Vert T(x)\Vert = \Vert x\Vert$．
>
> 3. 若 $\varepsilon_1, \dots, \varepsilon_n$ 是 $V$ 中一组标准正交基，则 $T(\varepsilon_1), \dots, T(\varepsilon_n)$ 也是 $V$ 中一组标准正交基．
>
> 4. $T$ 在 $V$ 的任一标准正交基下的矩阵为正交矩阵 / 酉矩阵．

> **推论 2.7**　正交矩阵 / 酉矩阵 $A$ 满足以下性质：
>
> 1. 正交矩阵行列式为 $\pm 1$．酉矩阵行列式的模为 $1$．
>
> 2. $A^{-1}$ 为正交矩阵 / 酉矩阵．
>
> 3. 正交矩阵 / 酉矩阵的乘积仍为正交矩阵 / 酉矩阵．
>
> 4. $A$ 的所有特征值的模为 $1$．

> **定理 2.15**　矩阵 $A$ 是 $n$ 阶正交矩阵 / 酉矩阵当且仅当 $A$ 的 $n$ 个列向量或行向量构成 $n$ 维欧几里得空间 / 酉空间的一组标准正交基．

> **定义 2.20（Givens 矩阵）**　对于 $i, j$，定义 **Givens 矩阵**（初等旋转矩阵）$T(i, j) = (t_{ij}) \in \mathbb{R}^{n\times n}$，其中
>
> - $\forall k \neq i\land k\neq j$，$t_{kk} = 1$．
>
> - $t_{ii} = t_{jj} = \cos\varphi$．
>
> - $t_{ij} = \sin\varphi$，$t_{ji} = -\sin\varphi$．
>
> - 矩阵中其它元素为 $0$．
>
> 也就是说
>
> $$
> T(i, j) = \begin{bmatrix}
> I \\
> & \cos\varphi & & \sin\varphi \\
> & & I \\
> & -\sin\varphi & & \cos\varphi \\
> & & & & I
> \end{bmatrix}
> $$

Givens 矩阵是正交矩阵，相当于在 $e_iOe_j$ 平面上旋转．对于向量 $x$，必然存在有限个 Givens 矩阵的乘积 $T$ 使得 $Tx = \Vert x\Vert e_1$，这相当于将 $x$ 旋转至 $e_1$ 方向．

> **定义 2.21（Householder 矩阵）**　设 $\boldsymbol{w} \in \mathbb{C}^n$ 是单位向量，定义 **Householder 矩阵**（初等反射矩阵）$H(\boldsymbol{w}) = I - 2\boldsymbol{w}\boldsymbol{w}^\mathsf{H}$．

Householder 矩阵是酉矩阵，具有 $n-1$ 重特征值 $1$ 以及一重特征值 $-1$．设 $x, y\in\mathbb{C}^n$ 且 $x\neq y$，则存在单位向量 $w$ 使得 $H(w)x=y$ 的充要条件是 $x^\mathsf{H} x = y^\mathsf{H} y$ 且 $x^\mathsf{H} y = y^\mathsf{H} x$，此时可取 $w = {\mathrm{e}^{\mathrm{i}\theta}\over \Vert x-y\Vert}(x-y)$，其中 $\theta$ 为任一实数．
