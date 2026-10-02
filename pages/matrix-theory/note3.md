# 3　矩阵分解

## 3.1　满秩分解

> **定理 3.1（满秩分解）**　设 $A\in\mathbb{C}^{m\times n}_r$（$r>0$），则存在列满秩矩阵 $B\in \mathbb{C}^{m\times r}_r$ 和行满秩矩阵 $C\in\mathbb{C}^{r\times n}_r$ 使得 $A=BC$．

**证**　取 $R(A)$ 的一组基 $\boldsymbol{b}_1, \dots, \boldsymbol{b}_r$，排成矩阵 $B$ 的各列 $B = [\boldsymbol{b}_1, \dots, \boldsymbol{b}_r]$．考察 $A$ 的各列在这组基下的坐标 $\boldsymbol{c}_1, \dots, \boldsymbol{c}_n$，排成矩阵 $C$ 的各列 $C = [\boldsymbol{c}_1, \dots, \boldsymbol{c}_n]$．即有 $A = BC$ 且 $\operatorname{rank} B = \operatorname{rank} C = r$． $\square$

由于 $R(A)$ 中基的选取不唯一，满秩分解的方式也不唯一．

> **定理 3.2**　设 $A\in\mathbb{C}^{m\times n}_r$（$r>0$），$A = B_1C_1$ 和 $A = B_2C_2$ 是 $A$ 的两种不同的满秩分解，则存在可逆阵 $D\in \mathbb{C}^{r\times r}$ 使得 $B_1 = B_2D$ 且 $C_1 = D^{-1}C_2$．

$D$ 即是 $B_2$ 各列组成的基到 $B_1$ 各列组成的基的*过渡矩阵*．于是对于坐标有 $C_2 = DC_1 \implies C_1 =D^{-1}C_2$．

乘积为单位阵的两个矩阵*不一定*可逆．但乘积为单位阵的两个方阵必然可逆．

> **定理 3.3**　对于任意矩阵 $A$，$Ax = 0$ 与 $A^\mathsf{H} Ax = 0$ 同解．

**证**　（$\Longrightarrow$） $A^\mathsf{H} Ax = A^\mathsf{H} (Ax) = A^\mathsf{H} 0 = 0$．

（$\Longleftarrow$） $\Vert Ax\Vert^2 = x^\mathsf{H} A^\mathsf{H} A x = x^\mathsf{H} (A^\mathsf{H} A x) = x^\mathsf{H} 0 = 0 \implies Ax = 0$． $\square$

> **推论 3.1**　$\operatorname{rank} A = \operatorname{rank} A^\mathsf{H} = \operatorname{rank} A^\mathsf{H} A = \operatorname{rank} AA^\mathsf{H}$．

> **定理 3.4（左逆，右逆）**　设 $A\in\mathbb{C}^{m\times n}_r$（$r>0$）．$A$ **左逆**存在（即存在 $B$ 使得 $BA=I_n$）当且仅当 $A$ 为列满秩矩阵（$n=r$）．$A$ **右逆**存在（即存在 $B$ 使得 $AB=I_m$）当且仅当 $A$ 为行满秩矩阵（$m=r$）．

**证**　左逆和右逆是类似的．对于左逆：

- （$\Longrightarrow$） $\operatorname{rank}(BA) = n \implies \operatorname{rank} A \geq n$．

- （$\Longleftarrow$） $\operatorname{rank}(A^\mathsf{H} A) = \operatorname{rank} A = n$，从而 $A^\mathsf{H} A$ 满秩可逆，$(A^\mathsf{H} A)^{-1}A^\mathsf{H} A = I$，即 $(A^\mathsf{H} A)^{-1}A^\mathsf{H}$ 是 $A$ 的一个左逆． $\square$

## 3.2　QR 分解

> **定义 3.1**　若复方阵 $A$ 可分解为
>
> $$A = QR$$
>
> 其中 $Q$ 为酉矩阵，$R$ 为上三角矩阵，则称矩阵 $A$ 可作 **QR 分解**或酉三角分解．
>
> 若 $A=QR$ 中 $A$ 为实方阵，$Q$ 为正交矩阵，$R$ 为上三角矩阵，此时称 $A=QR$ 为**正交三角分解**．

> **定理 3.5**　若实方阵 $A$ 满秩，则存在正交矩阵 $Q$ 及正线上三角阵 $R$ 满足 $A = QR$ 且分解唯一．

