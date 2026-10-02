# 线性映射与矩阵 习题

**题 2.1**　设 $T$ 是数域 $\mathbb{F}$ 上 $n$ 维线性空间 $V$ 到 $m$ 维线性空间 $W$ 的线性映射．若某一线性无关向量组的像是 $W$ 中线性无关向量组，则下列说法正确的是：

1. $T$ 为单射．
2. $T$ 为满射．
3. $T$ 为双射．
4. 以上说法都不对．

> **解**　$\boxed{\text{(4)}}$． $\square$

&nbsp;

**题 2.2**　线性变换为正交变换的必要而非充分条件是：

1. 保持向量的长度不变．
2. 将标准正交基变成标准正交基．
3. 保持随意两个向量的夹角不变．
4. 在任一标准正交基下的矩阵为正交矩阵．

> **解**　$\boxed{\text{(3)}}$．保持夹角不变无法保证单位向量在变换后仍是单位的． $\square$

&nbsp;

**题 2.3**　设 $T$ 是线性空间 $V$ 的线性变换，则下列说法正确的是：（多选）

1. $T^m = T^{m-1}T$（$m\geq 2$）也是 $V$ 的线性变换．
2. 线性变换 $T$ 和方阵 $A$ 一一对应．
3. 若 $T$ 在欧几里得空间 $V$ 的一组标准正交基 $\left\{ x_1, \dots, x_n \right\}$ 下的矩阵是对称阵，则 $(Tx_i, x_j) = (x_i, Tx_j)$．
4. 线性变换 $T$ 可逆，则逆变换是线性变换．

> **解**　$\boxed{\text{(1)(3)(4)}}$．对于 (2)，仅在某一标准正交基下是对应的．对于 (3)，设 $T$ 给定标准正交基下的矩阵是 $A$，容易验证
>
> $$
> (Tx_i, x_j) = \sum_{k} (A_{ki}x_k, x_j) = (A_{ji}x_j, x_j) = A_{ji}
> $$
>
> 同理 $(x_i, Tx_j) = A_{ij} = A_{ji}$． $\square$

&nbsp;

**题 2.4**　下列说法正确的是：（多选）

1. 线性空间中同一向量在不同基下的坐标一定不同．
2. 记 $S$ 是由给定复方阵 $A$ 的所有矩阵多项式构成的集合，则 $S$ 是 $\mathbb{C}$ 上的有限维线性空间．
3. 设 $T$ 在欧几里得空间 $V$ 的一组标准正交基 $\left\{ x_1, \dots, x_n \right\}$ 下的矩阵是实对称阵，则对于任意 $1\leq i, j\leq n$ 有 $(Tx_i, x_j) = (x_i, Tx_j)$．
4. 对于线性空间 $V_1, \dots, V_m$（$m>2$），若对于任意 $1\leq i\leq m$ 有 $V_i\cap V_j=\left\{ 0 \right\}$，则 $V_1+\dots+V_m$ 为直和．

> **解**　$\boxed{\text{(2)(3)}}$．对于 (4)，考察 $\mathbb{R}^2$ 的子空间 $V_1 = \operatorname{span}\left\{ e_1 \right\}, V_2 = \operatorname{span}\left\{ e_2 \right\}, V_3 = \operatorname{span}\left\{ e_1 + e_2 \right\}$． $\square$

&nbsp;

**题 2.5**　对于 $n$ 阶方阵 $A$，下列说法正确的是：（多选）

1. 所有特征值的特征向量线性无关．
2. $\dim E(\lambda) \geq 1$．
3. 属于特征值 $\lambda$ 的全部特征向量构成一个线性子空间．
4. 若其所有的特征值代数重数等于几何重数，则矩阵 $A$ 可相似对角化．

> **解**　$\boxed{\text{(2)(4)}}$．对于 (3)，注意零向量不是特征向量．属于特征值 $\lambda$ 的全部特征向量与零向量的并集构成一个线性子空间． $\square$

&nbsp;

**题 2.6**　对于 $A\in\mathbb{C}^{n\times m}$，$B\in\mathbb{C}^{m\times n}$，下述说法正确的是：（多选）

1. $AB$ 与 $BA$ 有相同的非零特征根．
2. $\operatorname{tr}(AB) = \operatorname{tr}(BA)$．
3. $\operatorname{rank}(AB) = \operatorname{rank}(BA)$．
4. 若 $AB=BA$，$m=n$，且 $\xi$ 是矩阵 $B$ 的属于特征值$\lambda$ 的特征向量，则 $A\lambda$ 也是矩阵 $B$ 的属于特征值 $\lambda$ 的特征向量．