$Q$ 对应一组标准正交基，$R$ 相当于 $Q$ 各列组成的基到 $A$ 各列组成的基的过渡矩阵．

由于 $A$ 满秩，可以将 $A$ 的各列 Gram–Schmidt 正交化得到的标准正交基 $\boldsymbol{y}_1, \dots, \boldsymbol{y}_n$ 排成 $Q$ 的各列，$R$ 的各列是 $A$ 的各列在这组基下的坐标，容易验证 $R$ 是上三角阵且对角线均为正．具体来说，设 $A = [\boldsymbol{a}_1, \dots, \boldsymbol{a}_n]$，依次计算：

$$
\boldsymbol{y}_k = \boldsymbol{a}_k - \sum_{i=1}^{k-1} (\boldsymbol{a}_k, \boldsymbol{x}_i) \boldsymbol{x}_i, \quad
\boldsymbol{x}_k = {\boldsymbol{y}_k \over \Vert \boldsymbol{y}_k\Vert}
$$

就有：

$$
\boldsymbol{a}_k = \Vert \boldsymbol{y}_k\Vert\boldsymbol{x}_k + \sum_{i=1}^{k-1} (\boldsymbol{a}_k, \boldsymbol{x}_i)\boldsymbol{x}_i
$$

所以 $R$ 是上三角阵，并且对角线均是正的：

$$
Q = [\boldsymbol{x}_1, \dots, \boldsymbol{x}_n], \quad
R = \begin{bmatrix}
\Vert \boldsymbol{y}_1\Vert & (\boldsymbol{a}_2, \boldsymbol{x}_1) & \cdots & (\boldsymbol{a}_n, \boldsymbol{x}_1) \\
& \Vert \boldsymbol{y}_2\Vert & \cdots & (\boldsymbol{a}_n, \boldsymbol{x}_2) \\
& & \ddots & \vdots \\
& & & \Vert \boldsymbol{y}_n\Vert
\end{bmatrix}
$$

若 QR 分解不唯一，设 $A = Q_1R_1 = Q_2R_2$ 是两种不同的分解方式，则 $I = Q_1^\mathsf{T} Q_2 = Q_1^{-1}Q_2 = R_1R_2^{-1}$，所以 $R_1=R_2$，$Q_1=Q_2$，QR 分解是唯一的．

若不要求 $R$ 对角全为正实数，则 QR 分解不唯一．

> **定理 3.6**　若复方阵 $A$ 满秩，则存在酉矩阵 $U$ 及正线上三角阵 $R$ 满足 $A = UR$ 且分解唯一．

> **定义 3.2（列正交规范矩阵，行正交规范矩阵）**　设 $Q\in\mathbb{C}^{m\times n}$，若 $Q^\mathsf{H} Q=I_n$，则 $Q$ 称为**列正交规范矩阵**，$Q^\mathsf{H}$ 称为**行正交规范矩阵**．

对于 $n\leq m$，$A \in \mathbb{C}^{m\times n}_n$，对 $A$ 的各列 Gram–Schmidt 正交化，可以得到列正交规范矩阵 $Q_1$，于是 $A$ 分解为 $A = Q_1R_1$，其中 $R_1$ 为正线上三角阵．将 $Q_1$ 的各列扩充为 $\mathbb{C}^m$ 的标准正交基，可以得到以下推论．

> **推论 3.2**　对于 $n\leq m$，$A \in \mathbb{C}^{m\times n}_n$ 可分解为 $A = UR$，其中 $U$ 为 $m$ 阶酉矩阵，$R = \begin{bmatrix}R_1\\O\end{bmatrix}$，$R_1$ 为正线上三角阵．

## 3.3　Schur 分解

> **定理 3.7（Schur 引理）**　任意复方阵 $A$ 相似于上三角阵 $\Lambda$，即存在可逆阵 $P$ 使得 $\Lambda = P^{-1}AP$ 为上三角阵，且上三角阵 $\Lambda$ 的对角元素是 $A$ 的特征值．

> **定理 3.8（Schur 引理）**　任意复方阵 $A$ 酉相似于上三角阵 $\Lambda$，即存在酉矩阵 $U$ 使得 $U^\mathsf{H} A U = \Lambda$ 为上三角阵，且上三角阵 $\Lambda$ 的对角元素是 $A$ 的特征值．

**证**　设 $\Lambda = P^{-1}AP$，对 $P$ 作 QR 分解得到 $P = UR$，其中 $U$ 为酉矩阵．代入有

$$
\Lambda = P^{-1}AP = (UR)^{-1}AUR = R^{-1}U^\mathsf{H} AUR \;\implies\;
R\Lambda R^{-1} = U^\mathsf{H} AU
$$

由 $R, R^{-1}, \Lambda$ 均为上三角阵可得 $R\Lambda R^{-1}$ 也为上三角阵，且对角元素是 $A$ 的特征值． $\square$

注意实矩阵的特征值可能是复数，因此对于实矩阵，不一定存在正交阵能将其相似到上三角阵．

> **定理 3.9（实方阵 Schur 引理）**　若实方阵 $A$ 的特征值均为实数，则存在正交矩阵 $Q$ 使得 $Q^\mathsf{T} AQ$ 是上三角阵，且对角元素是 $A$ 的特征值．

> **定义 3.3（矩阵多项式）**　设 $A\in\mathbb{C}^{n\times n}$，定义 $\mathbb{C}$ 上的多项式
>
> $$
> \varphi(\lambda) = \sum_{i=0}^n a_i\lambda^i \quad (a_0,\dots,a_n\in\mathbb{C})
> $$
>
> 则
>
> $$
> \varphi(A) = \sum_{i=0}^n a_iA^i
> $$
>
> 称为**矩阵多项式**．

> **推论 3.3**　$$\varphi(A)\phi(A) = \phi(A)\varphi(A)$$
>
> $$P^{-1}\varphi(A)P = \varphi(P^{-1}AP)$$

> **推论 3.4**　设 $A\in\mathbb{C}^{n\times n}$ 的所有特征值为 $\lambda_1, \dots, \lambda_n$，则 $\varphi(A)$ 的所有特征值为 $\varphi(\lambda_1), \dots, \varphi(\lambda_n)$．$A$ 的属于特征值 $\lambda_i$ 的特征向量也是 $\varphi(A)$ 的属于特征值 $\varphi(\lambda_i)$ 的特征向量．

> **定义 3.4（零化多项式）**　设 $A\in\mathbb{C}^{n\times n}$，若多项式 $g(\lambda)$ 满足 $g(A)=O$，则称 $g(\lambda)$ 为 $A$ 的**零化多项式**．

> **定义 3.5（最小多项式）**　设 $A\in\mathbb{C}^{n\times n}$，则 $A$ 的所有零化多项式中次数最小的首一多项式称为 $A$ 的**最小多项式**，记为 $m_A(\lambda)$．

> **定理 3.10**　$A$ 的最小多项式唯一．$A$ 的零化多项式均是 $A$ 的最小多项式的倍式．$A$ 的特征多项式与最小多项式在不计重数的条件下有相同的根．

> **定理 3.11（Hamilton–Cayley 定理）**　设 $A\in\mathbb{C}^{n\times n}$ 的特征多项式为 $f_A(\lambda) = |\lambda I-A|$，则 $f_A(A) = O$．

方阵的特征多项式是其**零化多项式**，因此 $m_A(\lambda) \mid f_A(\lambda)$．

事实上，$A$ 的最小多项式 $m_A(\lambda)$ 中根 $\lambda_i$ 的次数，是 $A$ 的 Jordan 标准型中特征值为 $\lambda_i$ 的 Jordan 块的最大阶数．

## 3.4　对角化分解

> **定义 3.6（单纯矩阵）**　若复方阵 $A$ 相似于对角阵 $\Lambda$，即存在可逆阵 $P$ 使得 $P^{-1}AP = \Lambda$，则称 $A$ 为**可对角化矩阵**或**单纯矩阵**．

> **定理 3.12**　设 $A\in\mathbb{C}^{n\times n}$ 的全部互异特征值为 $\lambda_1, \dots, \lambda_m$（$m\leq n$），则以下命题等价：
>
> 1. $A$ 是单纯矩阵（也即 $A$ 可相似对角化）．
>
> 2. $A$ 有 $n$ 个线性无关的特征向量．
>
> 3. 每个特征值 $\lambda_i$ 的代数重数均等于其几何重数．
>
> 4. $\sum_{i=1}^m \dim E(\lambda_i) = n$．
>
> 5. 最小多项式 $m_A(\lambda)$ 无重根．

> **推论 3.5**　若方阵 $A$ 有 $n$ 个互不相同的特征值，则 $A$ 必然可对角化．