> **解**　$\boxed{\text{(1)(2)}}$．对于 (3)，考虑 $A = \begin{bmatrix}0&1\\0&0\end{bmatrix}$，$B = \begin{bmatrix}1&0\\0&0\end{bmatrix}$，有 $AB = O$，$BA = A$．对于 (4)，不能保证 $A\lambda \neq 0$．对于 (1)，事实上我们有接下来叙述的定理． $\square$

> **定理 2.1**　对于 $A\in\mathbb{C}^{n\times m}$，$B\in\mathbb{C}^{m\times n}$，有
>
> $$
> \lambda^m|\lambda I_n - AB| = \lambda^n|\lambda I_m - BA|
> $$

**证**　现在取

$$
P = \begin{bmatrix} \lambda I_n & A \\ B & I_m \end{bmatrix}, \quad
Q = \begin{bmatrix} I_n & O \\ -B & \lambda I_m \end{bmatrix}
$$

就有

$$
PQ = \begin{bmatrix} \lambda I_n-AB & \lambda A \\ O & \lambda I_m \end{bmatrix}, \quad
QP = \begin{bmatrix} \lambda I_n & \lambda A \\ O & \lambda I_m-BA \end{bmatrix}
$$

取行列式即得

$$
\lambda^m|\lambda I_n - AB| = \det(PQ) = \det P \cdot \det Q = \det(QP) = \lambda^n|\lambda I_m - BA|
$$

$\square$

&nbsp;

**题 2.7**　设 $T$ 是数域 $\mathbb{F}$ 上 $n$ 维线性空间 $V$ 到 $m$ 维线性空间 $W$ 的线性映射，若 $T$ 为单射，则 $m\geq n$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.8**　属于同一线性变换的各个矩阵的特征值完全相同．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.9**　设 $n$ 阶矩阵 $A$ 满足 $A^2=A$，$R(A)$ 和 $N(A)$ 分别表示 $A$ 的值域和零空间，则 $\dim(R(A)\cap N(A))=0$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.10**　设 $\alpha_1, \alpha_2$ 是酉空间 $V$ 的标准正交基，$T$ 是 $V$ 上的酉变换，满足 $T\alpha_1 = a\alpha_1+\mathrm{i}\alpha_2$，$T\alpha_2 = \alpha_1+b\alpha_2$，则 $a=0, b=0$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.11**　设 $T$ 是线性空间 $V^n$（$n>1$）中的线性变换，若数 $\lambda$ 不是 $T$ 的特征值，则 $V^n$ 的子空间 $V_\lambda=\left\{ x \,\middle|\, Tx=\lambda x,x\in V^n \right\}$ 的维数是 $0$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.12**　设 $T$ 是变换，$A$ 是复方阵，则以下定义的 $T$ 是线性变换的有：（多选）

1. $T(A) = A^{\ast}$，其中 $A^{\ast}$ 是 $A$ 的伴随矩阵．
2. $T(A) = A^\mathsf{T}$．
3. $T(A) = A^\mathsf{H}$．
4. $T(A) = AB$，其中 $B$ 是已知复方阵．

> **解**　$\boxed{\text{(2)(4)}}$．对于 (3)，有 $T(\mathrm{i} A) = (\mathrm{i} A)^\mathsf{H} = (\mathrm{i}\mathfrak{R} A - \mathfrak{I} A)^\mathsf{H} = -(\mathfrak{I} A + \mathrm{i}\mathfrak{R} A)^\mathsf{T} \neq (\mathfrak{I} A + \mathrm{i}\mathfrak{R} A)^\mathsf{T} = \mathrm{i}(\mathfrak{R} A - \mathrm{i}\mathfrak{I} A)^\mathsf{T} = \mathrm{i} T(A)$． $\square$

&nbsp;

**题 2.13**　在多项式空间 $P_n(x)$ 中，定义 $T:P_n\to P_n$ 为微分变换，则 $T$ 在任一基下的矩阵都是不可对角化的．

> **解**　$\boxed{\surd}$．考虑微分方程 $y' = \lambda y$，通解为 $y = C\mathrm{e}^{\lambda x}$，也就是说在 $P_n(x)$ 中仅有 $y=C\neq 0$ 是特征向量． $\square$