> **推论 3.6**　若方阵 $A$ 的某个零化多项式无重根，则 $A$ 必然可对角化．

> **定义 3.7（酉相似对角化）**　若复方阵 $A$ 酉相似于对角阵 $\Lambda$，即存在酉矩阵 $U$ 使得 $U^\mathsf{H} AU = \Lambda$，则称 $A$ 是**可酉相似对角化的**．

若复方阵 $A$ 可酉相似对角化，则 $A$ 属于不同特征值的特征子空间相互正交．

> **推论 3.7**　复方阵 $A$ 是 Hermite 矩阵当且仅当 $A$ 的所有特征值 $\lambda_1, \dots, \lambda_n$ 均为实数，且存在酉矩阵 $U\in\mathbb{C}^{n\times n}$ 使得 $U^\mathsf{H} AU = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$．

> **推论 3.8**　实方阵 $A$ 是对称阵当且仅当 $A$ 的所有特征值 $\lambda_1, \dots, \lambda_n$ 均为实数，且存在正交矩阵 $Q\in\mathbb{R}^{n\times n}$ 使得 $Q^\mathsf{T} AQ = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$．

> **定义 3.8（规范矩阵）**　设 $A\in\mathbb{C}^{n\times n}$，若 $A^\mathsf{H} A = AA^\mathsf{H}$，则 $A$ 称为**正规矩阵**或**规范矩阵**．

> **定理 3.13**　复方阵 $A$ 是规范矩阵当且仅当 $A$ 酉相似于对角阵．

> **推论 3.9**　复方阵 $A$ 是规范矩阵当且仅当 $A$ 有 $n$ 个特征向量构成 $\mathbb{C}^n$ 的一组标准正交基．

对于规范矩阵 $A$，从 $A$ 的属于不同特征值的特征子空间各取出一组标准正交基，将这些基中的向量依次排成矩阵 $U$ 的各列，即有 $U$ 是酉矩阵且 $U^\mathsf{H} AU$ 是对角阵．

> **推论 3.10**　实方阵 $A$ 是正交矩阵当且仅当 $A$ 的所有特征值的模均为 $1$，且存在酉矩阵 $U$ 使得 $U^\mathsf{H} AU = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$，其中 $\lambda_1,\dots,\lambda_n$ 是 $A$ 的所有特征值．

> **推论 3.11**　复方阵 $A$ 是酉矩阵当且仅当 $A$ 的所有特征值的模均为 $1$，且存在酉矩阵 $U$ 使得 $U^\mathsf{H} AU = \operatorname{diag}(\lambda_1,\dots,\lambda_n)$，其中 $\lambda_1,\dots,\lambda_n$ 是 $A$ 的所有特征值．

事实上，正交矩阵的复特征值是成对出现的．若 $z=a+b\mathrm{i}$ 是正交矩阵的特征值，则 $\bar z=a-b\mathrm{i}$ 也是其特征值．注意到实矩阵 $\begin{bmatrix}a & -b\\b & a\end{bmatrix}$ 给出特征值 $a\pm b\mathrm{i}$，正交矩阵的复特征值的模均为 $1$，因此正交矩阵**实相似**于以下标准型：

> **定义 3.9（正交相似标准型）**　对于正交矩阵 $A$，存在正交矩阵 $Q$ 将 $A$ 相似为以下标准型：
>
> $$
> Q^\mathsf{T} AQ = \operatorname{diag}\left(1, 1, \dots, -1, -1, \dots, \begin{bmatrix}\cos\theta_1 & -\sin\theta_1 \\ \sin\theta_1 & \cos\theta_1\end{bmatrix}, \dots\right)
> $$

## 3.5　谱分解

*谱*是泛函分析中的概念，在有限维线性空间中，可以认为谱就是*特征值*．谱分解即是将矩阵分解到其属于不同特征值的各个特征子空间上．

> **定义 3.10（正规矩阵谱分解）**　设 $\lambda_1, \dots, \lambda_m$ 是正规矩阵 $A\in\mathbb{C}^{n\times n}$ 的 $m$ 个互不相同的特征值，代数重数分别为 $d_1, \dots, d_m$，且 $\sum_{1\leq i\leq m} d_i = n$．则 $A$ 的**谱分解式**为
>
> $$
> A = \sum_{j=1}^m \lambda_j E_j
> $$
>
> 其中 $E_j = \sum_{i=1}^{d_j} \boldsymbol{u}_{ji}\boldsymbol{u}_{ji}^\mathsf{H}$ 称为 $A$ 的**谱阵**，$\boldsymbol{u}_{j1}, \dots, \boldsymbol{u}_{jd_j}$ 是属于 $\lambda_j$ 的 $d_j$ 个单位正交的特征向量．

方阵 $E_j$ 所对应的是到特征子空间 $E(\lambda_j)$ 的投影变换．

可以先考虑投影最简单的情形——$\operatorname{diag}(I_{d_j}, O)$ 是向 $\operatorname{span}\left\{ \boldsymbol{e}_1, \dots, \boldsymbol{e}_{d_j} \right\}$ 的投影．将 $E(\lambda_j)$ 上的基 $\left\{ \boldsymbol{u}_1, \dots, \boldsymbol{u}_{d_j} \right\}$ 扩充成 $\mathbb{C}^n$ 的一组基 $\left\{ \boldsymbol{u}_i \right\}$ 后排成方阵 $P$ 的各列，容易知道 $P$ 是 $\left\{ \boldsymbol{e}_i \right\}$ 到 $\left\{ \boldsymbol{u}_i \right\}$ 的过渡矩阵．于是，向特征子空间的投影可以通过坐标变换得到，即是 $P \operatorname{diag}(I_{d_j}, O) P^{-1}$．而对于正规矩阵，扩充时可将基 $\left\{ \boldsymbol{u}_i \right\}$ 取为标准正交基，于是 $P$ 可为酉矩阵，更进一步地有：

$$
\begin{aligned}
P \operatorname{diag}(I_{d_j}, O) P^{-1} &= P \operatorname{diag}(I_{d_j}, O) P^\mathsf{H} \\
&= \begin{bmatrix}\boldsymbol{u}_1 & \cdots & \boldsymbol{u}_n\end{bmatrix}
\begin{bmatrix}I_{d_j} & \\ & O\end{bmatrix}
\begin{bmatrix}\boldsymbol{u}_1^\mathsf{H} \\ \vdots \\ \boldsymbol{u}_n^\mathsf{H}\end{bmatrix} \\
&= \begin{bmatrix}\boldsymbol{u}_1 & \cdots & \boldsymbol{u}_n\end{bmatrix}
\begin{bmatrix}I_{d_j} & \\ & O\end{bmatrix}
\begin{bmatrix}I_{d_j} & \\ & O\end{bmatrix}
\begin{bmatrix}\boldsymbol{u}_1^\mathsf{H} \\ \vdots \\ \boldsymbol{u}_n^\mathsf{H}\end{bmatrix} \\
&= \begin{bmatrix}\boldsymbol{u}_1 & \cdots & \boldsymbol{u}_{d_j} & 0 & \cdots\end{bmatrix}
\begin{bmatrix}\boldsymbol{u}_1^\mathsf{H} \\ \vdots \\ \boldsymbol{u}_{d_j}^\mathsf{H} \\ 0 \\ \vdots\end{bmatrix} \\
&= \sum_{1\leq i\leq d_j} \boldsymbol{u}_i \boldsymbol{u}_i^\mathsf{H}
\end{aligned}
$$

> **定理 3.14**　设正规矩阵 $A\in\mathbb{C}^{n\times n}$ 有谱分解式 $A = \sum_{j=1}^m \lambda_jE_j$，其中 $\lambda_1, \dots, \lambda_m$ 是 $A$ 的所有互异特征值，$E_1, \dots, E_m$ 是 $A$ 的 $m$ 个谱阵，则对任意 $i, j = 1,\dots, m$ 且 $i\neq j$ 有：
>
> 1. $E_j = E_j^\mathsf{H} = (E_j)^2$．
>
> 2. $E_i E_j = 0$．
>
> 3. $E_i A = A E_i = \lambda_i E_i$．
>
> 4. $\sum_{k=1}^m E_k = I$．
>
> 5. 谱阵集 $\left\{ E_1, \dots, E_m \right\}$ 唯一．