&nbsp;

**题 2.14**　定义映射 $T:X\to \operatorname{tr} X$，其中 $X$ 是 $n$ 阶复方阵，则 $T$ 是线性空间 $\mathbb{R}^n$ 到 $\mathbb{R}$ 的满足 $T(XY)=T(YX)$ 和 $T(I)=n$ 的唯一线性映射．

> **解**　$\boxed{\surd}$．对于 $i\neq j$，应有
>
> $$
> T(E_{ij}) = T(E_{ii}E_{ij}) = T(E_{ij}E_{ii}) = T(O) = 0
> $$
>
> 并且应有
>
> $$
> T(E_{ii}) = T(E_{ij}E_{ji}) = T(E_{ji}E_{ij}) = T(E_{jj})
> $$
>
> 对于 $A\in\mathbb{C}^{n\times n}$，有 $T(A) = \sum_{i}\sum_{j} A_{ij}T(E_{ij}) = \sum_{i} A_{ii}T(E_{ii})$．利用 $T(I) = \sum_{i} T(E_{ii}) = n \implies T(E_{ii}) = 1$，得到 $T(A) = \sum A_{ii} = \operatorname{tr} A$． $\square$

&nbsp;

**题 2.15**　若 $x$ 是 $A$ 的特征向量，则 $x$ 必是矩阵多项式 $f(A)$ 的特征向量．

> **解**　$\boxed{\surd}$．特征值为 $f(\lambda)$． $\square$

&nbsp;

**题 2.16**　设 $A = \begin{bmatrix}1&0&0\\1&0&1\\0&1&0\end{bmatrix}$，则对于 $n\geq 3$ 有 $A^n = A^{n-2} + A^2 - I$．

> **解**　$\boxed{\surd}$．$A^n = A^{n-2} + A^2 - I \implies (A^{n-2} - I)(A^2 - I) = O$，其中 $A - I$ 是 $A^{n-2} - I$ 的公因式，考虑验证 $(A - I)(A^2 - I) = O$．有
>
> $$
> A^2 - I = \begin{bmatrix}1&0&0\\1&1&0\\1&0&1\end{bmatrix} - I = \begin{bmatrix}0&0&0\\1&0&0\\1&0&0\end{bmatrix}
> $$
>
> 显然 $A - I$ 第一行全零，于是 $(A - I)(A^2 - I) = O$． $\square$

&nbsp;

**题 2.17**　方阵 $A$ 的任一特征值的代数重数不大于其几何重数．

> **解**　$\boxed{\times}$．几何重数 $\leq$ 代数重数． $\square$

&nbsp;

**题 2.18**　设 $A$ 是秩为 $r$ 的 $n$ 阶幂等矩阵，则 $A + 2I$ 的行列式为 $3^r2^{n-r}$．

> **解**　$\boxed{\surd}$．$A$ 的非零各列是 $A$ 的特征值为 $1$ 的特征向量，取其中线性无关的 $r$ 个向量并扩充为线性空间的一组基，将其排成矩阵 $P$ 的各列即有 $P^{-1}AP = \operatorname{diag}(I_r, O)$．于是
>
> $$
> \det(A+2I) = \det(P^{-1}(A+2I)P) = \det(P^{-1}AP + 2P^{-1}P) = \det(I_r + 2I) = 3^r2^{n-r}
> $$
>
> $\square$

&nbsp;

**题 2.19**　设 $T$ 是 $\mathbb{R}^3$ 的线性空间，定义为 $T([a_1, a_2, a_3]) = [0, a_1, a_2]$，则 $T^2$ 的像空间维数为 $1$，$T^2$ 的核空间维数为 $2$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.20**　已知 $A = \begin{bmatrix}1&1\\1&1\end{bmatrix}$，则不存在常数 $c$ 使得 $A^4-8A^3-2A^2+2A=cA$．

> **解**　$\boxed{\times}$．注意到 $A^2=2A$ 即知 $c$ 存在． $\square$

&nbsp;

**题 2.21**　设 $A$ 是秩为 $3$ 的 $5$ 阶幂等矩阵，则 $A + 2I$ 的行列式为 $108$．

> **解**　$\boxed{\surd}$．$\det(A+2I) = 3^3\times 2^{5-3} = 108$． $\square$

&nbsp;

**题 2.22**　设 $A$ 是 $n$ 阶复方阵，满足 $A^k=O$，其中 $k$ 为自然数，则 $A+I$ 的行列式为 $1$．