> **定理 3.15**　设 $n$ 阶复方阵 $A$ 有 $m$ 个互异特征值 $\lambda_1, \dots, \lambda_m$，则 $A$ 为正规矩阵当且仅当存在 $m$ 个 $n$ 阶方阵 $E_1, \dots, E_m$ 使得对任意 $i, j = 1, \dots, m$ 且 $i\neq j$ 有：
>
> 1. $A = \sum_{k=1}^m \lambda_k E_k$．
>
> 2. $E_j = E_j^\mathsf{H} = (E_j)^2$．
>
> 3. $E_i E_j = 0$．
>
> 4. $E_i A = AE_i = \lambda_i E_i$．
>
> 5. $\sum_{k=1}^m E_k = I$．
>
> 6. 谱阵集 $\left\{ E_1, \dots, E_m \right\}$ 唯一．

可以结合 $E_j$ 投影变换的含义考虑．

> **定义 3.11（幂等矩阵）**　设 $E\in\mathbb{C}^{n\times n}$，若 $E^2 = E$，则称 $E$ 为**幂等矩阵**或**投影矩阵**．

> **定义 3.12（正交投影矩阵）**　设 $E\in\mathbb{C}^{n\times n}$，若 $E^2 = E = E^\mathsf{H}$，则称 $E$ 为**正交投影矩阵**．

> **定理 3.16**　若 $E\in\mathbb{C}^{n\times n}_r$ 是幂等矩阵，则：
>
> - $E^\mathsf{H}, E^{\ast}, I-E$ 都是幂等矩阵．
>
> - $E$ 为单纯阵且相似于对角阵 $\Lambda = \operatorname{diag}(I_r, O)$．
>
> - $\operatorname{tr} E = r$．
>
> - $\mathbb{C}^n = R(E) \dotplus N(E)$，$N(E) = R(I-E)$．
>
> - $E\boldsymbol{x} = \boldsymbol{x} \iff \boldsymbol{x} \in R(E)$．

设 $a_1, \dots, a_m\in\mathbb{C}^n$ 上的线性无关向量，$V_m = \operatorname{span}(a_1, \dots, a_m)$．将 $a_1, \dots, a_m$ 排成矩阵 $A$ 的各列，即 $A = [a_1, \dots, a_m] \in \mathbb{C}^{n\times m}$，则到 $V_m$ 上的正交投影矩阵为 $E_m = A(A^\mathsf{H} A)^{-1}A^\mathsf{H}$．

> **定义 3.13（单纯矩阵谱分解）**　设 $\lambda_1, \dots, \lambda_m$ 是单纯矩阵 $A\in\mathbb{C}^{n\times n}$ 的 $m$ 个互不相同的特征值，代数重数分别为 $d_1, \dots, d_m$，且 $\sum_{1\leq i\leq m} d_i = n$．则 $A$ 的**谱分解式**为
>
> $$
> A = \sum_{j=1}^m \lambda_j E_j
> $$
>
> 其中 $E_j = \sum_{i=1}^{d_j} \boldsymbol{\alpha}_{ji}\boldsymbol{\beta}_{ji}^\mathsf{H}$ 称为 $A$ 的**谱阵**，$\boldsymbol{\alpha}_{j1}, \dots, \boldsymbol{\alpha}_{jd_j}$ 是属于 $\lambda_j$ 的 $d_j$ 个线性无关的特征向量．将 $A$ 的 $n$ 个线性无关的特征向量排成矩阵 $P$ 的各列，设 $P^{-1}$ 是 $[\boldsymbol{\beta}_1^\mathsf{H}, \dots, \boldsymbol{\beta}_n^\mathsf{H}]^\mathsf{H}$．

> **定理 3.17**　设 $n$ 阶复方阵 $A$ 有 $m$ 个互异特征值 $\lambda_1, \dots, \lambda_m$，则 $A$ 为单纯矩阵当且仅当存在 $m$ 个 $n$ 阶方阵 $E_1, \dots, E_m$ 使得对任意 $i, j = 1, \dots, m$ 且 $i\neq j$ 有：
>
> 1. $A = \sum_{k=1}^m \lambda_k E_k$．
>
> 2. $E_j = (E_j)^2$．
>
> 3. $E_i E_j = 0$．
>
> 4. $E_i A = AE_i = \lambda_i E_i$．
>
> 5. $\sum_{k=1}^m E_k = I$．
>
> 6. 谱阵集 $\left\{ E_1, \dots, E_m \right\}$ 唯一．

> **推论 3.12**　设单纯矩阵 $A\in\mathbb{C}^{n\times n}$ 的谱分解为 $A = \sum_{j=1}^m \lambda_jE_j$，$f(\lambda)$ 为 $\mathbb{C}$ 上的任一多项式，则 $f(A) = \sum_{j=1}^m f(\lambda_j)E_j$．