> **解**　$\boxed{\surd}$．$A$ 的 Jordan 标准型 $\operatorname{diag}(J_{n_1}(0), \dots, J_{n_k}(0))$ 仅由特征值为 $0$ 的 Jordan 块构成，则 $A+I$ 与 $\operatorname{diag}(J_{n_1}(1), \dots, J_{n_k}(1))$ 相似，$\det(A+I)=1$． $\square$

&nbsp;

**题 2.23**　设实数域上的多项式空间 $P_3[t]$ 中的多项式 $f(t) = a_0 + a_1t + a_2t^2 + a_3t^3$ 在线性变换 $T$ 下的像为 $Tf(t) = (a_0-a_1) + (a_1-a_2)t + (a_2-a_3)t^2 + (a_3-a_0)t^3$，则 $\dim(R(T)) = 3$，$\dim(N(T)) = 1$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.24**　设 $T_1$ 和 $T_2$ 是线性空间 $V$ 的线性变换，且满足 $T_1^2=T_1$，$T_2^2=T_2$．则 $R(T_1) = R(T_2)$ 的充分必要条件是 $T_1T_2=T_2$ 且 $T_2T_1=T_1$．

> **解**　$\boxed{\surd}$．
>
> - （$\Longrightarrow$） 对于任意 $x \in V$，由于 $R(T_1) = R(T_2)$，必存在 $y \in V$ 使得 $T_1x = T_2y$，于是
>    $$
>    T_1 x = T_2 y = T_2^2 y = T_2(T_1 x)
>    $$
>    由 $x$ 的任意性即知 $T_1 = T_2T_1$．同理 $T_2 = T_1T_2$．
>
> - （$\Longleftarrow$） $\forall x : T_1(T_2x) = T_2x \implies R(T_2)\subseteq R(T_1)$，同理有 $R(T_1)\subseteq R(T_2)$，因此 $R(T_1)=R(T_2)$． $\square$

&nbsp;

**题 2.25**　在 $\mathbb{R}^n$ 中，$(\alpha, \beta) = \Vert\alpha\Vert_2\cdot\Vert\beta\Vert_2$ 成立的充分必要条件是 $\alpha, \beta$ 线性相关且 $\alpha^\mathsf{T}\beta\geq 0$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.26**　设 $\alpha_1, \alpha_2$ 是线性空间 $V^2$ 的一组基，$T_1$ 与 $T_2$ 是 $V^2$ 的线性变换，其中 $T_1(\alpha_1)=\alpha_1^\mathsf{T}$，$T_1(\alpha_2)=\alpha_2^\mathsf{T}$，且 $T_2(\alpha_1+\alpha_2)=(\alpha_1^\mathsf{T}+\alpha_2^\mathsf{T})$，$T_2(\alpha_1-\alpha_2)=(\alpha_1^\mathsf{T}-\alpha_2^\mathsf{T})$，则 $T_1=T_2$．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.27**　设任意矩阵 $A\in P^{n\times n}$，给定矩阵 $C\in P^{n\times n}$，定义变换 $T(A)=CA-AC$．则 $T$ 是 $P^{n\times n}$ 中的线性变换．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.28**　设 $T$ 是数域 $P$ 上的 $n$ 维线性空间 $V^n$ 的一个线性变换．如果 $T$ 在任意一组基下的矩阵都相同，则 $T$ 是数乘变换．

> **解**　$\boxed{\surd}$． $\square$

&nbsp;

**题 2.29**　矩阵 $A$ 与 $B$ 相似，$C$ 与 $D$ 相似，则矩阵 $\begin{bmatrix}A&O\\O&C\end{bmatrix}$ 与 $\begin{bmatrix}B&O\\O&D\end{bmatrix}$ 相似．

> **解**　$\boxed{\surd}$．若 $B = P^{-1}AP$，$D = Q^{-1}CQ$，则取 $T = \operatorname{diag}(P, Q)$，有 $T^{-1} = \operatorname{diag}(P^{-1}, Q^{-1})$，从而 $\operatorname{diag}(B, D) = T^{-1}\operatorname{diag}(A, C)T$． $\square$

&nbsp;

**题 2.30**　对于任意 $n$ 阶矩阵 $A$，有 $\operatorname{rank}(A^n) = \operatorname{rank}(A^{n+1})$．