> **推论 3.13**　设单纯矩阵 $A\in\mathbb{C}^{n\times n}$ 的谱分解式为 $A = \sum_{j=1}^m \lambda_jE_j$，则对于 $1\leq i\leq m$ 有：
>
> $$
> E_i = {\prod_{\substack{1\leq k\leq m \\ k\neq i}} (A - \lambda_k I) \over \prod_{\substack{1\leq k\leq m \\ k\neq i}} (\lambda_i - \lambda_k)}
> $$

上式和 Lagrange *插值公式*本质相同．令 $f_i(\lambda) = \prod_{\substack{1\leq k\leq m \\ k\neq i}} (\lambda - \lambda_k)$，则 $E_i = f_i(A) / f_i(\lambda_i)$．

## 3.6　Jordan 分解

或称*根子空间分解*．

> **定义 3.14（$\lambda$ 矩阵）**　以 $\lambda$ 多项式为元素的矩阵称为 **$\lambda$ 矩阵**，记为 $A(\lambda)$，即 $A(\lambda) = [a_{ij}(\lambda)]_{m\times n}$，$a_{ij}(\lambda)\in P_n(\lambda)$．

> **定义 3.15（秩）**　$\lambda$ 矩阵 $A(\lambda)$ 中非零子式的最高阶数定义为 $A(\lambda)$ 的**秩**，记为 $\operatorname{rank} A(\lambda)$．

$n$ 阶方阵 $A$ 的特征矩阵 $\lambda I - A$ 秩为 $n$，因此 $\lambda I - A$ 总是满秩的．

> **定义 3.16（逆矩阵）**　设 $A(\lambda)$ 是 $n$ 阶 $\lambda$ 方阵，若存在 $n$ 阶 $\lambda$ 方阵 $B(\lambda)$ 满足 $A(\lambda)B(\lambda) = B(\lambda)A(\lambda) = I$，则称 $A(\lambda)$ 是可逆的，并称 $B(\lambda)$ 为 $A(\lambda)$ 的**逆矩阵**，记为 $A(\lambda)^{-1}$．

> **定理 3.18**　$\lambda$ 方阵 $A(\lambda)$ 可逆当且仅当其行列式 $|A(\lambda)|$ 为非零常数．

> **定义 3.17（初等变换）**　以下三种变换称为 $\lambda$ 矩阵的**初等变换**：
>
> 1. $\lambda$ 矩阵的两行或两列互换位置．
>
> 2. $\lambda$ 矩阵的某行或某列乘以非零常数．
>
> 3. $\lambda$ 矩阵的某行或某列，乘以某一 $\lambda$ 多项式后加到零一行或列上．

三种初等变换分别对应三种初等矩阵．左乘初等矩阵相当于初等行变换，右乘初等矩阵相当于初等列变换．初等矩阵可逆，初等变换保持秩不变．

> **定义 3.18（相抵）**　若 $\lambda$ 矩阵 $A(\lambda)$ 经过有限次初等变换化为 $B(\lambda)$，则称 $A(\lambda)$ 与 $B(\lambda)$ 相抵，记为 $A(\lambda)\cong B(\lambda)$．

> **定义 3.19（行列式因子）**　设 $A(\lambda)$ 的秩为 $r$．对于 $1\leq k\leq r$，$A(\lambda)$ 的全部 $k$ 阶子式的首一最大公因式称为 **$k$ 阶行列式因子**，记为 $D_k(\lambda)$．

> **定理 3.19**　相抵的 $\lambda$ 矩阵有相同的秩和各阶行列式因子．

> **定理 3.20（Smith 标准型）**　设 $A(\lambda)$ 的秩为 $r$，则
>
> $$
> A(\lambda)\cong \begin{bmatrix} d_1(\lambda) \\ &\ddots \\ &&d_r(\lambda) \\ &&&O \end{bmatrix}
> $$
>
> 其中 $d_i(\lambda)$ 是首一多项式，且 $d_i(\lambda) \mid d_{i+1}(\lambda)$，称此标准型为 $A(\lambda)$ 的 **Smith 标准型**．

$\lambda$ 矩阵的 Smith 标准型是唯一的．$A(\lambda)$ 不一定是方阵，因此 Smith 标准型不一定是对角阵．

> **定义 3.20（不变因子）**　在 $A(\lambda)$ 的 Smith 标准型中，$d_1(\lambda),\dots,d_r(\lambda)$ 由 $A(\lambda)$ 唯一确定，称为 $A(\lambda)$ 的**不变因子**．

实际上，行列式因子 $D_i(\lambda) = d_1(\lambda)d_2(\lambda)\cdots d_i(\lambda)$，也就是说 $d_i(\lambda) = D_i(\lambda) / D_{i-1}(\lambda)$，特殊地 $d_1(\lambda) = D_1(\lambda)$．

> **推论 3.14**　$\lambda$ 矩阵 $A(\lambda)$ 与 $B(\lambda)$ 相抵当且仅当它们的不变因子完全相同．

> **定义 3.21（初等因子）**　设 $A(\lambda)$ 的不变因子为 $d_1(\lambda), \dots, d_r(\lambda)$，且有
>
> $$
> \begin{cases}
> d_1(\lambda) &= (\lambda - \lambda_1)^{e_{11}} \cdots (\lambda - \lambda_s)^{e_{1s}} \\
> &\qquad\vdots \\
> d_r(\lambda) &= (\lambda - \lambda_1)^{e_{r1}} \cdots (\lambda - \lambda_s)^{e_{rs}} \\
> \end{cases}
> $$
>
> 则所有指数非零的因子 $(\lambda - \lambda_j)^{e_{ij}}$ 称为 $A(\lambda)$ 的**初等因子**．初等因子构成的可重集称为**初等因子组**．

初等因子组相同的 $\lambda$ 矩阵不一定相抵．

> **定理 3.21**　$\lambda$ 矩阵 $A(\lambda)\cong B(\lambda)$ 当且仅当它们有相同的初等因子，且 $\operatorname{rank} A(\lambda) = \operatorname{rank} B(\lambda)$．

> **定理 3.22**　设 $A(\lambda)$ 为对角块矩阵，即 $A(\lambda) = \operatorname{diag}(A_1(\lambda), \dots, A_s(\lambda))$，则 $A_1(\lambda), \dots, A_s(\lambda)$ 初等因子的全体就是 $A(\lambda)$ 的全部初等因子．

> **定理 3.23**　复方阵 $A$ 和 $B$ 相似当且仅当它们的特征矩阵相抵．

> **推论 3.15**　复方阵 $A$ 是单纯矩阵当且仅当特征矩阵 $\lambda I - A$ 的初等因子是一次的．
>
> 复方阵 $A$ 是单纯矩阵当且仅当特征矩阵 $\lambda I - A$ 的不变因子无重根．

> **定义 3.22（Jordan 块）**　设 $A = (a_{ij}) \in \mathbb{C}^{n\times n}$，特征矩阵 $\lambda I - A$ 的初等因子为 $(\lambda - \lambda_1)^{n_1}, \dots, (\lambda - \lambda_s)^{n_s}$，对 $(\lambda - \lambda_i)^{n_i}$ 作 $n_i$ 阶矩阵
>
> $$
> J_i = \begin{bmatrix} \lambda_i & 1 \\ &\lambda_i & 1 \\ &&\ddots & \ddots \\ &&& \lambda_i & 1 \\ &&&&\lambda_i \end{bmatrix}_{n_i\times n_i}
> $$
>
> 称为 $A$ 的 **Jordan 块**．

Jordan 块的特征多项式即是其最小多项式．

> **定义 3.23（Jordan 标准型）**　设 $n$ 阶复方阵 $A$ 的特征矩阵为 $\lambda I - A$，其初等因子为
>
> $$
> (\lambda - \lambda_1)^{n_1}, \dots, (\lambda - \lambda_s)^{n_s}
> $$
>
> 对应的 Jordan 块分别记为 $J_1, \dots, J_s$，则由这些 Jordan 块构成的 $n$ 阶对角块矩阵
>
> $$
> J = \operatorname{diag}(J_1, \dots, J_s)
> $$
>
> 称为 $A$ 的 **Jordan 标准型**．

> **定理 3.24**　复方阵 $A$ 与其 Jordan 标准型 $J$ 相似．

> **定理 3.25（Frobenius 定理）**　设 $A\in\mathbb{C}^{n\times n}$，特征矩阵 $\lambda I - A$ 的 Smith 标准型为 $\operatorname{diag}(d_1(\lambda), \dots, d_n(\lambda))$，则 $A$ 的最小多项式 $m_A(\lambda) = d_n(\lambda)$．