> **解**　$\boxed{\surd}$．对于任意 $k$ 有 $R(A^{k+1})\subseteq R(A^k)$，并且若 $R(A^{k+1}) = R(A^k)$，就有
>
> $$
> R(A^{k+1}) = \left\{ Ax \,\middle|\, x\in R(A^k) \right\} = \left\{ Ax \,\middle|\, x\in R(A^{k+1}) \right\} = R(A^{k+2})
> $$
>
> 于是对 $t>0$ 有 $R(A^{k+t}) = R(A^k)$．而 $n \geq \operatorname{rank}(A^0) \geq \dots \geq \operatorname{rank}(A^{n+1})$ 中必有相邻两项相等，即得 $\operatorname{rank}(A^n) = \operatorname{rank}(A^{n+1})$． $\square$

&nbsp;

**题 2.31**　设线性空间 $V^n$ 中的线性变换 $T_1$ 与 $T_2$ 满足 $T_1T_2=T_1+T_2$，则 $T_1$ 有一个特征值为 $1$．

> **解**　$\boxed{\times}$．考虑 $T_1(x) = T_2(x) = 2x$． $\square$

&nbsp;

**题 2.32**　已知 $n$ 阶矩阵 $A$ 满足 $A^2 = kA$（$k\neq 0$），则 $A$ 相似于对角阵．

> **解**　$\boxed{\surd}$．注意到 $f(\lambda) = \lambda^2 - k\lambda = \lambda(\lambda-k)$ 是 $A$ 的零化多项式，并且多项式的两个根 $0, k$ 的重数均为 $1$，因此 $A$ 的 Jordan 标准型中各个 Jordan 块的阶数不超过 $1$，从而 $A$ 可对角化． $\square$

&nbsp;

**题 2.33**　设矩阵 $A, B, C$ 分别为 $m\times n, n\times k, k\times p$ 矩阵，则 $\operatorname{rank}(ABC) \geq \operatorname{rank}(AB) + \operatorname{rank}(BC) - \operatorname{rank}(B)$ 恒成立．

> **解**　$\boxed{\surd}$．这即是 Frobenius 不等式． $\square$

> **定理 2.2（Frobenius 不等式）**　设 $A\in \mathbb{C}^{m\times k}, B\in \mathbb{C}^{k\times p}, C\in \mathbb{C}^{p\times n}$，则
>
> $$
> \operatorname{rank}(AB) + \operatorname{rank}(BC) \leq \operatorname{rank}(ABC) + \operatorname{rank}(B)
> $$

**证**　首先有

$$
\operatorname{rank}(AB) = \operatorname{rank}(B) - \dim(R(B) \cap N(A))
$$

在上式中将 $B$ 替换为 $BC$ 有

$$
\operatorname{rank}(ABC) = \operatorname{rank}(BC) - \dim(R(BC) \cap N(A))
$$

并且由 $R(BC) \subseteq R(B)$ 有

$$
\begin{aligned}
& R(BC) \cap N(A) \subseteq R(B) \cap N(A) \\
\implies{}& \dim(R(BC) \cap N(A)) - \dim(R(B) \cap N(A)) \leq 0
\end{aligned}
$$

于是

$$
\begin{aligned}
& \operatorname{rank}(AB) + \operatorname{rank}(BC) \\
={}& \operatorname{rank}(ABC) + \operatorname{rank}(B) + \dim(R(BC) \cap N(A)) - \dim(R(B) \cap N(A)) \\
\leq{}& \operatorname{rank}(ABC) + \operatorname{rank}(B)
\end{aligned}
$$

$\square$

在 Frobenius 不等式中代入 $B = I$ 可以得到以下不等式．

> **定理 2.3（Sylvester 不等式）**　设 $A\in \mathbb{C}^{m\times r}, B\in \mathbb{C}^{r\times n}$，则
>
> $$
> \operatorname{rank}(A) + \operatorname{rank}(B) \leq \operatorname{rank}(AB) + r
> $$

&nbsp;

**题 2.34**　若 $A$ 为实矩阵，并且 $A^\mathsf{T} A = AA^\mathsf{T}$，则 $A$ 必是对称矩阵．

> **解**　$\boxed{\times}$．考虑 $A = \begin{bmatrix}1&1\\-1&1\end{bmatrix}$，$A^\mathsf{T} A = AA^\mathsf{T} = \begin{bmatrix}2&0\\0&2\end{bmatrix}$． $\square$

&nbsp;

**题 2.35**　若 $AB=BA$，则 $A$ 与 $B$ 有公共的特征向量．

> **解**　$\boxed{\surd}$．方便起见，以 $\mathcal{A}$ 表记 $A$ 对应的线性变换，$\mathcal{B}$ 同理．
>
> 首先取 $A$ 的一个特征值 $\lambda$ 以及对应的特征向量 $x$．有 $A(Bx) = B(Ax) = \lambda Bx$，于是 $Bx$ 也为 $A$ 的属于 $\lambda$ 的特征向量，对于 $B^n x$ 同理．
>
> 接下来考虑 $U = \operatorname{span}\left\{ B^n x \,\middle|\, n\geq 0 \right\}$，容易知道 $U \subseteq E(\lambda)$ 并且 $\mathcal{B}(U) \subseteq U$，也即 $U$ 是在 $\mathcal{B}$ 下的 $E(\lambda)$ 的**不变子空间**．考虑 $\mathcal{B}$ 在 $U$ 上的**限制** $\mathcal{B}|_U$，由于 $\dim U > 0$，必存在 $\mathcal{B}|_U$ 的特征向量 $y$．注意到 $y\in U$ 意味着 $y$ 也是 $A$ 的特征向量，因此 $A$ 与 $B$ 存在公共的特征向量． $\square$

&nbsp;

**题 2.36**　若方阵 $A\neq O$，但 $A^k=O$（$k$ 为某一正整数），则 $A$ 可相似于一个对角矩阵．

> **解**　$\boxed{\times}$．考虑 $J_k(0)$． $\square$

&nbsp;

**题 2.37**　对于线性变换 $T_1, T_2$，若 $T_1^2=T_1$，$T_2^2=T_2$，$T_1T_2=T_1$，$T_2T_1=T_2$，则 $T_1$ 与 $T_2$ 有相同的核空间．

> **解**　$\boxed{\surd}$．$\forall x \in N(T_1) : T_2 x = T_2T_1 x = T_2 0 = 0 \implies x\in N(T_2)$，从而 $N(T_1) \subseteq N(T_2)$．同理亦有 $N(T_2) \subseteq N(T_1)$． $\square$

&nbsp;

**题 2.38**　设 $\mathbb{R}^3$ 中的线性变换 $T$ 为 $T[(x, y, z)] = (x+y-z, y+z, x+2y)$，则 $R(T)$ 与 $N(T)$ 的维数分别是$\underline{\qquad}$．

> **解**　注意到 $(x+2y) - (y+z) = x+y-z$，于是 $\boxed{R(T) = 2\text{，}N(T) = 1}$． $\square$

&nbsp;

**题 2.39**　设 $A\in\mathbb{R}^{n\times n}$，$A^2=A$，且 $\operatorname{rank}(A) = r$，则 $|2I-A| =$ $\underline{\qquad}$．

> **解**　与题 2.18 类似，有 $|2I-A| = |2I - I_r| = \boxed{2^{n-r}}$． $\square$

&nbsp;

**题 2.40**　设实数域上的多项式空间 $P_3[t]$ 中的多项式 $f(t) = a_0 + a_1t + a_2t^2 + a_3t^3$ 在线性变换 $T$ 下的像为 $Tf(t) = (a_0-a_1) + (a_1-a_2)t + (a_2-a_3)t^2 + (a_3-a_0)t^3$，则 $\dim(R(T)) = $ $\underline{\qquad}$，$\dim(N(T)) = $ $\underline{\qquad}$．

> **解**　题 2.23 已经给出答案了．$\dim(R(T)) = \boxed{3}$，$\dim(N(T)) = \boxed{1}$． $\square$

&nbsp;

**题 2.41**　设欧几里得空间 $V$ 的基 $x_1, x_2, \dots, x_n$ 的度量矩阵为 $G$，正交变换 $T$ 在该基下的矩阵为 $A$，则下列说法正确的是：

1. $G = I$．
2. $A^\mathsf{T} G A = G$．
3. $Tx_1, Tx_2, \dots, Tx_n$ 是 $V$ 的一组标准正交基．
4. $G$ 可能为不可逆矩阵．

> **解**　$\boxed{\text{(2)}}$．对于 (1)(3)，$x_1, x_2, \dots, x_n$ 不一定为标准正交基．对于 (4)，$G$ 是正定对称阵，必然可逆．对于 (2)，正交变换保持内积不变． $\square$
